<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# pdifff

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the positive difference between `x` and `y`.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-base-special-pdifff
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var pdifff = require( '@stdlib/math-base-special-pdifff' );
```

#### pdifff( x, y )

Returns the positive difference between `x` and `y` if `x < y`; otherwise, returns `0`.

```javascript
var v = pdifff( 4.15, 3.15 );
// returns 1.0

v = pdifff( 3.14, 4.2 );
// returns +0.0

v = pdifff( -0.0, +0.0 );
// returns +0.0
```

If any argument is `NaN`, the function returns `NaN`.

```javascript
var v = pdifff( 4.2, NaN );
// returns NaN

v = pdifff( NaN, 3.14 );
// returns NaN

v = pdifff( NaN, NaN );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   This function is the equivalent of [`fdimf`][fdim] in the C/C++ standard library.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var minstd = require( '@stdlib/random-base-minstd-shuffle' );
var pdifff = require( '@stdlib/math-base-special-pdifff' );

var x;
var y;
var v;
var i;

for ( i = 0; i < 100; i++ ) {
    x = minstd();
    y = minstd();
    v = pdifff( x, y );
    console.log( 'pdifff(%d,%d) = %d', x, y, v );
}
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/math/base/special/pdifff.h
```

#### stdlib_base_pdifff( x, y )

Returns the positive difference between `x` and `y` (single-precision).

```c
float v = stdlib_base_pdifff( 4.0f, 3.0f );
// returns 1.0f
```

The function accepts the following arguments:

-   **x**: `[in] float` input value.
-   **y**: `[in] float` input value.

```c
float stdlib_base_pdifff( const float x, const float y );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/math/base/special/pdifff.h"
#include <stdio.h>

int main() {
    float x[] = { 3.0f, 4.0f, 6.0f, 5.0f };

    float y;
    int i;
    for ( i = 0; i < 4; i += 2 ) {
        y = stdlib_base_pdifff( x[ i ], x[ i+1 ] );
        printf( "pdifff(%f, %f) = %f\n", x[ i ], x[ i+1 ], y );
    }
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math-base/special/pdiff`][@stdlib/math/base/special/pdiff]</span><span class="delimiter">: </span><span class="description">return the positive difference between `x` and `y`.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-pdifff.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-pdifff

[test-image]: https://github.com/stdlib-js/math-base-special-pdifff/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-pdifff/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-pdifff/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-pdifff?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-pdifff.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-pdifff/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-pdifff/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-pdifff/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-pdifff/tree/esm
[branches-url]: https://github.com/stdlib-js/math-base-special-pdifff/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-pdifff/main/LICENSE

[fdim]: http://en.cppreference.com/w/cpp/numeric/math/fdim

<!-- <related-links> -->

[@stdlib/math/base/special/pdiff]: https://github.com/stdlib-js/math-base-special-pdiff

<!-- </related-links> -->

</section>

<!-- /.links -->
