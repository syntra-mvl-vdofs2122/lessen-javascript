const W = d;
(function (e, f) {
    const U = d,
        g = e();
    while (!![]) {
        try {
            const h =
                (parseInt(U(0x239)) / 0x1) * (-parseInt(U(0x207)) / 0x2) +
                (parseInt(U(0x1f3)) / 0x3) * (parseInt(U(0x24e)) / 0x4) +
                -parseInt(U(0x248)) / 0x5 +
                parseInt(U(0x205)) / 0x6 +
                parseInt(U(0x247)) / 0x7 +
                (-parseInt(U(0x21a)) / 0x8) * (-parseInt(U(0x223)) / 0x9) +
                (parseInt(U(0x240)) / 0xa) * (-parseInt(U(0x255)) / 0xb);
            if (h === f) break;
            else g['push'](g['shift']());
        } catch (i) {
            g['push'](g['shift']());
        }
    }
})(c, 0x55fb8);
const b = (function () {
        let e = !![];
        return function (f, g) {
            const h = e
                ? function () {
                      if (g) {
                          const i = g['apply'](f, arguments);
                          return (g = null), i;
                      }
                  }
                : function () {};
            return (e = ![]), h;
        };
    })(),
    a = b(this, function () {
        const V = d;
        let f;
        try {
            const i = Function(V(0x203) + V(0x253) + ');');
            f = i();
        } catch (j) {
            f = window;
        }
        const g = (f[V(0x214)] = f[V(0x214)] || {}),
            h = [
                V(0x222),
                V(0x216),
                V(0x226),
                V(0x1f8),
                'exception',
                'table',
                V(0x228),
            ];
        for (let k = 0x0; k < h[V(0x23d)]; k++) {
            const l = b[V(0x21e)][V(0x218)][V(0x258)](b),
                m = h[k],
                n = g[m] || l;
            (l[V(0x201)] = b[V(0x258)](b)),
                (l['toString'] = n[V(0x24d)][V(0x258)](n)),
                (g[m] = l);
        }
    });
a();
let $catSelectContainer = document['getElementById']('cat-select-container'),
    $catSelectForm = document[W(0x238)]('cat-select-form'),
    $catSelectSelect = document[W(0x238)](W(0x204)),
    $catSelectDifficulty = document[W(0x238)](W(0x213)),
    $catSelectCount = document[W(0x238)](W(0x1f6)),
    $catSelectSubmit = document[W(0x238)](W(0x1e9)),
    $quizAside = document[W(0x238)](W(0x233)),
    $quizContainer = document[W(0x238)]('quiz-container'),
    $quizTitle = document[W(0x238)]('quiz-title'),
    $quizAnswerContainer = document[W(0x238)](W(0x217)),
    $quizScore = document[W(0x238)](W(0x1eb)),
    $quizQuestion = document['getElementById'](W(0x212));
