import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import {
  Container,
  ImageItem,
  Item,
  Title,
  Text,
  Footer,
  Button,
  ButtonText,
  TestView,
  ButtonTextPrev,
  ButtonTextNext
} from './styles';
import { ImageCarouselItem } from './types';

const {width} = Dimensions.get('window');

const SPACING = 5;
const ITEM_LENGTH = width * 0.8; // Item is a square. Therefore, its height and width are of the same length.
const EMPTY_ITEM_LENGTH = (width - ITEM_LENGTH) / 2;
const BORDER_RADIUS = 20;
const CURRENT_ITEM_TRANSLATE_Y = 48;


interface ImageCarouselProps {
  data: ImageCarouselItem[];
}

const ImageCarousel: FC<ImageCarouselProps> = ({data}) => {
  const scrollX = useRef(new Animated.Value(0)).current;
  const [dataWithPlaceholders, setDataWithPlaceholders] = useState<
    ImageCarouselItem[]
  >([]);
  const currentIndex = useRef<number>(0);
  const flatListRef = useRef<FlatList<any>>(null);
  const [isNextDisabled, setIsNextDisabled] = useState<boolean>(false);
  const [isPrevDisabled, setIsPrevDisabled] = useState<boolean>(false);

  useEffect(() => {
    setDataWithPlaceholders([{id: -1}, ...data, {id: data.length}]);
    currentIndex.current = 1;
    setIsPrevDisabled(true);
  }, [data]);

  const handleOnViewableItemsChanged = useCallback(
    ({viewableItems}) => {
      const itemsInView = viewableItems.filter(
        ({item}: {item: ImageCarouselItem}) => item.images && item.title,
      );

      if (itemsInView.length === 0) {
        return;
      }

      currentIndex.current = itemsInView[0].index;

      setIsNextDisabled(currentIndex.current === data.length);
      setIsPrevDisabled(currentIndex.current === 1);
    },
    [data],
  );

  const handleOnPrev = () => {
    if (currentIndex.current === 1) {
      return;
    }

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current - 1,
      });
    }
  };

  const handleOnNext = () => {
    if (currentIndex.current === data.length) {
      return;
    }

    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({
        animated: true,
        index: currentIndex.current + 1,
      });
    }
  };

  // `data` perameter is not used. Therefore, it is annotated with the `any` type to merely satisfy the linter.
  const getItemLayout = (_data: any, index: number) => ({
    length: ITEM_LENGTH,
    offset: ITEM_LENGTH * (index - 1),
    index,
  });

  const getRandomImage = (images: string[]) => {
    return images[Math.floor(Math.random() * images.length)]
  
  }

// useeffect with function to get a random image from the array when user enters in the screen
  useEffect(() => {
    const randomImage = getRandomImage(data[currentIndex.current - 1].images)
    console.log(randomImage)
  }, [currentIndex.current])
  
  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={dataWithPlaceholders}
        renderItem={({item, index}) => {
          if (!item.images || !item.title) {
            return <View style={{width: EMPTY_ITEM_LENGTH}} />;
          }

          const inputRange = [
            (index - 2) * ITEM_LENGTH,
            (index - 1) * ITEM_LENGTH,
            index * ITEM_LENGTH,
          ];

          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [
              CURRENT_ITEM_TRANSLATE_Y * 2,
              CURRENT_ITEM_TRANSLATE_Y,
              CURRENT_ITEM_TRANSLATE_Y * 2,
            ],
            extrapolate: 'clamp',
          });

          return (
            <Item>
              <Animated.View
                style={[
                  {
                    transform: [{translateY}],
                  },
                  styles.itemContent,
                ]}>
                <ImageItem source={{uri: getRandomImage(item.images)}} />
                <TestView>
                  <Title>{item.title}</Title>
                  <Text>{item.description}</Text>
                </TestView>
              </Animated.View>
            </Item>
          );
        }}
        getItemLayout={getItemLayout}
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        bounces={false}
        decelerationRate={0}
        renderToHardwareTextureAndroid
        contentContainerStyle={styles.flatListContent}
        snapToInterval={ITEM_LENGTH}
        snapToAlignment="start"
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={{
          itemVisiblePercentThreshold: 100,
        }}
      />

      <Footer>
        <Button
          onPress={handleOnPrev}
          disabled={isPrevDisabled}
          isDisabled={isPrevDisabled}
          >
          <ButtonTextPrev
            accessibilityLabel="Go To Previous Item">
            ◂
          </ButtonTextPrev>
        </Button>

        <Button
          onPress={handleOnNext}
          disabled={isNextDisabled}
          isDisabled={isNextDisabled}
          >
          <ButtonTextNext
            accessibilityLabel="Go To Next Item">
            ▸
          </ButtonTextNext>
        </Button>
      </Footer>
    </Container>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  flatListContent: {
    height: 500,
    padding: 0,
    alignItems: 'center',
    marginBottom: CURRENT_ITEM_TRANSLATE_Y,
    backgroundColor: '#F5FAF7',
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderBottomLeftRadius: BORDER_RADIUS,
    borderBottomRightRadius: BORDER_RADIUS,
  },
  itemContent: {
    alignItems: 'center',
    borderRadius: BORDER_RADIUS + SPACING,
    marginRight: SPACING * 7,
    height: '100%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
      },
});