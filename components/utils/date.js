const options = { weekday: 'short', month: 'short', day: 'numeric' };

export const date = new Date().toLocaleString("en-US", options);