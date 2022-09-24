import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const SearchCard = (props: any) => {
  const { user, onClick } = props;
  const { userName, accountHandle } = user;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onClick(accountHandle)}
    >
      <View style={styles.leftContainer}></View>
      <View style={styles.rightContainer}>
        <Text style={styles.displayName}>{userName}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default SearchCard;
