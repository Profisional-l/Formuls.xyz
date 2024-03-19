// mathVirtualKeyboard.show()

mathVirtualKeyboard.layouts = [
  {
    label: '123',
    labelClass: 'MLK__tex-math',
    tooltip: 'keyboard.tooltip.numeric',
    layers: [
      {
        rows: [
          [
            {
              latex: 'x',
              shift: 'y',
              variants: [
                'y',
                'z',
                't',
                'r',
                'x^2',
                'x^n',
                'x^{#?}',
                'x_n',
                'x_i',
                'x_{#?}',
                {
                  latex: 'f(#?)',
                  class: 'small',
                },
                {
                  latex: 'g(#?)',
                  class: 'small',
                },
              ],
            },
            {
              latex: 'n',
              shift: 'a',
              variants: ['i', 'j', 'p', 'k', 'a', 'u'],
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              variants: '7',
              latex: '7',
              label: '7',
              shift: '#@^7',
              class: 'hide-shift',
            },
            {
              variants: '8',
              latex: '8',
              label: '8',
              shift: '#@^8',
              class: 'hide-shift',
            },
            {
              variants: '9',
              latex: '9',
              label: '9',
              shift: '#@^9',
              class: 'hide-shift',
            },
            {
              class: 'big-op hide-shift',
              shift: {
                class: '',
                latex: '\\frac{1}{#@}',
              },
              variants: ['/', '\\div', '\\%', '\\oslash'],
              latex: '\\frac{#@}{#?}',
              label: '&divide;',
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              latex: '\\exponentialE',
              shift: '\\ln',
              variants: [
                '\\exp',
                '\\times 10^{#?}',
                '\\ln',
                '\\log_{10}',
                '\\log',
              ],
            },
            {
              latex: '\\imaginaryI',
              variants: ['\\Re', '\\Im', '\\imaginaryJ', '\\Vert #0 \\Vert'],
            },
            {
              latex: '\\pi',
              shift: '\\sin',

              variants: [
                '\\prod',
                {
                  latex: '\\theta',
                  aside: 'theta',
                },
                {
                  latex: '\\rho',
                  aside: 'rho',
                },
                {
                  latex: '\\tau',
                  aside: 'tau',
                },
                '\\sin',
                '\\cos',
                '\\tan',
              ],
            },
          ],
          [
            {
              label: '<',
              latex: '<',
              variants: [
                {
                  latex: '\\le',
                  label: '≤',
                },
              ],
              class: 'hide-shift',
              shift: {
                latex: '\\le',
                label: '≤',
              },
            },
            {
              label: '>',
              latex: '>',
              variants: [
                {
                  latex: '\\ge',
                  label: '≥',
                },
              ],
              class: 'hide-shift',
              shift: {
                latex: '\\ge',
                label: '≥',
              },
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              variants: '4',
              latex: '4',
              label: '4',
              shift: '#@^4',
              class: 'hide-shift',
            },
            {
              variants: '5',
              latex: '5',
              label: '5',
              shift: '#@^5',
              class: 'hide-shift',
            },
            {
              variants: '6',
              latex: '6',
              label: '6',
              shift: '#@^6',
              class: 'hide-shift',
            },
            {
              variants: [
                {
                  latex: '\\prod_{#0}^{#0}',
                  class: 'small',
                },
                '\\otimes',
                '\\cdot',
              ],
              latex: '\\cdot',
              label: '&times;',
              shift: {
                latex: '\\times',
              },
              class: 'big-op hide-shift',
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              class: 'hide-shift',
              latex: '#@^2}',
              shift: '#@^{\\prime}}',
            },
            {
              latex: '#@^{#0}}',
              class: 'hide-shift',
              shift: '#@_{#?}',
            },
            {
              class: 'hide-shift',
              latex: '\\sqrt{#0}',
              variants: [
                {
                  latex: '\\sqrt[#0]{#?}}',
                },
              ],
              shift: {
                latex: '\\sqrt[#0]{#?}}',
              },
            },
          ],
          [
            {
              variants: [
                {
                  latex: '\\lbrack',
                  key: '[',
                },
                '\\langle',
                '\\lfloor',
                '\\lceil',
                '|{#?}|',
                {
                  latex: '\\lbrace',
                  key: '{',
                },
              ],
              key: '(',
              label: '(',
              shift: {
                label: '[',
                key: '[',
              },
              class: 'hide-shift',
            },
            {
              variants: [
                {
                  latex: '\\rbrack',
                  key: ']',
                },
                '\\rangle',
                '\\rfloor',
                '\\rceil',
                '|{#?}|',
                {
                  latex: '\\rbrace',
                  key: ']',
                },
              ],
              key: ')',
              label: ')',
              shift: {
                label: ']',
                latex: '\\rbrack',
              },
              class: 'hide-shift',
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              variants: '1',
              latex: '1',
              label: '1',
              shift: '#@^{-1}',
              class: 'hide-shift',
            },
            {
              variants: '2',
              latex: '2',
              label: '2',
              shift: '#@^2',
              class: 'hide-shift',
            },
            {
              variants: '3',
              latex: '3',
              label: '3',
              shift: '#@^3',
              class: 'hide-shift',
            },
            {
              variants: ['\\pm', '\\ominus'],
              latex: '-',
              label: '&#x2212;',
              shift: '\\pm',
              class: 'big-op hide-shift',
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              latex: '\\int_{#?}^{#?}',
              class: 'small hide-shift',
              shift: '\\int',
            },
            {
              latex: '\\sum_{#0}^{#0}',
              class: 'small',
            },
            {
              class: 'action bottom right hide-shift',
              width: 1,
              command: ['performWithFeedback', 'deleteBackward'],
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-delete-backward /></svg>',
              shift: {
                class: 'action warning',
                label:
                  '<svg class=svg-glyph><use xlink:href=#svg-trash /></svg>',
                command: 'deleteAll',
              },
            },
          ],
          [
            {
              class: 'shift bottom left',
              width: 2,
              label:
                '<span class=caps-lock-indicator></span><svg class=svg-glyph><use xlink:href=#svg-shift /></svg>',
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              variants: '0',
              latex: '0',
              label: '0',
              shift: '\\infty',
              class: 'hide-shift',
            },
            {
              variants: '.',
              command: ['performWithFeedback', 'insertDecimalSeparator'],
              shift: ',',
              class: 'big-op hide-shift',
              label: '.',
            },
            {
              variants: [
                '\\neq',
                '\\equiv',
                '\\varpropto',
                '\\thickapprox',
                '\\lt',
                '\\gt',
                '\\le',
                '\\ge',
              ],
              latex: '=',
              label: '=',
              shift: {
                label: '≠',
                latex: '\\ne',
              },
              class: 'big-op hide-shift',
            },
            {
              variants: [
                {
                  latex: '\\sum_{#0}^{#0}',
                  class: 'small',
                },
                '\\oplus',
              ],
              latex: '+',
              label: '+',
              class: 'big-op hide-shift',
              shift: {
                latex: '\\sum',
                insert: '\\sum',
                class: 'small',
              },
            },
            {
              class: 'separator',
              width: 0.5,
            },
            {
              class: 'action hide-shift',
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-arrow-left /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
              shift: {
                label:
                  '<svg class=svg-glyph><use xlink:href=#svg-angle-double-left /></svg>',
                command: ['performWithFeedback', 'extendSelectionBackward'],
              },
            },
            {
              class: 'action hide-shift',
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-arrow-right /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
              shift: {
                label:
                  '<svg class=svg-glyph><use xlink:href=#svg-angle-double-right /></svg>',
                command: ['performWithFeedback', 'extendSelectionForward'],
              },
            },
            {
              class: 'action hide-shift',
              command: ['performWithFeedback', 'commit'],
              shift: {
                label:
                  '<svg class=svg-glyph><use xlink:href=#circle-plus /></svg>',
                command: ['performWithFeedback', 'addRowAfter'],
              },
              width: 1,
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-commit /></svg>',
            },
          ],
        ],
        id: 'ML__layer_co7q1',
      },
    ],
    displayShiftedKeycaps: true,
    displayEditToolbar: true,
  },
  {
    label: 'sin/cos...',
    labelClass: 'MLK__tex',
    tooltip: 'keyboard.tooltip.symbols',
    layers: [
      {
        rows: [
          [
            {
              latex: '\\sin',
              shift: '\\sin^{-1}',
              width: 2,
              variants: [
                {
                  class: 'small',
                  latex: '\\sinh',
                },
                {
                  class: 'small',
                  latex: '\\sin^{-1}',
                },
                {
                  class: 'small',
                  latex: '\\arsinh',
                },
              ],
            },
            {
              latex: '\\cos',
              width: 2,
              shift: '\\cos^{-1}',
              variants: [
                {
                  class: 'small',
                  latex: '\\cosh',
                },
                {
                  class: 'small',
                  latex: '\\cos^{-1}',
                },
                {
                  class: 'small',
                  latex: '\\arcosh',
                },
              ],
            },

            {
              latex: '\\ln',
              width: 2,
            },

            {
              class: 'small hide-shift',
              latex: '\\lim_{x\\to\\infty}',
              shift: '\\lim_{#?}',
              variants: [
                {
                  class: 'small',
                  latex: '\\liminf_{#?}',
                },
                {
                  class: 'separator',
                  width: 0.5,
                },
                {
                  class: 'small',
                  latex: '\\limsup_{#?}',
                },
              ],
            },
            {
              latex: '\\exponentialE',
            },
          ],
          [
            {
              latex: '\\tan',
              width: 2,
              shift: '\\tan^{-1}',
              variants: [
                {
                  class: 'small',
                  latex: '\\tanh',
                },
                {
                  class: 'small',
                  latex: '\\tan^{-1}',
                },
                {
                  class: 'small',
                  latex: '\\artanh',
                },
                {
                  class: 'small',
                  latex: '\\arctan',
                },
                {
                  class: 'small',
                  latex: '\\arctg',
                },
                {
                  class: 'small',
                  latex: '\\tg',
                },
              ],
            },
            {
              latex: '\\ctg',
              width: 2,
              shift: '\\cot^{-1}',
              variants: [
                { class: 'small', latex: '\\coth' },
                { class: 'small', latex: '\\cot^{-1}' },
                { class: 'small', latex: '\\arcctg' },
                { class: 'small', latex: '\\ctg' },
              ],
            },
            {
              latex: '\\log',
              shift: '\\log_{#0}',
              variants: ['\\log_{#0}', '\\log_{10}'],
            },

            {
              class: 'hide-shift small',
              latex: '\\int',
              shift: '\\iint',
              variants: [
                {
                  latex: '\\int_{#?}^{#?}',
                  class: 'small',
                },
                {
                  latex: '\\int',
                  class: 'small',
                },
                {
                  latex: '\\smallint',
                  class: 'small',
                },
                {
                  latex: '\\iint',
                  class: 'small',
                },
                {
                  latex: '\\iiint',
                  class: 'small',
                },
                {
                  latex: '\\oint',
                  class: 'small',
                },
                '\\intop',
                '\\iiint',
                '\\oiint',
                '\\oiiint',
                '\\intclockwise',
                '\\varointclockwise',
                '\\ointctrclockwise',
                '\\intctrclockwise',
              ],
            },
            {
              latex: '\\pi',
              width: 2,
              shift: '\\tau',
              variants: ['\\tau'],
            },
          ],
          [
            {
              latex: '\\exp',
              width: 2,
              insert: '\\exp\\left(#0\\right)',
              variants: ['\\exponentialE^{#0}'],
            },
            {
              latex: '\\mathrm{d}',
              width: 2,
              shift: '\\partial',
              variants: [
                '\\mathrm{d}x',
                {
                  latex: '\\dfrac{\\mathrm{d}}{\\mathrm{d} x}',
                  class: 'small',
                },
                {
                  latex: '\\frac{\\partial}{\\partial x}',
                  class: 'small',
                },
                '\\partial',
              ],
            },
            {
              latex: '\\sum_{#0}^{#0}',
              class: 'small',
              width: 2,
            },
            {
              latex: '\\infty',
              width: 2,
              variants: ['\\aleph_0', '\\aleph_1', '\\omega', '\\mathfrak{m}'],
            },
          ],
          [
            {
              class: 'shift bottom left',
              label:
                '<span class=caps-lock-indicator></span><svg class=svg-glyph><use xlink:href=#svg-shift /></svg>',
            },
            {
              class: 'box',
              latex: ',',
              shift: ';',
              variants: [';', '?'],
            },
            {
              class: 'box',
              latex: '\\colon',
              shift: '\\Colon',
              variants: [
                {
                  latex: '\\Colon',
                  aside: 'such that',
                  class: 'box',
                },
                {
                  latex: ':',
                  aside: 'ratio',
                  class: 'box',
                },
                {
                  latex: '\\vdots',
                  aside: '',
                  class: 'box',
                },
                {
                  latex: '\\ddots',
                  aside: '',
                  class: 'box',
                },
                {
                  latex: '\\ldotp',
                  aside: 'low dot',
                  class: 'box',
                },
                {
                  latex: '\\cdotp',
                  aside: 'center dot',
                  class: 'box',
                },
                {
                  latex: '\\ldots',
                  aside: 'low ellipsis',
                  class: 'box',
                },
                {
                  latex: '\\cdots',
                  aside: 'center ellipsis',
                  class: 'box',
                },
                {
                  latex: '\\therefore',
                  aside: 'therefore',
                  class: 'box',
                },
                {
                  latex: '\\because',
                  aside: 'because',
                  class: 'box',
                },
              ],
            },
            {
              class: 'box',
              latex: '\\cdot',
              aside: 'centered dot',
              shift: '\\ast',
              variants: [
                '\\circ',
                '\\bigcirc',
                '\\bullet',
                '\\odot',
                '\\oslash',
                '\\circledcirc',
                '\\ast',
                '\\star',
                '\\times',
                '\\doteq',
                '\\doteqdot',
              ],
            },

            {
              class: 'action hide-shift',
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-arrow-left /></svg>',
              command: ['performWithFeedback', 'moveToPreviousChar'],
              shift: {
                label:
                  '<svg class=svg-glyph><use xlink:href=#svg-angle-double-left /></svg>',
                command: ['performWithFeedback', 'extendSelectionBackward'],
              },
            },
            {
              class: 'action hide-shift',
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-arrow-right /></svg>',
              command: ['performWithFeedback', 'moveToNextChar'],
              shift: {
                label:
                  '<svg class=svg-glyph><use xlink:href=#svg-angle-double-right /></svg>',
                command: ['performWithFeedback', 'extendSelectionForward'],
              },
            },
            {
              class: 'action hide-shift',
              width: 1,
              command: ['performWithFeedback', 'deleteBackward'],
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-delete-backward /></svg>',
              shift: {
                class: 'action warning',
                label:
                  '<svg class=svg-glyph><use xlink:href=#svg-trash /></svg>',
                command: 'deleteAll',
              },
            },
            {
              class: 'action hide-shift',
              command: ['performWithFeedback', 'commit'],
              shift: {
                label:
                  '<svg class=svg-glyph><use xlink:href=#circle-plus /></svg>',
                command: ['performWithFeedback', 'addRowAfter'],
              },
              width: 1,
              label:
                '<svg class=svg-glyph><use xlink:href=#svg-commit /></svg>',
            },
          ],
        ],
        id: 'ML__layer_co6mm',
      },
    ],
    displayShiftedKeycaps: true,
    displayEditToolbar: true,
  },
]
