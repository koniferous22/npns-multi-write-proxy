export class InvalidValueError extends Error {
  name = 'InvalidValueError';
  constructor(public expected: string, public actual: string) {
    super(`Expected value: "${expected}", actual "${actual}"`);
  }
}

export class SchemaFixParseError extends Error {
  name = 'SchemaFixParseError';
  constructor(message?: string) {
    super(
      `Error during GQL schema parsing for fixing field directives${
        message ? `: ${message}` : ''
      }`
    );
  }
}

export class ConfigValidationError extends Error {
  name = 'ConfigValidationError';
  constructor(configPath: string, expectedValue: string, actual: string) {
    super(
      `Invalid config value for "${configPath}" - expected ${expectedValue}, got "${actual}"`
    );
  }
}


export class ComposedConfigError extends Error {
  name = 'ComposedConfigError';
  constructor(public errors: string[]) {
    super(errors.join('\n'));
  }
}

export class ConfigError extends Error {
  name = 'ConfigError';
  constructor(public message: string) {
    super(message);
  }
}
