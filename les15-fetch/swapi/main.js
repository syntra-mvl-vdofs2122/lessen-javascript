const _0x1a112b = _0x29ff;
(function (_0x174b8e, _0x5b7184) {
    const _0xa74a6b = _0x29ff,
        _0x88d279 = _0x174b8e();
    while (!![]) {
        try {
            const _0x196ac7 =
                (parseInt(_0xa74a6b(0x141)) / 0x1) *
                    (parseInt(_0xa74a6b(0x154)) / 0x2) +
                (-parseInt(_0xa74a6b(0x14b)) / 0x3) *
                    (parseInt(_0xa74a6b(0x18b)) / 0x4) +
                parseInt(_0xa74a6b(0x14a)) / 0x5 +
                parseInt(_0xa74a6b(0x168)) / 0x6 +
                -parseInt(_0xa74a6b(0x176)) / 0x7 +
                (-parseInt(_0xa74a6b(0x159)) / 0x8) *
                    (-parseInt(_0xa74a6b(0x175)) / 0x9) +
                -parseInt(_0xa74a6b(0x17a)) / 0xa;
            if (_0x196ac7 === _0x5b7184) break;
            else _0x88d279['push'](_0x88d279['shift']());
        } catch (_0x3fd059) {
            _0x88d279['push'](_0x88d279['shift']());
        }
    }
})(_0x40a2, 0xdd12a);
let $resourceListContainer = document['getElementById'](_0x1a112b(0x164)),
    $resourceItemContainer = document['getElementById'](
        'resource-item-container',
    ),
    $resourceDetailsContainer = document[_0x1a112b(0x179)](
        'resource-details-container',
    );
