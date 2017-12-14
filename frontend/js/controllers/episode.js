 myApp.controller('EpisodeCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
     $scope.template = TemplateService.getHTML("content/episode.html");
     TemplateService.title = "Episode"; // This is the Title of the Website
     $scope.navigation = NavigationService.getNavigation();
     //for season4
     $scope.season4 = [{
         imageUrl: "dGpLPgK44yU",
         videoUrl: "dGpLPgK44yU",
         episodeno: "Episode1",
         searchName: "NSE Fin Wiz Season 4 – EP- 1- The Curtain Raiser",
     }, {
         imageUrl: "3dnOodW1Vu8",
         videoUrl: "3dnOodW1Vu8",
         episodeno: "Episode2",
         searchName: "NSE FinWiz at Infosys - Expert Tip",
     }, {
         imageUrl: "fv1ti9QMfhU",
         videoUrl: "fv1ti9QMfhU",
         episodeno: "Episode 3",
         searchName: "NSE FinWiz at Tech Mahindra - Expert Tip",
     }, {
         imageUrl: "CHtZ_zE4KTE",
         videoUrl: "CHtZ_zE4KTE",
         episodeno: "Episode 4",
         searchName: "NSE FinWiz at Ambuja Cement - Expert Tip",
     }, {
         imageUrl: "vpfQ3ahqgh0",
         videoUrl: "vpfQ3ahqgh0",
         episodeno: "Episode 5",
         searchName: "NSE FinWiz at KPIT - Expert Tip",
     }, {
         imageUrl: "-ulbWgeQ_7o",
         videoUrl: "-ulbWgeQ_7o",
         episodeno: "Episode 6",
         searchName: "NSE FinWiz at Syntel - Expert Tip",
     }, {
         imageUrl: "72KKuEtSB2c",
         videoUrl: "72KKuEtSB2c",
         episodeno: "Episode 7",
         searchName: "NSE FinWiz at Ultratech - Expert Tip",
     }, {
         imageUrl: "XL5idEP3ESg",
         videoUrl: "XL5idEP3ESg",
         episodeno: "Episode 8",
         searchName: "NSE FinWiz at Exide - Expert Tip",
     }, {
         imageUrl: "6vwTDWOSh6Y",
         videoUrl: "6vwTDWOSh6Y",
         episodeno: "Episode 9",
         searchName: "NSE FinWiz at Ashok Leyland - Expert Tip",
     }, {
         imageUrl: "Af8BZySHEeY",
         videoUrl: "Af8BZySHEeY",
         episodeno: "Episode 10",
         searchName: "NSE FinWiz at BASF - Expert Tip",
     }, {
         imageUrl: "K1_o58h40pE",
         videoUrl: "K1_o58h40pE",
         episodeno: "Episode 11",
         searchName: "NSE FinWiz at ACC - Expert Tip",
     }, {
         imageUrl: "yXYG8xfLZMw",
         videoUrl: "yXYG8xfLZMw",
         episodeno: "Episode 12",
         searchName: "NSE FinWiz at Mphasis - Expert Tip",
     }, {
         imageUrl: "zCvPGkCCTsA",
         videoUrl: "zCvPGkCCTsA",
         episodeno: "Episode 13",
         searchName: "NSE FinWiz at Vedanta - Expert Tip",
     }, {
         imageUrl: "Nx5n4P8-lQw",
         videoUrl: "Nx5n4P8-lQw",
         episodeno: "Episode 14",
         searchName: "NSE FinWiz at Thyrocare - Expert Tip",
     }, {
         imageUrl: "wCkUBjUvGgQ",
         videoUrl: "wCkUBjUvGgQ",
         episodeno: "Episode 15",
         searchName: "NSE FinWiz at Nalco - Expert Tip",
     }, {
         imageUrl: "7TM2VNRTi2Q",
         videoUrl: "7TM2VNRTi2Q",
         episodeno: "Episode 16",
         searchName: "NSE FinWiz at Apollo Tyres - Expert Tip",
     }, {
         imageUrl: "02QNQa96gdw",
         videoUrl: "02QNQa96gdw",
         episodeno: "Episode 17",
         searchName: "NSE FinWiz at Jet Airways - Expert Tip",
     }, {
         imageUrl: "A4cMfpWUk7Q",
         videoUrl: "A4cMfpWUk7Q",
         episodeno: "Episode 18",
         searchName: "NSE FinWiz at Capgemini - Expert Tip",
     }, {
         imageUrl: "RnewTYJeoq0",
         videoUrl: "RnewTYJeoq0",
         episodeno: "Episode 19",
         searchName: "NSE FinWiz at Mondelez - Expert Tip",
     }, {
         imageUrl: "-f1FZDLcRLA",
         videoUrl: "-f1FZDLcRLA",
         episodeno: "Episode 20",
         searchName: "NSE FinWiz at Dr Reddy's - Expert Tip",
     }, {
         imageUrl: "pSy3sdFzHuM",
         videoUrl: "pSy3sdFzHuM",
         episodeno: "Episode 21",
         searchName: "NSE FinWiz at Havells - Expert Tip",
     }, {
         imageUrl: "ztCXPHFLN-g",
         videoUrl: "ztCXPHFLN-g",
         episodeno: "Episode 22",
         searchName: "FINWIZ Case Studies - Capgemini",
     }, {
         imageUrl: "QTFarSX3C9U",
         videoUrl: "QTFarSX3C9U",
         episodeno: "Episode 23",
         searchName: "FINWIZ Case Studies - Dr Reddy's",
     }, {
         imageUrl: "keI9IzEanNE",
         videoUrl: "keI9IzEanNE",
         episodeno: "Episode 24",
         searchName: "FINWIZ Case Studies - BASF",
     }, {
         imageUrl: "rE4P6j-RNS4",
         videoUrl: "rE4P6j-RNS4",
         episodeno: "Episode 25",
         searchName: "FINWIZ Case Studies - Ashok Leyland",
     }, {
         imageUrl: "ZH10HvX0rm0",
         videoUrl: "ZH10HvX0rm0",
         episodeno: "Episode 26",
         searchName: "FINWIZ Case Studies - Mondelez",
     }, {
         imageUrl: "EoLy3yNUNI0",
         videoUrl: "EoLy3yNUNI0",
         episodeno: "Episode 27",
         searchName: "FINWIZ Case Study - Jet Airways",
     }, {
         imageUrl: "yoaWYxEMehA",
         videoUrl: "yoaWYxEMehA",
         episodeno: "Episode 28",
         searchName: "FINWIZ Case Study - Exide",
     }, {
         imageUrl: "QAV9dC8l764",
         videoUrl: "QAV9dC8l764",
         episodeno: "Episode 29",
         searchName: "FINWIZ Case Studies - Thyrocare",
     }, {
         imageUrl: "PsG6I8LqmbY",
         videoUrl: "PsG6I8LqmbY",
         episodeno: "Episode 30",
         searchName: "FINWIZ Case Studies - NALCO",
     }, {
         imageUrl: "_tWfiKDrcaM",
         videoUrl: "_tWfiKDrcaM",
         episodeno: "Episode 31",
         searchName: "FINWIZ Case Studies - MPHASIS",
     }, {
         imageUrl: "ui0LdqWThQ0",
         videoUrl: "ui0LdqWThQ0",
         episodeno: "Episode 32",
         searchName: "FINWIZ Case Studies - Vedanta",
     }, {
         imageUrl: "QMfv7YkuPwM",
         videoUrl: "QMfv7YkuPwM",
         episodeno: "Episode 33",
         searchName: "NSE FinWiz at Pepsico India - Expert Tip",
     }];


     //end of season4
     //for season3
     $scope.season3 = [{
             imageUrl: "97KSfy9OYZw",
             videoUrl: "97KSfy9OYZw",
             episodeno: "Episode1",
             searchName: "Lessons On Personal Investments By Financial Gurus",
         }, {
             imageUrl: "n2aLGK8rtIs",
             videoUrl: "n2aLGK8rtIs",
             episodeno: "Episode2",
             searchName: "Unconventional Methods Of Debt Investments",
         }, {
             imageUrl: "yr-Y4wgMMBk",
             videoUrl: "yr-Y4wgMMBk",
             episodeno: "Episode 3",
             searchName: "NSE FINWIZ Season 3- Behind The Scenes",
         }, {
             imageUrl: "NlDQpJ-WjT8",
             videoUrl: "NlDQpJ-WjT8",
             episodeno: "Episode 4",
             searchName: "Secrets To Get The Perfect Insurance Plan",
         }, {
             imageUrl: "MgFMn8_dOtg",
             videoUrl: "MgFMn8_dOtg",
             episodeno: "Episode 5",
             searchName: "How To Invest For A Hassle Free Retirement",
         }, {
             imageUrl: "wRRtoPXD8KQ",
             videoUrl: "wRRtoPXD8KQ",
             episodeno: "Episode 6",
             searchName: "Equity Investments- The Key To Wealth Creation",
         }, {
             imageUrl: "iHmwYYHTddw",
             videoUrl: "iHmwYYHTddw",
             episodeno: "Episode 7",
             searchName: "How To Plan Your Personal Finance Efficiently",
         }, {
             imageUrl: "TWXx3tN3s-g",
             videoUrl: "TWXx3tN3s-g",
             episodeno: "Episode 8",
             searchName: "Tax Planning- Dos & Don'ts",
         }, {
             imageUrl: "rzGPZWMVs2g",
             videoUrl: "rzGPZWMVs2g",
             episodeno: "Episode 9",
             searchName: "Mutual Funds- The Key To Wealth Creation",
         }, {
             imageUrl: "BIdq9ZMCK2I",
             videoUrl: "BIdq9ZMCK2I",
             episodeno: "Episode 10",
             searchName: "The Dos & Don'ts Of Credit Cards & Loans.",
         }, {
             imageUrl: "5vk0hJRHx-w",
             videoUrl: "5vk0hJRHx-w",
             episodeno: "Episode 11",
             searchName: "How much should you invest in Gold? Experts speak.",
         }, {
             imageUrl: "ucRcFjDVSAA",
             videoUrl: "ucRcFjDVSAA",
             episodeno: "Episode 12",
             searchName: "Choose The Right Medical Insurance",
         }, {
             imageUrl: "JtzFCZKiKR8",
             videoUrl: "JtzFCZKiKR8",
             episodeno: "Episode 13",
             searchName: "How should one Invest In Equities",
         }, {
             imageUrl: "k1_nWbrmAxs",
             videoUrl: "k1_nWbrmAxs",
             episodeno: "Episode 14",
             searchName: "Most Important Financial Goal- Retirement",
         }, {
             imageUrl: "nyaMiwcnsyM",
             videoUrl: "nyaMiwcnsyM",
             episodeno: "Episode 15",
             searchName: "The contemporary way of investing in Gold",
         }, {
             imageUrl: "jTqIGtmQ0io",
             videoUrl: "jTqIGtmQ0io",
             episodeno: "Episode 16",
             searchName: "How To Keep Your Insurance Plan Separate From Your Investments",
         }, {
             imageUrl: "7WFRvNRCHPc",
             videoUrl: "7WFRvNRCHPc",
             episodeno: "Episode 17",
             searchName: "All about loans and credit cards",
         }, {
             imageUrl: "FoAzajxtggk",
             videoUrl: "FoAzajxtggk",
             episodeno: "Episode 18",
             searchName: "How To Invest In Mutual Funds?",
         }, {
             imageUrl: "Xhs4MiDQ4ik",
             videoUrl: "Xhs4MiDQ4ik",
             episodeno: "Episode 19",
             searchName: "Basic Fundamentals Of Personal Finance",
         }, {
             imageUrl: "8yjt2SUawb0",
             videoUrl: "8yjt2SUawb0",
             episodeno: "Episode 20",
             searchName: "Real Estate & other Personal Financial Instruments.",
         }, {
             imageUrl: "mYWtcH2OSOE",
             videoUrl: "mYWtcH2OSOE",
             episodeno: "Episode 21",
             searchName: "NSE Finwiz Season 3",
         }, {
             imageUrl: "yufRPvyElE0",
             videoUrl: "yufRPvyElE0",
             episodeno: "Episode 22",
             searchName: "Expert Advice On Real Estate Investments",
         }, {
             imageUrl: "SGlFuUEjjtU",
             videoUrl: "SGlFuUEjjtU",
             episodeno: "Episode 23",
             searchName: "How To Enjoy Tax Benefits",
         }

     ];


     //end of season3
     //for season2
     $scope.season2 = [{
         imageUrl: "b_2A1pmTbCo",
         videoUrl: "b_2A1pmTbCo",
         episodeno: "Episode 1",
         searchName: "NSE Fin Wiz, Manipal Hospital, Bangalore Part 1",
     }, {
         imageUrl: "DtUQ5-BGrz4",
         videoUrl: "DtUQ5-BGrz4",
         episodeno: "Episode 2",
         searchName: "NSE Fin Wiz, Manipal Hospital, Bangalore Part 2",
     }, {
         imageUrl: "91w-vLVlEHI",
         videoUrl: "91w-vLVlEHI",
         episodeno: "Episode 3",
         searchName: "NSE Fin Wiz, Manipal Hospital, Bangalore Part 3",
     }, {
         imageUrl: "H_PhMcIPMbs",
         videoUrl: "H_PhMcIPMbs",
         episodeno: "Episode 4",
         searchName: "NSE FIN WIZ TAJ PALACE, DELHI SEG 3",
     }, {
         imageUrl: "xztM1KWZSKg",
         videoUrl: "xztM1KWZSKg",
         episodeno: "Episode 5",
         searchName: "NSE FIN WIZ TAJ PALACE, DELHI SEG 2",
     }, {
         imageUrl: "nIBOmbvoFlw",
         videoUrl: "nIBOmbvoFlw",
         episodeno: "Episode 6",
         searchName: "NSE FIN WIZ TAJ PALACE, DELHI",
     }, {
         imageUrl: "FpzIpbZS3AY",
         videoUrl: "FpzIpbZS3AY",
         episodeno: "Episode 7",
         searchName: "NSE FIN WIZ CYIENT HYDERABAD SEG 3",
     }, {
         imageUrl: "WhgPuYjKZDU",
         videoUrl: "WhgPuYjKZDU",
         episodeno: "Episode 8",
         searchName: "NSE FIN WIZ CYIENT HYDERABAD SEG 2",
     }, {
         imageUrl: "pCILT5lKQOY",
         videoUrl: "pCILT5lKQOY",
         episodeno: "Episode 9",
         searchName: "NSE FIN WIZ CYIENT HYDERABAD SEG 1",
     }, {
         imageUrl: "mlfHKDfC-p4",
         videoUrl: "mlfHKDfC-p4",
         episodeno: "Episode 10",
         searchName: "NSE FIN WIZ SHOBHA, BANGALORE SEG 2",
     }, {
         imageUrl: "tqT2sZYj7PU",
         videoUrl: "tqT2sZYj7PU",
         episodeno: "Episode 11",
         searchName: "NSE FIN WIZ SHOBHA, BANGALORE SEG 1",
     }, {
         imageUrl: "QGUj5HHvEA8",
         videoUrl: "QGUj5HHvEA8",
         episodeno: "Episode 12",
         searchName: "NSE FIN WIZ GLAXO SEG 2",
     }, {
         imageUrl: "O5MbuEWgDmo",
         videoUrl: "O5MbuEWgDmo",
         episodeno: "Episode 13",
         searchName: "NSE FIN WIZ GLAXO SEG 1",
     }, {
         imageUrl: "IHN9zICuk0I",
         videoUrl: "IHN9zICuk0I",
         episodeno: "Episode 14",
         searchName: "NSE FIN WIZ GLAXO SEG 3",
     }, {
         imageUrl: "TKkjL6vSzDw",
         videoUrl: "TKkjL6vSzDw",
         episodeno: "Episode 15",
         searchName: "NSE Fin Wiz Mindtree, Bangalore Part 2",
     }, {
         imageUrl: "0vGR1F_te0o",
         videoUrl: "0vGR1F_te0o",
         episodeno: "Episode 16",
         searchName: "NSE Fin Wiz Mindtree, Bangalore Part 1",
     }, {
         imageUrl: "g_EpTir-4No",
         videoUrl: "g_EpTir-4No",
         episodeno: "Episode 17",
         searchName: "NSE Fin Wiz Mindtree, Bangalore Part 3",
     }, {
         imageUrl: "38j9e9kRxgU",
         videoUrl: "38j9e9kRxgU",
         episodeno: "Episode 18",
         searchName: "NSE FIN WIZ FORTIS, GURGAON SEG 1",
     }, {
         imageUrl: "eMrhDAUxobQ",
         videoUrl: "eMrhDAUxobQ",
         episodeno: "Episode 19",
         searchName: "NSE FIN WIZ FORTIS, GURGAON SEG 2",
     }, {
         imageUrl: "-ZFZU_sRTEI",
         videoUrl: "-ZFZU_sRTEI",
         episodeno: "Episode 20",
         searchName: "NSE FIN WIZ FORTIS, GURGAON SEG 3",
     }, {
         imageUrl: "5yX5eqN_rPE",
         videoUrl: "5yX5eqN_rPE",
         episodeno: "Episode 21",
         searchName: "NSE FIN WIZ JUBILANT, NOIDA SEG 1",
     }, {
         imageUrl: "HRuGmb-1f30",
         videoUrl: "HRuGmb-1f30",
         episodeno: "Episode 22",
         searchName: "NSE FIN WIZ JUBILANT, NOIDA SEG 3",
     }, {
         imageUrl: "0aHgItBRHlE",
         videoUrl: "0aHgItBRHlE",
         episodeno: "Episode 23",
         searchName: "NSE FIN WIZ JUBILANT, NOIDA SEG 2",
     }, {
         imageUrl: "x91d-fdXIco",
         videoUrl: "x91d-fdXIco",
         episodeno: "Episode 24",
         searchName: "NSE Fin Wiz - Raymond Mumbai Seg 3",
     }, {
         imageUrl: "hKMkF9SjA0I",
         videoUrl: "hKMkF9SjA0I",
         episodeno: "Episode 25",
         searchName: "NSE Fin Wiz - Raymond Mumbai Seg 2",
     }, {
         imageUrl: "wrM7mekwSHI",
         videoUrl: "wrM7mekwSHI",
         episodeno: "Episode 26",
         searchName: "NSE Fin Wiz - Raymond Mumbai Seg 1",
     }, {
         imageUrl: "d6TsC7c1xjw",
         videoUrl: "d6TsC7c1xjw",
         episodeno: "Episode 27",
         searchName: "NSE Fin Wiz at Infosys, Pune seg 2",
     }, {
         imageUrl: "COnJlZUp6w0",
         videoUrl: "COnJlZUp6w0",
         episodeno: "Episode 28",
         searchName: "NSE Fin Wiz at Infosys, Pune",
     }, {
         imageUrl: "9zp1d2OvwCg",
         videoUrl: "9zp1d2OvwCg",
         episodeno: "Episode 29",
         searchName: "NSE Fin Wiz at Infosys, Pune seg 3",
     }, {
         imageUrl: "OhjxnQi4B80",
         videoUrl: "OhjxnQi4B80",
         episodeno: "Episode 30",
         searchName: "NSE Fin Wiz At Persistent, Pune",
     }, {
         imageUrl: "c7lFD_nq_Q0",
         videoUrl: "c7lFD_nq_Q0",
         episodeno: "Episode 31",
         searchName: "NSE Fin Wiz At Persistent, Pune",
     }, {
         imageUrl: "8jLHQ3VBSOI",
         videoUrl: "8jLHQ3VBSOI",
         episodeno: "Episode 32",
         searchName: "NSE Fin Wiz At Persistent, Pune",
     }, {
         imageUrl: "yVU6XYRA4Co",
         videoUrl: "yVU6XYRA4Co",
         episodeno: "Episode 33",
         searchName: "Unseasonal Rains: Big Dampener",
     }, {
         imageUrl: "LCUqI0u7NVQ",
         videoUrl: "LCUqI0u7NVQ",
         episodeno: "Episode 34",
         searchName: "NSE Fin Wiz Season 2: Genpact Part 3",
     }, {
         imageUrl: "7oMXSfQEfQo",
         videoUrl: "7oMXSfQEfQo",
         episodeno: "Episode 35",
         searchName: "NSE Fin Wiz Season 2: Genpact",
     }, {
         imageUrl: "8jjD3Ggx3qo",
         videoUrl: "8jjD3Ggx3qo",
         episodeno: "Episode 36",
         searchName: "NSE Fin Wiz: Genpact"
     }];


     //end of season2

     //for season1
     $scope.season1 = [{
         imageUrl: "OqT3D60MZVk",
         videoUrl: "OqT3D60MZVk",
         episodeno: "Episode 1",
         searchName: "",
     }, {
         imageUrl: "47VM_wfNUdQ",
         videoUrl: "47VM_wfNUdQ",
         episodeno: "Episode 2",
         searchName: "Financial Budgeting",
     }, {
         imageUrl: "x4nlGY36J-s",
         videoUrl: "x4nlGY36J-s",
         episodeno: "Episode 3",
         searchName: "Financial Goals",
     }, {
         imageUrl: "nrWcU0iPTrg",
         videoUrl: "nrWcU0iPTrg",
         episodeno: "Episode 4",
         searchName: "Banking",
     }, {
         imageUrl: "yqX09Ai8bdw",
         videoUrl: "yqX09Ai8bdw",
         episodeno: "Episode 5",
         searchName: "Investments",
     }, {
         imageUrl: "vf8Z_0dk3tQ",
         videoUrl: "vf8Z_0dk3tQ",
         episodeno: "Episode 6",
         searchName: "Simple & Compound Interest",
     }, {
         imageUrl: "YnauodrRqpw",
         videoUrl: "YnauodrRqpw",
         episodeno: "Episode 7",
         searchName: "Fixed & Recurring Deposit",
     }, {
         imageUrl: "KurI8w6hteg",
         videoUrl: "KurI8w6hteg",
         episodeno: "Episode 8",
         searchName: "Online Banking",
     }, {
         imageUrl: "d2b_Kv_d3Cs",
         videoUrl: "d2b_Kv_d3Cs",
         episodeno: "Episode 9",
         searchName: "Electronic Money",
     }, {
         imageUrl: "Umnq0EDKjcE",
         videoUrl: "Umnq0EDKjcE",
         episodeno: "Episode 10",
         searchName: "Post Office Savings",
     }, {
         imageUrl: "g20d_8D-G3k",
         videoUrl: "g20d_8D-G3k",
         episodeno: "Episode 11",
         searchName: "Credit Cards",
     }, {
         imageUrl: "AkZwkJnwoBw",
         videoUrl: "AkZwkJnwoBw",
         episodeno: "Episode 12",
         searchName: "Mutual Funds",
     }, {
         imageUrl: "b0trRrnppkQ",
         videoUrl: "b0trRrnppkQ",
         episodeno: "Episode 13",
         searchName: "Mutual Funds",
     }, {
         imageUrl: "ss8EycBDSfc",
         videoUrl: "ss8EycBDSfc",
         episodeno: "Episode 14",
         searchName: "Mutual Funds",
     }, {
         imageUrl: "cq0FB8O-SXk",
         videoUrl: "cq0FB8O-SXk",
         episodeno: "Episode 15",
         searchName: "Debt Mutual Funds",
     }, {
         imageUrl: "ZqKaGWON_ZE",
         videoUrl: "ZqKaGWON_ZE",
         episodeno: "Episode 16",
         searchName: "Mutual Funds",
     }, {
         imageUrl: "HV5u_wwPj3Y",
         videoUrl: "HV5u_wwPj3Y",
         episodeno: "Episode 17",
         searchName: "How to Invest in Mutual Funds",
     }, {
         imageUrl: "66NU5Ip_jMA",
         videoUrl: "66NU5Ip_jMA",
         episodeno: "Episode 18",
         searchName: "Types of Mutual Funds",
     }, {
         imageUrl: "NxSM8956Hfo",
         videoUrl: "NxSM8956Hfo",
         episodeno: "Episode 19",
         searchName: "Exchange Trade Funds",
     }, {
         imageUrl: "rHFbbltTOiY",
         videoUrl: "rHFbbltTOiY",
         episodeno: "Episode 20",
         searchName: "International Funds",
     }, {
         imageUrl: "BT4u-shAQew",
         videoUrl: "BT4u-shAQew",
         episodeno: "Episode 21",
         searchName: "Gold Fund & SIP",
     }, {
         imageUrl: "uyLSt9UfOxA",
         videoUrl: "uyLSt9UfOxA",
         episodeno: "Episode 22",
         searchName: "Taxes on Mutual Funds",
     }, {
         imageUrl: "tM92E1YmsI0",
         videoUrl: "tM92E1YmsI0",
         episodeno: "Episode 23",
         searchName: "Mutual Funds",
     }, {
         imageUrl: "mM7M_DVh8Z0",
         videoUrl: "mM7M_DVh8Z0",
         episodeno: "Episode 24",
         searchName: "Portfolio Valuation",
     }, {
         imageUrl: "AL18u09wUZI",
         videoUrl: "AL18u09wUZI",
         episodeno: "Episode 25",
         searchName: "Insurance",
     }, {
         imageUrl: "mM7M_DVh8Z0",
         videoUrl: "mM7M_DVh8Z0",
         episodeno: "Episode 26",
         searchName: "Insurance",
     }, {
         imageUrl: "809LBgNmgDk",
         videoUrl: "809LBgNmgDk",
         episodeno: "Episode 27",
         searchName: "Insurance Coverage",
     }, {
         imageUrl: "mUqTxh4g3_g",
         videoUrl: "mUqTxh4g3_g",
         episodeno: "Episode 28",
         searchName: "Traditional Insuracne",
     }, {
         imageUrl: "SZ8EjsGNxpM",
         videoUrl: "SZ8EjsGNxpM",
         episodeno: "Episode 29",
         searchName: "Pension Policies & Term Plans",
     }, {
         imageUrl: "GppqPhUxObc",
         videoUrl: "GppqPhUxObc",
         episodeno: "Episode 30",
         searchname: "Term Insurance",
     }, {
         imageUrl: "6HaoOD0f9vo",
         videoUrl: "6HaoOD0f9vo",
         episodeno: "Episode 31",
         searchname: "Home, travel Insurance",
     }, {
         imageUrl: "OeUN0DMDDKA",
         videoUrl: "OeUN0DMDDKA",
         episodeno: "Episode 32",
         searchname: "Commodity Market",
     }, {
         imageUrl: "Qgc1-zs03J4",
         videoUrl: "Qgc1-zs03J4",
         episodeno: "Episode 33",
         searchname: "Precious & Base Metals",
     }, {
         imageUrl: "QbKSL3dbpfw",
         videoUrl: "QbKSL3dbpfw",
         episodeno: "Episode 34",
         searchname: "Investment in Agree Commodities",
     }, {
         imageUrl: "dhDAbtv81DE",
         videoUrl: "dhDAbtv81DE",
         episodeno: "Episode 35",
         searchname: "Commodity Oil & Gas",
     }, {
         imageUrl: "1ubwYZ-kfGM",
         videoUrl: "1ubwYZ-kfGM",
         episodeno: "Episode 36",
         searchname: "Equity",
     }, {
         imageUrl: "Uu4ZcHS87BI",
         videoUrl: "Uu4ZcHS87BI",
         episodeno: "Episode 37",
         searchname: "Open Demat Account",
     }, {
         imageUrl: "1kxH_-hl1Cc",
         videoUrl: "1kxH_-hl1Cc",
         episodeno: "Episode 38",
         searchname: "Trading Account in Stock Exchange",
     }, {
         imageUrl: "zwjQJeoxDOI",
         videoUrl: "zwjQJeoxDOI",
         episodeno: "Episode 39",
         searchname: "Equity investment",
     }, {
         imageUrl: "0MDwbSFGsmQ",
         videoUrl: "0MDwbSFGsmQ",
         episodeno: "Episode 40",
         searchname: "Equity Market & Circuit Filter",
     }, {
         imageUrl: "TdTwc6gHX-c",
         videoUrl: "TdTwc6gHX-c",
         episodeno: "Episode 41",
         searchname: "Equity IPO",
     }, {
         imageUrl: "_0Wf0M5DVjg",
         videoUrl: "_0Wf0M5DVjg",
         episodeno: "Episode 42",
         searchname: "FPO",
     }, {
         imageUrl: "QDC3Zc_VUmg",
         videoUrl: "QDC3Zc_VUmg",
         episodeno: "Episode 43",
         searchname: "Equity & Secondary Market Trading",
     }, {
         imageUrl: "_bXoAl5t1_E",
         videoUrl: "_bXoAl5t1_E",
         episodeno: "Episode 44",
         searchname: "Bonus Divedends",
     }, {
         imageUrl: "hHnCc429ic0",
         videoUrl: "hHnCc429ic0",
         episodeno: "Episode 45",
         searchname: "Investment Descision",
     }, {
         imageUrl: "IzMkQkHF7Zo",
         videoUrl: "IzMkQkHF7Zo",
         episodeno: "Episode 46",
         searchname: "Buying Shares",
     }, {
         imageUrl: "i8tUlIOaL0A",
         videoUrl: "i8tUlIOaL0A",
         episodeno: "Episode 47",
         searchname: "Fundamental Analysis",
     }, {
         imageUrl: "2J2jCdchSTI",
         videoUrl: "2J2jCdchSTI",
         episodeno: "Episode 48",
         searchname: "Techinical Analysis",
     }, {
         imageUrl: "OacVRhckWpc",
         videoUrl: "OacVRhckWpc",
         episodeno: "Episode 49",
         searchname: "Techinical Analysis",
     }, {
         imageUrl: "D55jjilaqTc",
         videoUrl: "D55jjilaqTc",
         episodeno: "Episode 50",
         searchname: "Derivatives, Futures and Options",
     }, {
         imageUrl: "ZMRG8JjIsBY",
         videoUrl: "ZMRG8JjIsBY",
         episodeno: "Episode 51",
         searchname: "Gurukul School",
     }, {
         imageUrl: "DW9ElKEEamE",
         videoUrl: "DW9ElKEEamE",
         episodeno: "Episode 52",
         searchName: "Saketari",
     }, {
         imageUrl: "s14042sqIQM",
         videoUrl: "s14042sqIQM",
         episodeno: "Episode 53",
         searchName: "Bhavanipur College",
     }, {
         imageUrl: "QeOPszD1mak",
         videoUrl: "QeOPszD1mak",
         episodeno: "Episode 54",
         searchName: "Abhinav bharati School",
     }, {
         imageUrl: "W7Gz0bqfaUc",
         videoUrl: "W7Gz0bqfaUc",
         episodeno: "Episode 55",
         searchName: "",
     }, {
         imageUrl: "PUGZ3_6D1pk",
         videoUrl: "PUGZ3_6D1pk",
         episodeno: "Episode 56",
         searchName: "Mahakumbh",
     }, {
         imageUrl: "24fffiDkkVU",
         videoUrl: "24fffiDkkVU",
         episodeno: "Episode 57",
         searchName: "Mahakumbh",
     }, {
         imageUrl: "1s-ZssxHuy4",
         videoUrl: "1s-ZssxHuy4",
         episodeno: "Episode 58",
         searchName: "",
     }, {
         imageUrl: "LjUbBWXyIvU",
         videoUrl: "LjUbBWXyIvU",
         episodeno: "Episode 59",
         searchName: "Young Investors Program ",
     }, {
         imageUrl: "k41uhc9qO3A",
         videoUrl: "k41uhc9qO3A",
         episodeno: "Episode 60",
         searchName: "Young Investors Program",
     }, {
         imageUrl: "PDr3qVnXZ8s",
         videoUrl: "PDr3qVnXZ8s",
         episodeno: "Episode 61",
         searchName: "Financial Planning",
     }, {
         imageUrl: "Ymcoo0QW7hQ",
         videoUrl: "Ymcoo0QW7hQ",
         episodeno: "Episode 62",
         searchName: "On ground Classrooms",
     }, {
         imageUrl: "Yrgr1b3Ad6g",
         videoUrl: "Yrgr1b3Ad6g",
         episodeno: "Episode 63",
         searchName: "On ground Classrooms",
     }, {
         imageUrl: "sfTvseID06E",
         videoUrl: "sfTvseID06E",
         episodeno: "Episode 64",
         searchName: "Young Investors Program",
     }, {
         imageUrl: "IcDQLVZp0rg",
         videoUrl: "IcDQLVZp0rg",
         episodeno: "Episode 65",
         searchName: "Rural Financial Literacy Program",
     }, {
         imageUrl: "_kK9V9CJmVI",
         videoUrl: "_kK9V9CJmVI",
         episodeno: "Episode 66",
         searchName: "Rural Financial Literacy Program",
     }, {
         imageUrl: "DmxsgZI3BJg",
         videoUrl: "DmxsgZI3BJg",
         episodeno: "Episode 67",
         searchName: "Young Investors Program",
     }, {
         imageUrl: "SZtB0Qk_EKw",
         videoUrl: "SZtB0Qk_EKw",
         episodeno: "Episode 68",
         searchName: "Rural Financial Literacy Program",
     }, {
         imageUrl: "lAvQsdNCc_s",
         videoUrl: "lAvQsdNCc_s",
         episodeno: "Episode 69",
         searchName: "Financial Planning",
     }, {
         imageUrl: "Ra9lv36JG-U",
         videoUrl: "Ra9lv36JG-U",
         episodeno: "Episode 70",
         searchName: "Netmagic Solutions",
     }, {
         imageUrl: "qPDXLDK0aBY",
         videoUrl: "qPDXLDK0aBY",
         episodeno: "Episode 71",
         searchName: "On ground Classrooms",
     }, {
         imageUrl: "1DP9_PYWlJE",
         videoUrl: "1DP9_PYWlJE",
         episodeno: "Episode 72",
         searchName: "Rural Financial Literacy Program",
     }, {
         imageUrl: "UO-i7elCWCI",
         videoUrl: "UO-i7elCWCI",
         episodeno: "Episode 73",
         searchName: "Rural Financial Literacy Program",
     }, {
         imageUrl: "FahtReKv-u8",
         videoUrl: "FahtReKv-u8",
         episodeno: "Episode 74",
         searchName: "Young Investors Program",
     }, {
         imageUrl: "jb8Buwo3rco",
         videoUrl: "jb8Buwo3rco",
         episodeno: "Episode 75",
         searchName: "Young Investors Program",
     }, {
         imageUrl: "FGueOhY6HJg",
         videoUrl: "FGueOhY6HJg",
         episodeno: "Episode 76",
         searchName: "Young Investors Program",
     }, {
         imageUrl: "DEEmpminlBU",
         videoUrl: "DEEmpminlBU",
         episodeno: "Episode 77",
         searchName: "On ground Classrooms",
     }, {
         imageUrl: "s3ZwGWcw9xg",
         videoUrl: "s3ZwGWcw9xg",
         episodeno: "Episode 78",
         searchName: "Young Investors Program",
     }, {
         imageUrl: "1y5O7ogDOJ0",
         videoUrl: "1y5O7ogDOJ0",
         episodeno: "Episode 79",
         searchName: "Financial Planning",
     }, {
         imageUrl: "GSIH0jXVSD8",
         videoUrl: "GSIH0jXVSD8",
         episodeno: "Episode 80",
         searchName: "Financial Planning",
     }, {
         imageUrl: "-zWklRlJ_e8",
         videoUrl: "-zWklRlJ_e8",
         episodeno: "Episode 81",
         searchName: "Jabalpur",
     }, {
         imageUrl: "kHQwdznO7tE",
         videoUrl: "kHQwdznO7tE",
         episodeno: "Episode 82",
         searchName: "SEBI",
     }, {
         imageUrl: "aQz0Gsd2oBo",
         videoUrl: "aQz0Gsd2oBo",
         episodeno: "Episode 83",
         searchName: "Online Invesments",
     }, ];

     $scope.more = [];
     $scope.view = [];

     function reset() {
         for (var i = 0; i < $scope.seasonList.length; i++) {
             $scope.more[i]=false;
             $scope.view[i] =true;
         }
     }
    
     $scope.viewMore = function (index) {
         console.log(index)
         $scope.more[index] = true;
         $scope.view[index] = false;
     }
     $scope.viewLess = function (index) {
         $scope.more[index] = false;
         $scope.view[index] = true;
     }
     //end of season1
     $scope.convertUrltoID = function (url) {
         return url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)[1];
     }
     NavigationService.apiCallWithoutData('VideoGallery/findAllVideos', function (data) {
         if (data.value) {
             $scope.seasonList = data.data;
             reset();
             console.log(data.data)
         } else {
             console.log("error in  findallvideos")
         }
     })
 })