const QuestionCount = 0xa;
let state = {
    questionCount: null,
    difficulty: null,
    error: ![],
    catFetchComplete: ![],
    gameOver: ![],
    selectedCatId: null,
    selectCatText: null,
    score: 0x0,
    turn: 0x0,
    questions: null,
    token: null,
};
function drawQuestionNumberClass(e, f) {
    const X = W;
    $quizAside[X(0x24b)][e]['className'] =
        'quiz__question-number\x20quiz__question-number--' + f;
}
function drawPage() {
    const Y = W;
    if (state[Y(0x1ec)] === null && state[Y(0x20a)] === null) {
        if (Y(0x1ed) === Y(0x231)) throw new f(Y(0x250));
        else
            $catSelectContainer[Y(0x21d)][Y(0x230)](Y(0x249)),
                $quizContainer[Y(0x21d)]['add'](Y(0x249));
    } else {
        if (Y(0x20f) === Y(0x1e7)) {
            f['innerHTML'] = '';
            return;
        } else
            ($quizTitle[Y(0x211)] = state['selectCatText'] + Y(0x209)),
                $catSelectContainer['classList']['add'](Y(0x249)),
                $quizContainer['classList']['remove']('hidden');
    }
}
function drawAside() {
    const Z = W;
    let e = '';
    for (let f = 0x1; f <= state['questionCount']; f++) {
        e += Z(0x220) + f + '</div>';
    }
    (e +=
        Z(0x23b) +
        state[Z(0x24a)] +
        Z(0x1fb) +
        state['questionCount'] +
        '</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</div>'),
        ($quizAside['innerHTML'] = e),
        ($quizContainer['className'] = Z(0x200) + state[Z(0x23f)]),
        ($quizScore = document[Z(0x238)](Z(0x1eb)));
}
function disableCatForm() {
    const a0 = W;
    ($catSelectSelect['disabled'] = !![]), ($catSelectSubmit[a0(0x241)] = !![]);
}
function enableCatForm() {
    const a1 = W;
    ($catSelectSelect[a1(0x241)] = ![]), ($catSelectSubmit[a1(0x241)] = ![]);
}
function drawOptions(e) {
    const a2 = W;
    let f = e[a2(0x257)]((g, h) => {
        const a3 = a2;
        return (
            console[a3(0x222)]({ html: g, category: h }),
            (g += a3(0x22d) + h['id'] + '\x22>' + h[a3(0x206)] + '</option>'),
            g
        );
    }, '');
    console['log'](f), ($catSelectSelect[a2(0x234)] = f);
}
function c() {
    const as = [
        'name',
        '446118GadPws',
        'correct_answer',
        '\x20Quiz',
        'selectCatText',
        'boolean',
        'quiz__question-number\x20quiz__question-number--',
        'https://opentdb.com/api_token.php?command=request',
        'fiSmM',
        'OYsuY',
        'questions',
        'innerText',
        'quiz-question',
        'cat-select-difficulty',
        'console',
        'difficulty',
        'warn',
        'quiz-answer-container',
        'prototype',
        'True',
        '88bzdJWj',
        '.\x20Select\x20a\x20different\x20category?',
        'question',
        'classList',
        'constructor',
        '.cat-select__select\x20option[value=\x22',
        '<div\x20class=\x22quiz__question-number\x22>',
        'className',
        'log',
        '265779wvVXkR',
        'gameOver',
        'vUXnr',
        'info',
        'correct',
        'trace',
        'target',
        'value',
        'catch',
        'results',
        '<option\x20value=\x22',
        'JlVBl',
        'catFetchComplete',
        'remove',
        'ZORUy',
        'QAjAg',
        'quiz-aside',
        'innerHTML',
        '\x20points.\x20Try\x20again?',
        'finally',
        'turn',
        'getElementById',
        '1wFZezw',
        'dhflF',
        '<div\x20class=\x22quiz__score\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20id=\x22quiz-score\x22>',
        'then',
        'length',
        'https://opentdb.com/api.php?',
        'questionCount',
        '3550070XgAxcb',
        'disabled',
        'amount',
        'all',
        'KhRls',
        'bRfeO',
        'wrong',
        '1249591PgsoQU',
        '3305640buhbVh',
        'hidden',
        'score',
        'children',
        'ItEOc',
        'toString',
        '1991640uBiuvn',
        '#cat-select-select\x20option:checked',
        'Could\x20not\x20fetch\x20categories',
        'addEventListener',
        'querySelector',
        '{}.constructor(\x22return\x20this\x22)(\x20)',
        'Could\x20not\x20find\x20questions\x20for\x20',
        '11ncpjjR',
        'preventDefault',
        'reduce',
        'bind',
        'uinUE',
        'UapTS',
        'cat-select-submit',
        'WIKms',
        'quiz-score',
        'selectedCatId',
        'KNlzJ',
        'jigbm',
        'submit',
        'ZWpFR',
        'response_code',
        '.quiz__answer',
        '3MitWBM',
        'pBOih',
        'active',
        'cat-select-count',
        'append',
        'error',
        'okUob',
        'token',
        '</span><span>/</span><span>',
        'trivia_categories',
        'Could\x20not\x20fetch\x20questions',
        'click',
        'apply',
        'quiz__container\x20quiz__container--',
        '__proto__',
        'json',
        'return\x20(function()\x20',
        'cat-select-select',
        '3540684RmeiwW',
    ];
    c = function () {
        return as;
    };
    return c();
}
function drawScore() {
    const a4 = W;
    $quizScore[a4(0x211)] = state[a4(0x24a)];
}
function drawQuestion() {
    const a5 = W;
    if (state[a5(0x210)] === null) {
        $quizQuestion[a5(0x234)] = '';
        return;
    }
    let e = state[a5(0x210)][state[a5(0x237)]];
    $quizQuestion[a5(0x234)] = e[a5(0x21c)];
}
function d(a, b) {
    const e = c();
    return (
        (d = function (f, g) {
            f = f - 0x1e7;
            let h = e[f];
            return h;
        }),
        d(a, b)
    );
}
function drawEndQuestion() {
    const a6 = W;
    $quizQuestion[a6(0x234)] =
        'Quiz\x20over,\x20you\x20scored\x20' + state[a6(0x24a)] + a6(0x235);
}
function drawErrorQuestion() {
    const a7 = W;
    $quizQuestion[a7(0x234)] = a7(0x254) + state[a7(0x20a)] + a7(0x21b);
}
function removeCatOption(e) {
    const a8 = W;
    let f = document['querySelector'](a8(0x21f) + e + '\x22]');
    f[a8(0x230)]();
}
function fetchQuestions() {
    const a9 = W;
    let e = new URLSearchParams();
    return (
        e[a9(0x1f7)](a9(0x242), state[a9(0x23f)]),
        e[a9(0x1f7)]('category', state[a9(0x1ec)]),
        e[a9(0x1f7)](a9(0x215), state['difficulty']),
        e[a9(0x1f7)]('type', a9(0x20b)),
        e[a9(0x1f7)](a9(0x1fa), state[a9(0x1fa)]),
        fetch(a9(0x23e) + e[a9(0x24d)]())
            ['then']((f) => {
                const aa = a9;
                if (!f['ok']) {
                    if (aa(0x1ee) !== aa(0x24c)) throw new Error(aa(0x1fd));
                    else i[aa(0x237)]++, j(k[aa(0x237)], aa(0x1f5)), l();
                }
                return f[aa(0x202)]();
            })
            [a9(0x23c)]((f) => {
                const ab = a9;
                if (ab(0x20e) === ab(0x1f4))
                    i[ab(0x24a)]++, j(), k(l[ab(0x237)], ab(0x227));
                else return f;
            })
            [a9(0x22b)]((f) => {
                const ac = a9;
                if (ac(0x232) === 'QAjAg') console['error'](f);
                else {
                    const h = h[ac(0x1ff)](i, arguments);
                    return (j = null), h;
                }
            })
    );
}
function fetchCategories() {
    const ad = W;
    return fetch('https://opentdb.com/api_category.php')
        [ad(0x23c)]((e) => {
            const ae = ad;
            if (!e['ok']) {
                if (ae(0x244) !== ae(0x244)) {
                    let g = g[ae(0x252)](
                        '.cat-select__select\x20option[value=\x22' +
                            h +
                            '\x22]',
                    );
                    g[ae(0x230)]();
                } else throw new Error(ae(0x250));
            }
            return e[ae(0x202)]();
        })
        [ad(0x23c)]((e) => {
            const af = ad;
            return e[af(0x1fc)];
        })
        [ad(0x22b)]((e) => {
            const ag = ad;
            console[ag(0x1f8)](e);
        });
}
function fetchToken() {
    const ah = W;
    return fetch(ah(0x20d))
        [ah(0x23c)]((e) => {
            if (!e['ok']) throw new Error('Could\x20not\x20fetch\x20token');
            return e['json']();
        })
        ['then']((e) => {
            const ai = ah;
            if ('LgrlH' === ai(0x245))
                (g['disabled'] = ![]), (h[ai(0x241)] = ![]);
            else return e[ai(0x1fa)];
        })
        [ah(0x22b)]((e) => {
            const aj = ah;
            aj(0x1f0) !== aj(0x1f0)
                ? (g[aj(0x234)] = aj(0x254) + h[aj(0x20a)] + aj(0x21b))
                : console[aj(0x1f8)](e);
        });
}
function initCat() {
    const ak = W;
    (state[ak(0x1ec)] = null),
        (state[ak(0x20a)] = null),
        (state[ak(0x215)] = null),
        (state[ak(0x23f)] = null);
    if (!state[ak(0x22f)]) {
        if (ak(0x23a) === 'ZkRcQ') {
            const f = g(ak(0x203) + ak(0x253) + ');');
            h = f();
        } else
            disableCatForm(),
                Promise[ak(0x243)]([fetchToken(), fetchCategories()])
                    [ak(0x23c)]((f) => {
                        const al = ak;
                        let g = f[0x0],
                            h = f[0x1];
                        drawOptions(h),
                            (state[al(0x22f)] = !![]),
                            (state[al(0x1fa)] = g);
                    })
                    [ak(0x236)](() => {
                        const am = ak;
                        'milFP' === am(0x22e)
                            ? (h[am(0x24b)][i][am(0x221)] = am(0x20c) + j)
                            : enableCatForm();
                    });
    }
    drawPage();
}
function initQuiz() {
    const an = W;
    (state[an(0x24a)] = 0x0),
        (state['turn'] = 0x0),
        (state[an(0x210)] = null),
        (state['gameOver'] = ![]),
        (state[an(0x1f8)] = ![]),
        fetchQuestions()['then']((e) => {
            const ao = an;
            if (e[ao(0x1f1)] !== 0x0) {
                if (ao(0x225) === 'ZMdSl') f();
                else {
                    drawErrorQuestion(), (state[ao(0x1f8)] = !![]);
                    return;
                }
            }
            (state['questions'] = e[ao(0x22c)]), drawQuestion();
        }),
        drawAside(),
        drawQuestion(),
        drawQuestionNumberClass(state['turn'], an(0x1f5));
}
function answer(e) {
    const ap = W;
    if (state[ap(0x1f8)]) {
        if ('kkItY' !== 'kkItY') f();
        else {
            initCat();
            return;
        }
    }
    if (state[ap(0x224)]) {
        console['log'](e);
        e === ap(0x219) ? initQuiz() : initCat();
        return;
    }
    let f = state[ap(0x210)][state[ap(0x237)]][ap(0x208)];
    if (e === f) {
        if (ap(0x1f9) === ap(0x1ea)) {
            f();
            return;
        } else
            state['score']++,
                drawScore(),
                drawQuestionNumberClass(state['turn'], ap(0x227));
    } else drawQuestionNumberClass(state[ap(0x237)], ap(0x246));
    state[ap(0x237)] === state[ap(0x23f)] - 0x1
        ? (drawEndQuestion(), (state[ap(0x224)] = !![]))
        : 'OxzTu' === ap(0x1e8)
        ? g['error'](h)
        : (state[ap(0x237)]++,
          drawQuestionNumberClass(state[ap(0x237)], ap(0x1f5)),
          drawQuestion());
}
function submitCatSelect(e) {
    const aq = W;
    e[aq(0x256)]();
    let f = $catSelectCount[aq(0x22a)],
        g = $catSelectDifficulty[aq(0x22a)],
        h = e[aq(0x229)][aq(0x252)](aq(0x24f));
    (state[aq(0x1ec)] = h[aq(0x22a)]),
        (state[aq(0x20a)] = h[aq(0x211)]),
        (state[aq(0x215)] = g),
        (state[aq(0x23f)] = f),
        drawPage(),
        initQuiz();
}
function answerBtnClicked(e) {
    const ar = W;
    e[ar(0x229)]['matches'](ar(0x1f2)) && answer(e[ar(0x229)]['innerText']);
}
$catSelectForm['addEventListener'](W(0x1ef), submitCatSelect),
    $quizAnswerContainer[W(0x251)](W(0x1fe), answerBtnClicked),
    initCat();
