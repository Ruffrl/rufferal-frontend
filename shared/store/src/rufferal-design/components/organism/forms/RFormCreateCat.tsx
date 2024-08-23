import * as React from 'react';
import tw from 'twrnc';

import { RefCallback } from 'react';
import { ControllerRenderProps } from 'react-hook-form';
import { View } from 'react-native';

import {
  moderateScaleTW,
  RFormImageInput,
  RFormInput,
  RFormToggle,
  RLabel,
} from '../../../..';

export const RFormCreateCat = ({
  mobilePlusIcon,
}: {
  mobilePlusIcon?: React.JSX.Element;
}): React.ReactElement => {
  const onSubmit = async () => {
    return undefined;
  };

  const onChange = async () => {
    return undefined;
  };

  const onBlur = async () => {
    return undefined;
  };

  const dummyRef: RefCallback<string> = () => 'undefined';

  const dummyField: ControllerRenderProps = {
    onChange: onChange,
    onBlur: onBlur,
    value: undefined,
    name: 'undefined',
    ref: dummyRef,
  };

  return (
    <View style={tw`gap-${moderateScaleTW(8)}`}>
      <RFormImageInput field={dummyField} mobilePlusIcon={mobilePlusIcon} />
      <RFormInput label="Name" onSubmit={onSubmit} onChange={onChange} />
      {/* BLARG - Add a dropdown input */}
      <RFormInput label="Color" onSubmit={onSubmit} onChange={onChange} />
      {/* BLARG - Add `optional` param to rlabel and rforminput` */}
      <RFormInput
        label="Breed (optional)"
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <RFormInput
        label="Coat length (optional)"
        onSubmit={onSubmit}
        onChange={onChange}
      />
      <View>
        <RLabel label="Age" />
        <RFormToggle label="Kitten (0–9 months)" />
        <RFormToggle label="Young (9 months–2 years)" />
        <RFormToggle label="Adult (2–8 years)" />
        <RFormToggle label="Senior (8+ years)" />
      </View>
      <View>
        <RLabel label="Size" />
        <RFormToggle label="Small (0–6 lbs)" />
        <RFormToggle label="Medium (7–11 lbs)" />
        <RFormToggle label="Large (12–16 lbs)" />
        <RFormToggle label="Extra large (16+ lbs)" />
      </View>
      <View>
        <RLabel label="Sex" />
        <RFormToggle label="Male" />
        <RFormToggle label="Female" />
      </View>
      <View>
        <RLabel label="Spayed/neutered?" />
        <RFormToggle label="Yes" />
        <RFormToggle label="No" />
      </View>
    </View>
  );
};