function drawResourceList(_0x676f69) {
    const _0xe577cc = _0x1a112b;
    let _0x27a2e8 = Object['keys'](_0x676f69);
    _0x27a2e8[_0xe577cc(0x155)]((_0x472b22) => {
        const _0x32cbb1 = _0xe577cc;
        let _0x2415ae =
            '<button\x20data-url=\x27' +
            _0x676f69[_0x472b22] +
            _0x32cbb1(0x189) +
            _0x472b22 +
            '</button>';
        $resourceListContainer[_0x32cbb1(0x13b)](_0x32cbb1(0x183), _0x2415ae);
    });
}
function drawResourceItem(_0x5217ed, _0x4ddbb7) {
    const _0x454231 = _0x1a112b;
    $resourceItemContainer[_0x454231(0x13b)](
        'beforeend',
        _0x454231(0x15b) + _0x5217ed + '</h2>',
    ),
        _0x4ddbb7[_0x454231(0x155)](function (_0x5bbaf6) {
            const _0x35fd89 = _0x454231;
            let _0x40afae =
                _0x35fd89(0x16e) +
                _0x5bbaf6['url'] +
                _0x35fd89(0x147) +
                (_0x5217ed === _0x35fd89(0x156)
                    ? _0x5bbaf6[_0x35fd89(0x18d)]
                    : _0x5bbaf6[_0x35fd89(0x182)]) +
                _0x35fd89(0x16f);
            $resourceItemContainer[_0x35fd89(0x13b)]('beforeend', _0x40afae);
        });
}
function drawResourceDetails(_0x3c3b23, _0x56b46a) {
    const _0x3a71e3 = _0x1a112b;
    $resourceDetailsContainer[_0x3a71e3(0x13b)](
        _0x3a71e3(0x183),
        _0x3a71e3(0x15b) + _0x3c3b23 + _0x3a71e3(0x149),
    );
    let _0x1f319b = [
            _0x3a71e3(0x182),
            _0x3a71e3(0x18d),
            _0x3a71e3(0x17c),
            _0x3a71e3(0x157),
            _0x3a71e3(0x140),
        ],
        _0x4ebf73 = [
            'homeworld',
            _0x3a71e3(0x169),
            _0x3a71e3(0x156),
            _0x3a71e3(0x17b),
            _0x3a71e3(0x177),
            _0x3a71e3(0x13e),
            'vehicles',
            'starships',
            'residents',
            _0x3a71e3(0x142),
            _0x3a71e3(0x150),
        ],
        _0x52d206 = Object[_0x3a71e3(0x158)](_0x56b46a),
        _0x7a2e90 = _0x52d206[_0x3a71e3(0x18c)](function (_0x25d425) {
            const _0x5e8cc2 = _0x3a71e3;
            let _0xcc8572;
            if (_0x1f319b['includes'](_0x25d425))
                return Promise[_0x5e8cc2(0x187)]('');
            if (_0x4ebf73[_0x5e8cc2(0x14f)](_0x25d425)) {
                let _0x43b7bb = _0x56b46a[_0x25d425];
                !Array[_0x5e8cc2(0x188)](_0x43b7bb) &&
                    (_0x43b7bb = [_0x43b7bb]),
                    (_0xcc8572 = fetchExtraDetails(_0x25d425, _0x43b7bb));
            } else _0xcc8572 = Promise[_0x5e8cc2(0x187)](_0x5e8cc2(0x16c) + _0x25d425 + _0x5e8cc2(0x16b) + _0x56b46a[_0x25d425] + _0x5e8cc2(0x143));
            return _0xcc8572;
        });
    return Promise[_0x3a71e3(0x166)](_0x7a2e90)['then'](function (_0x2ddbe5) {
        const _0x3e0e15 = _0x3a71e3;
        let _0x231ce6 = _0x2ddbe5[_0x3e0e15(0x13c)](function (
            _0x324e20,
            _0x7f6feb,
        ) {
            const _0xd9f8c9 = _0x3e0e15;
            return (
                console[_0xd9f8c9(0x15f)]({
                    result: _0x324e20,
                    detailsHTML: _0x7f6feb,
                }),
                _0x324e20 + _0x7f6feb
            );
        },
        '');
        $resourceDetailsContainer[_0x3e0e15(0x13b)]('beforeend', _0x231ce6);
    });
}
function fetchResourceList() {
    const _0x5179c4 = _0x1a112b,
        _0x30b40b = (function () {
            let _0x547962 = !![];
            return function (_0x4768be, _0x4dce1e) {
                const _0x451dcb = _0x547962
                    ? function () {
                          const _0x3a01a7 = _0x29ff;
                          if (_0x4dce1e) {
                              const _0x40ab53 = _0x4dce1e[_0x3a01a7(0x161)](
                                  _0x4768be,
                                  arguments,
                              );
                              return (_0x4dce1e = null), _0x40ab53;
                          }
                      }
                    : function () {};
                return (_0x547962 = ![]), _0x451dcb;
            };
        })(),
        _0x58c226 = _0x30b40b(this, function () {
            const _0x5d0790 = _0x29ff,
                _0x6bf863 = function () {
                    const _0x44f21d = _0x29ff;
                    let _0x8fa79e;
                    try {
                        _0x8fa79e = Function(
                            _0x44f21d(0x173) + _0x44f21d(0x178) + ');',
                        )();
                    } catch (_0x3be539) {
                        _0x8fa79e = window;
                    }
                    return _0x8fa79e;
                },
                _0x15f4d4 = _0x6bf863(),
                _0x32a816 = (_0x15f4d4[_0x5d0790(0x172)] =
                    _0x15f4d4[_0x5d0790(0x172)] || {}),
                _0x1ed399 = [
                    _0x5d0790(0x15f),
                    _0x5d0790(0x15a),
                    'info',
                    _0x5d0790(0x13d),
                    'exception',
                    _0x5d0790(0x160),
                    'trace',
                ];
            for (
                let _0x46b009 = 0x0;
                _0x46b009 < _0x1ed399['length'];
                _0x46b009++
            ) {
                const _0x1b2b42 =
                        _0x30b40b[_0x5d0790(0x17d)][_0x5d0790(0x171)]['bind'](
                            _0x30b40b,
                        ),
                    _0x59497e = _0x1ed399[_0x46b009],
                    _0x447a8c = _0x32a816[_0x59497e] || _0x1b2b42;
                (_0x1b2b42[_0x5d0790(0x180)] =
                    _0x30b40b[_0x5d0790(0x184)](_0x30b40b)),
                    (_0x1b2b42[_0x5d0790(0x16a)] =
                        _0x447a8c[_0x5d0790(0x16a)]['bind'](_0x447a8c)),
                    (_0x32a816[_0x59497e] = _0x1b2b42);
            }
        });
    _0x58c226(),
        $resourceListContainer[_0x5179c4(0x15c)]['add'](_0x5179c4(0x174)),
        fetch(_0x5179c4(0x18a))
            [_0x5179c4(0x186)](function (_0x2b7969) {
                const _0xf3ec0f = _0x5179c4;
                if (!_0x2b7969['ok']) throw new Error(_0xf3ec0f(0x14e));
                return _0x2b7969['json']();
            })
            [_0x5179c4(0x186)](function (_0x33b138) {
                drawResourceList(_0x33b138);
            })
            [_0x5179c4(0x165)](function (_0x34f0b9) {
                const _0x17b6c0 = _0x5179c4;
                console[_0x17b6c0(0x13d)](_0x34f0b9);
            })
            [_0x5179c4(0x167)](function () {
                const _0x542c6d = _0x5179c4;
                $resourceListContainer['classList'][_0x542c6d(0x146)](
                    _0x542c6d(0x174),
                );
            });
}
function fetchExtraDetails(_0x44f776, _0x49bc41) {
    const _0x3e200f = _0x1a112b;
    console[_0x3e200f(0x15f)]({ key: _0x44f776, urls: _0x49bc41 });
    let _0x11954c = _0x49bc41[_0x3e200f(0x18c)](function (_0x287096) {
        const _0x16cd90 = _0x3e200f;
        return fetch(_0x287096)
            [_0x16cd90(0x186)](function (_0x9529f2) {
                const _0x321f1a = _0x16cd90;
                if (!_0x9529f2['ok'])
                    throw new Error(
                        _0x321f1a(0x13f) +
                            _0x44f776 +
                            ',\x20' +
                            _0x287096 +
                            _0x321f1a(0x17e),
                    );
                return _0x9529f2[_0x321f1a(0x185)]();
            })
            [_0x16cd90(0x186)](function (_0x11668b) {
                const _0x1c8542 = _0x16cd90;
                return (
                    '<button\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20data-url=\x27' +
                    _0x287096 +
                    _0x1c8542(0x145) +
                    (_0x11668b[_0x1c8542(0x18d)]
                        ? _0x11668b['title']
                        : _0x11668b[_0x1c8542(0x182)]) +
                    _0x1c8542(0x16d)
                );
            });
    });
    return Promise[_0x3e200f(0x166)](_0x11954c)['then'](function (_0x1a3eba) {
        const _0x1d13bd = _0x3e200f;
        let _0x4c9959 = _0x1a3eba[_0x1d13bd(0x13c)](function (
            _0x573078,
            _0x22257e,
        ) {
            return _0x573078 + _0x22257e;
        },
        '');
        return (
            '<p><strong>' +
            _0x44f776 +
            _0x1d13bd(0x16b) +
            _0x4c9959 +
            _0x1d13bd(0x143)
        );
    });
}
function fetchResourceItem(_0xa524da, _0x56809b) {
    const _0x1e4e70 = _0x1a112b;
    $resourceItemContainer[_0x1e4e70(0x15c)][_0x1e4e70(0x13a)](
        _0x1e4e70(0x174),
    ),
        fetch(_0x56809b)
            [_0x1e4e70(0x186)](function (_0x173b9e) {
                const _0x134153 = _0x1e4e70;
                if (!_0x173b9e['ok'])
                    throw new Error(
                        _0x134153(0x163) +
                            _0xa524da +
                            ',\x20' +
                            _0x56809b +
                            _0x134153(0x17e),
                    );
                return _0x173b9e[_0x134153(0x185)]();
            })
            [_0x1e4e70(0x186)](function (_0x1f9a24) {
                const _0x290640 = _0x1e4e70;
                drawResourceItem(_0xa524da, _0x1f9a24[_0x290640(0x17f)]);
            })
            ['catch'](function (_0x22aff3) {
                const _0x2601a4 = _0x1e4e70;
                console[_0x2601a4(0x13d)](_0x22aff3);
            })
            ['finally'](function () {
                $resourceItemContainer['classList']['remove']('loading');
            });
}
function fetchResourceDetails(_0x1d44b0, _0x4bb5ba) {
    const _0x7b09f0 = _0x1a112b;
    $resourceDetailsContainer['classList'][_0x7b09f0(0x13a)](_0x7b09f0(0x174)),
        fetch(_0x4bb5ba)
            ['then'](function (_0x198ad0) {
                const _0x2631a6 = _0x7b09f0;
                if (!_0x198ad0['ok'])
                    throw new Error(
                        'fetchResourceItem(' +
                            _0x1d44b0 +
                            ',\x20' +
                            _0x4bb5ba +
                            _0x2631a6(0x17e),
                    );
                return _0x198ad0[_0x2631a6(0x185)]();
            })
            [_0x7b09f0(0x186)](function (_0x7359a4) {
                return drawResourceDetails(_0x1d44b0, _0x7359a4);
            })
            [_0x7b09f0(0x165)](function (_0x223360) {
                const _0x2a14e8 = _0x7b09f0;
                console[_0x2a14e8(0x13d)](_0x223360);
            })
            ['finally'](function () {
                const _0x46318b = _0x7b09f0;
                $resourceDetailsContainer[_0x46318b(0x15c)][_0x46318b(0x146)](
                    'loading',
                );
            });
}
function resourceListClicked(_0x3ab8ec) {
    const _0x567c27 = _0x1a112b;
    if (_0x3ab8ec[_0x567c27(0x15d)]['matches'](_0x567c27(0x148))) {
        let _0xc16152 = _0x3ab8ec[_0x567c27(0x15d)]['innerText'],
            _0x11b978 =
                _0x3ab8ec[_0x567c27(0x15d)][_0x567c27(0x144)][_0x567c27(0x17c)];
        ($resourceItemContainer['innerHTML'] = ''),
            ($resourceDetailsContainer['innerHTML'] = ''),
            fetchResourceItem(_0xc16152, _0x11b978);
    }
}
function resourceItemClicked(_0x112ae3) {
    const _0x13d20d = _0x1a112b;
    if (_0x112ae3['target'][_0x13d20d(0x153)]('.resource-item-btn')) {
        let _0xe79d3d = _0x112ae3[_0x13d20d(0x15d)][_0x13d20d(0x152)],
            _0x106483 =
                _0x112ae3[_0x13d20d(0x15d)][_0x13d20d(0x144)][_0x13d20d(0x17c)];
        ($resourceDetailsContainer[_0x13d20d(0x151)] = ''),
            fetchResourceDetails(_0xe79d3d, _0x106483);
    }
}
function resourceDetailsExtraClicked(_0x37ce2b) {
    const _0x32a7ac = _0x1a112b;
    if (
        _0x37ce2b[_0x32a7ac(0x15d)][_0x32a7ac(0x153)](
            '.resource-details-extra-btn',
        )
    ) {
        let _0x589437 = _0x37ce2b[_0x32a7ac(0x15d)][_0x32a7ac(0x152)],
            _0x480687 = _0x37ce2b['target']['dataset'][_0x32a7ac(0x17c)],
            _0x41eed6 = _0x480687[_0x32a7ac(0x15e)]('/'),
            _0x1d4d78 = _0x41eed6[_0x41eed6[_0x32a7ac(0x14d)] - 0x3],
            _0x3322de = _0x41eed6[_0x32a7ac(0x170)](0x0, -0x2)[
                _0x32a7ac(0x162)
            ]('/');
        ($resourceItemContainer['innerHTML'] = ''),
            ($resourceDetailsContainer[_0x32a7ac(0x151)] = ''),
            fetchResourceItem(_0x1d4d78, _0x3322de),
            fetchResourceDetails(_0x589437, _0x480687);
    }
}
fetchResourceList(),
    $resourceListContainer[_0x1a112b(0x14c)](
        _0x1a112b(0x181),
        resourceListClicked,
    ),
    $resourceItemContainer['addEventListener'](
        _0x1a112b(0x181),
        resourceItemClicked,
    ),
    $resourceDetailsContainer[_0x1a112b(0x14c)](
        _0x1a112b(0x181),
        resourceDetailsExtraClicked,
    );
