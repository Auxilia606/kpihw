import React, {useMemo} from 'react';
import {Animated, Dimensions, StyleSheet, View} from 'react-native';

/**
 * 원형으로 돌아가면서 아이템을 배치하는 리스트 (디자인 변경으로 지금은 사용하지 않음)
 * @param props
 * @returns
 */
type CircularListProps<T> = {
  data: T[];
  renderItem: (params: {item: T; index: number}) => React.JSX.Element;
  radius?: number;
};

const CircularList = <T extends unknown>(props: CircularListProps<T>) => {
  const {data, renderItem, radius = Dimensions.get('screen').width / 2} = props;

  const positionList = useMemo(() => {
    return data.map((_, index) => ({
      translateX: radius * Math.sin((2 * Math.PI * index) / data.length),
      translateY: radius * Math.cos((2 * Math.PI * index) / data.length) * -1,
    }));
  }, [data, radius]);

  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <Animated.View
            key={index}
            style={[
              styles.item,
              {
                transform: [
                  {translateX: positionList[index].translateX},
                  {translateY: positionList[index].translateY},
                ],
              },
            ]}>
            {renderItem({item, index})}
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {position: 'absolute'},
});

export default CircularList;
