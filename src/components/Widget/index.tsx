import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native'
import BottomSheet from '@gorhom/bottom-sheet';
import { theme } from '../../theme';
import { styles } from './styles';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler'
import { Options } from '../Options';
import { Form } from '../Form';
import { feedbackTypes } from '../../utils/feedbackTypes'

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {
  const bottonSheetRef = useRef<BottomSheet>(null)

  const handleOpen = () => {
    bottonSheetRef.current?.expand()
  }
  return (
    <>
      <TouchableOpacity
        style={styles.button}
        onPress={handleOpen}
      >
        <ChatTeardropDots
          size={24}
          weight="bold"
          color={theme.colors.text_on_brand_color} />
      </TouchableOpacity>
      <BottomSheet
        ref={bottonSheetRef}
        snapPoints={[1, 300]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        <Form 
          feedbackType='OTHER'
        />
      </BottomSheet>
    </>
  );
}
export default gestureHandlerRootHOC(Widget)