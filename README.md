# SpySASS

SASS from The Code Bureau

## Usage

Either install with `npm` or `bower`, or clone the repo. Then simply add the `sass` directory
from the repo to the `includePath` option in sass.

To start using it, you always need to import `_spysass.scss` file first. This file only
contains functions to load modules.

Example:

```
@import "spysass";

@import "variables";
@import "variables-spysass";

@import "components/reset";
@import "components/base";
@import "mixins/text";
@import "themes/spytext/niknus";
```

## Vendor Prefixes

SpySASS has no CSS3 mixins, instead it is recommended to use
[Autoprefixer](https://github.com/postcss/autoprefixer) (or similar) to handle
all vendor prefixes.

## Functional Programming

SpySASS tries to apply "functional programming" paradigms. This mainly means
all mixins and functions avoid changing state and mutating data, but also avoids
using \$variables from an external scope.

The only functions allowed to deviate from this paradigm are `em()` and `rem()`
(from units) which uses the `$base-font-size` as `$base-value` if it is not
provided.

## Mixins

### Flex-Grid

Sample: <http://codepen.io/lohfu/pen/reEeJa>

## Modules (CAUTION: The Modules Are Being Deprecated)

SpySASS is built around modules and module files. As such, ALL SCSS files
(except `_spysass.scss`) in SpySASS are module files. A module file is simply a
file structured a specific way, containing two special SpySASS functions
(`load-module()` & `register-module()`) and a certain type of entity. Entities
should NOT be mixed, only one type of entity per module file.

The `load-module($module-name, $module-type)` function takes two parameters, the module name
and the module type. The function will check if the module has already been loaded. If the
module has not been loaded, the function returns true and all code in the module file is executed,
at the end of which the `register-module()` function is called. If the module has already been loaded,
`load-module()` returns false and nothing is done.

There are currently 4 types of module files:

1. Functions
2. Mixins
3. Components
4. Themes

### Module Definition

```
@if load-module('text', 'mixins') {
	// All imorts
	@import "functions/one";
	@import "mixins/one";

	// All module code

	$tmp: register-module();
}
```

### print-modules()

If you want to print all loaded modules, simply add the following to the end of your main SCSS file:

```
@warn modules()
```

## Module Types

### Functions

Functions should in general not use variables defined outside of its scope.

Function module files do not generate any code.

### Mixins

Mixins should in general not use variables defined outside of its scope.

Mixin module files do not generate any code unless one of its mixins are called.

### Components

Components generate CSS, but do not register any new functions or mixins.

### Themes

Themes are essentially packages of components. Themes should be complete
CSS for a site or type of HTML (eg. forms).
