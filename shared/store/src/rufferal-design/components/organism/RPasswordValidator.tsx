import { Text, View } from 'react-native';
import tw from 'twrnc';
import { moderateScaleTW } from '../../utils';

const TEXT_HEADER_STYLES = tw`text-${moderateScaleTW(14)} font-semibold`;
const TEXT_STYLES = tw`text-${moderateScaleTW(12)}`;
const TEXT_DEFAULT_COLOR = tw`text-gray-500`;
const TEXT_ERROR_COLOR = tw`text-red-500`;
const TEXT_SUCCESS_COLOR = tw`text-green-500`;

export const RPasswordValidator = ({ password }: { password: string }) => {
  const minCharRequirement = password.length >= 8;
  const lowercaseRequirement = /(?=.*[a-z])/.test(password);
  const uppercaseRequirement = /(?=.*[A-Z])/.test(password);
  const numberRequirement = /(?=.*\d)/.test(password);
  const maxCharRequirement = password.length < 65;

  /* SOCIAL PASSWORD REQUIREMENTS
   * Google:
   *   8 characters or more
   *   Cannot be particularly weak (like password123)
   *   Must contain some mix of letters, numbers, and/or symbols
   *   Cannot start or end with a blank space
   * Apple:
   *   Must be at least 8 characters long
   *   Must contain both upper and lowercase letters
   *   Must contain at least one number
   */
  const displayRequirements = () => (
    <View>
      <Text style={tw.style(TEXT_DEFAULT_COLOR, TEXT_HEADER_STYLES)}>
        Your password:
      </Text>
      <Text style={tw.style(TEXT_DEFAULT_COLOR, TEXT_STYLES)}>
        • must be at least 8 characters long
      </Text>
      <Text style={tw.style(TEXT_DEFAULT_COLOR, TEXT_STYLES)}>
        • must contain upper and lowercase letters
      </Text>
      <Text style={tw.style(TEXT_DEFAULT_COLOR, TEXT_STYLES)}>
        • must contain number(s)
      </Text>
      <Text style={tw.style(TEXT_DEFAULT_COLOR, TEXT_STYLES)}>
        • cannot exceed 64 characters
      </Text>
    </View>
  );

  const validateRequirements = () => (
    <View>
      <Text style={tw.style(TEXT_DEFAULT_COLOR, TEXT_HEADER_STYLES)}>
        Your password:
      </Text>
      <Text
        style={tw.style(
          TEXT_STYLES,
          TEXT_ERROR_COLOR,
          minCharRequirement && TEXT_SUCCESS_COLOR
        )}
      >
        • must be at least 8 characters long
      </Text>
      <Text
        style={tw.style(
          TEXT_STYLES,
          TEXT_ERROR_COLOR,
          lowercaseRequirement && uppercaseRequirement && TEXT_SUCCESS_COLOR
        )}
      >
        • must contain upper and lowercase letters
      </Text>
      <Text
        style={tw.style(
          TEXT_STYLES,
          TEXT_ERROR_COLOR,
          numberRequirement && TEXT_SUCCESS_COLOR
        )}
      >
        • must contain number(s)
      </Text>
      <Text
        style={tw.style(
          TEXT_STYLES,
          TEXT_ERROR_COLOR,
          maxCharRequirement && TEXT_SUCCESS_COLOR
        )}
      >
        • cannot exceed 64 characters
      </Text>
    </View>
  );

  return password ? validateRequirements() : displayRequirements();
};
