import { View, Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  useAnimatedGestureHandler,
  withSpring,
  event,
} from "react-native-reanimated";
import {
  TapGestureHandler,
  PanGestureHandler,
} from "react-native-gesture-handler";

const AnimatedImage = Animated.createAnimatedComponent(Image);
const AnimatedView = Animated.createAnimatedComponent(View);

const EmojiSticker = ({ size, src }) => {
  const scaleImage = useSharedValue(size);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onDrag = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
  });

  const containerStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  const onDoubleTap = useAnimatedGestureHandler({
    onActive: () => {
      if (scaleImage.value !== size * 2) {
        scaleImage.value = scaleImage.value * 2;
      }
      console.log("double tapped");
    },
  });

  const imageStyle = useAnimatedStyle(() => {
    return {
      width: withSpring(scaleImage.value),
      height: withSpring(scaleImage.value),
    };
  });
  return (
    <PanGestureHandler onGestureEvent={onDrag}>
      <AnimatedView style={[containerStyle, { top: -350 }]}>
        <TapGestureHandler onGestureEvent={onDoubleTap} numberOfTaps={2}>
          <AnimatedImage
            source={src}
            resizeMode="contain"
            style={[imageStyle, { width: size, height: size }]}
          />
        </TapGestureHandler>
      </AnimatedView>
    </PanGestureHandler>
  );
};

export default EmojiSticker;
