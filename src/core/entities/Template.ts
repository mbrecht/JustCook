export type category = string;

/**
 * A Day is an array of meal categories.
 */
export type Day = Array<category>;

/**
 * A template is an array of Days which represent categories.
 */
type Template = Array<Day>;

export default Template;
