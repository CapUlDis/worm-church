import {compileStyles} from '@vkontakte/vkui-tokens/build/compilers/styles/compileStyles';
import {expandAll} from '@vkontakte/vkui-tokens/build/expandTheme';
import type {ThemeDescription} from '@vkontakte/vkui-tokens/interfaces/general';
import {lightTheme as baseTheme} from '@vkontakte/vkui-tokens/themeDescriptions/base/vk';

const theme: ThemeDescription = {
  ...baseTheme,
};

const BASE_BACKGROUND_COLOR = '#f0e7de';
const BASE_PADDING = 16;
const BASE_BORDER_RADIUS = 32;

theme.colors.colorBackground = BASE_BACKGROUND_COLOR;
theme.colors.colorBackgroundContent = BASE_BACKGROUND_COLOR;
theme.colors.colorBackgroundSecondaryAlpha = BASE_BACKGROUND_COLOR;
theme.colors.colorTextLink = '#000';

theme.sizeBasePaddingVertical = {
  regular: BASE_PADDING,
};

theme.sizeCardBorderRadius = {
  regular: BASE_BORDER_RADIUS,
};

theme.fontText = {
  regular: {
    fontFamily: 'SF Pro Text',
    lineHeight: 20,
    fontWeight: 400,
    fontSize: 15,
  },
};

theme.fontTitle1 = {
  regular: {
    fontFamily: 'OsvaldMediumC',
    lineHeight: 34,
    fontWeight: 400,
    fontSize: 28,
  },
};

theme.fontTitle2 = {
  regular: {
    fontFamily: 'OsvaldMediumC',
    lineHeight: 24,
    fontWeight: 400,
    fontSize: 20,
  },
};

theme.fontTitle3 = {
  regular: {
    fontFamily: 'SF Pro Text',
    lineHeight: 22,
    fontWeight: 400,
    fontSize: 17,
  },
};

theme.fontSubhead = {
  regular: {
    fontFamily: 'SF Pro Text',
    lineHeight: 18,
    fontWeight: 400,
    fontSize: 14,
  },
};

theme.fontCaption2 = {
  regular: {
    fontFamily: 'SF Pro Text',
    lineHeight: 14,
    fontWeight: 400,
    fontSize: 12,
  },
};

const {pixelifyTheme} = expandAll(theme);

export const themeStyles = compileStyles('css', pixelifyTheme, 'onlyVariables');
