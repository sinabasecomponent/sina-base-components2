/**
 * Copyright (c) Nicolas Gallagher.
 *
 * This source code is licensed under the MIT license found in the LICENSE file
 * in the root directory of this source tree.
 *
 * @flow
 */

import React from "react";
import { TextProps } from "../../atoms";
//  import { TextProps } from "../../molecules";

interface ViewProps
  extends Omit<
    React.HTMLAttributes<HTMLElement>,
    "className" | "style" | "children"
  > {
  testID?: string;
  href?: string;
  onPress?: (e: any) => void;
}

export interface TextInputProps extends Omit<ViewProps, "autoCorrect"> {
  className?: string;
  label?: string;
  autoCapitalize?: "characters" | "none" | "sentences" | "words";
  theme?: TextProps["theme"];
  lang?: TextProps["lang"];
  autoComplete?: string;
  autoCompleteType?: string; // Compat with React Native (Bug react-native#26003)
  autoCorrect?: boolean;
  autoFocus?: boolean;
  blurOnSubmit?: boolean;
  clearTextOnFocus?: boolean;
  defaultValue?: string;
  dir?: "auto" | "ltr" | "rtl";
  disabled?: boolean;
  editable?: boolean;
  inputAccessoryViewID?: string;
  keyboardType?:
    | "default"
    | "email-address"
    | "number-pad"
    | "numbers-and-punctuation"
    | "numeric"
    | "phone-pad"
    | "search"
    | "url"
    | "decimal-pad"
    | "web-search";
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  onChange?: (e: any) => void;
  onChangeText?: (e: string) => void;
  onContentSizeChange?: (e: any) => void;
  onEndEditing?: (e: any) => void;
  onKeyPress?: (e: any) => void;
  onSelectionChange?: (e: any) => void;
  onScroll?: (e: any) => void;
  onSubmitEditing?: (e: any) => void;
  placeholder?: string;
  placeholderTextColor?: string;
  returnKeyType?:
    | "enter"
    | "done"
    | "go"
    | "next"
    | "previous"
    | "search"
    | "send";
  secureTextEntry?: boolean;
  selectTextOnFocus?: boolean;
  selection?: {
    start: number;
    end?: number;
  };
  selectionColor?: string;
  name?: string;
  spellCheck?: boolean;
  style?: React.CSSProperties;
  value?: string | number;
}
