// Define available prop types to ensure type safety and extensibility
export enum PropType {
    STRING = "string",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ENUM = "enum",
    FUNCTION = "function",
    OBJECT = "object",
    ARRAY = "array",
    NODE = "node",
    ELEMENT = "element",
    COLOR = "color",
    DATE = "date",
    FILE = "file",
    CUSTOM = "custom",
  }
  
  // Component Categories for better organization
  export enum ComponentCategory {
    UI = "UI",
    LAYOUT = "Layout",
    FORM = "Form",
    DATA = "Data",
    CHART = "Chart",
    AUTH = "Auth",
    UTILITY = "Utility",
  }
  
  // Event types available for components (e.g. onClick, onChange)
  export enum EventType {
    CLICK = "onClick",
    HOVER = "onHover",
    CHANGE = "onChange",
    FOCUS = "onFocus",
    BLUR = "onBlur",
    SUBMIT = "onSubmit",
    LOAD = "onLoad",
    CUSTOM = "custom",
  }
  
  // Define actions that components can trigger
  export enum ActionType {
    NAVIGATE = "navigate",
    API_CALL = "api_call",
    TOGGLE_STATE = "toggle_state",
    EMIT_EVENT = "emit_event",
    CUSTOM_FUNCTION = "custom_function",
  }
  
  // A flexible data model for handling actions
  export interface ComponentAction {
    type: ActionType;
    payload?: any;  // The data sent with the action
    handlerName?: string;  // Optional reference to a custom function
  }
  
  // Interface to define each property of a component
  export interface ComponentProp {
    name: string;
    type: PropType;
    values?: string[];  // Only for ENUM types
    default?: any;
    required?: boolean;
    description: string;
    dynamic?: boolean;  // Allows runtime value changes via binding
  }
  
  // Defining component event handlers
  export interface ComponentEvent {
    type: EventType;
    actions: ComponentAction[];
  }
  
  // Define customizable style properties for each component
  export interface ComponentStyle {
    property: string;
    value: string;
    responsive?: boolean;  // Responsive behavior for mobile/tablet/desktop
    editable?: boolean;    // Whether the user can modify this style
  }
  
  // Define possible dependencies to inject (e.g., Supabase client)
  export interface ComponentDependency {
    name: string;
    description: string;
    required: boolean;
    injectType: "instance" | "config";
  }
  
  // Main component metadata interface
  export interface ComponentMetadata {
    id: string;
    name: string;
    category: ComponentCategory;
    description: string;
    props: ComponentProp[];
    defaultProps: Record<string, any>;
    events?: ComponentEvent[];
    styles?: ComponentStyle[];
    childrenAllowed?: boolean;
    dependencies?: ComponentDependency[];
  }
  