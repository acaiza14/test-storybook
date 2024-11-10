import { color } from 'storybook/internal/theming';
import './MyLabel.css';

interface Props {
  /**
   * Label to display
   */
  label: string;
  /**
   * Size to label
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * Capitalize all text
   */
  allCaps?: boolean;

  /**
   * Label color
   */
  color?: 'text-primary' | 'text-secondary' | 'text-tertiary';

  /**
   * Custom font color
   */
  fontColor?: string;
}




export const MyLabel = ({
  label,
  size = 'normal',
  allCaps = false,
  color = 'text-tertiary',
  fontColor,
}:Props) => {
  return (
    <span className={`${size} ${color} label`}
      style={{ color: fontColor }}
    >
      { allCaps ? label.toUpperCase() :label }
    </span>
  )
}