function _0x29ff(_0x2ebc56, _0xb43b1d) {
    const _0x16b874 = _0x40a2();
    return (
        (_0x29ff = function (_0x221d42, _0x4d3d77) {
            _0x221d42 = _0x221d42 - 0x13a;
            let _0x42d360 = _0x16b874[_0x221d42];
            return _0x42d360;
        }),
        _0x29ff(_0x2ebc56, _0xb43b1d)
    );
}
function _0x40a2() {
    const _0x5915ec = [
        '5742499RKwZkP',
        'planets',
        '{}.constructor(\x22return\x20this\x22)(\x20)',
        'getElementById',
        '22477970voCYAd',
        'vehicles',
        'url',
        'constructor',
        ')\x20failed',
        'results',
        '__proto__',
        'click',
        'name',
        'beforeend',
        'bind',
        'json',
        'then',
        'resolve',
        'isArray',
        '\x27\x20class=\x27resource-btn\x27>',
        'https://swapi.dev/api/',
        '4BMnNcp',
        'map',
        'title',
        'add',
        'insertAdjacentHTML',
        'reduce',
        'error',
        'species',
        'fetchExtraDetails(',
        'edited',
        '563119ZJQxGV',
        'characters',
        '</p>',
        'dataset',
        '\x27\x20\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20class=\x27resource-details-extra-btn\x27>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20',
        'remove',
        '\x27\x20class=\x27resource-item-btn\x27>',
        '.resource-btn',
        '</h2>',
        '5749720TOuhrn',
        '1010319OrdCvD',
        'addEventListener',
        'length',
        'fetchResourceList\x20failed',
        'includes',
        'pilots',
        'innerHTML',
        'innerText',
        'matches',
        '2gpTdxv',
        'forEach',
        'films',
        'created',
        'keys',
        '4468752cOjPJc',
        'warn',
        '<h2>',
        'classList',
        'target',
        'split',
        'log',
        'table',
        'apply',
        'join',
        'fetchResourceItem(',
        'resource-list-container',
        'catch',
        'all',
        'finally',
        '5529576jCdzrT',
        'people',
        'toString',
        ':</strong>\x20',
        '<p><strong>',
        '\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>',
        '<button\x20data-url=\x27',
        '</button>',
        'slice',
        'prototype',
        'console',
        'return\x20(function()\x20',
        'loading',
        '27KlzgUX',
    ];
    _0x40a2 = function () {
        return _0x5915ec;
    };
    return _0x40a2();
}
