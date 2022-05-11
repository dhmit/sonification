// TODO(ra): I hacked in this normalization bc this data is from before
// the tool exported normalized times... so fix this!

const normalizeTime = (coord, allCoords) => {
    return {
        ...coord,
        normalizedT: coord.t - allCoords[0].t,
    };
};

export const GESTURE_WAVE = [
    [
        {
            "x": 20,
            "y": 480.0728759765625,
            "normalizedX": 0.04,
            "normalizedY": 0.960145751953125,
            "t": 1652307198141,
            "normalizedT": 0
        },
        {
            "x": 21,
            "y": 480.0728759765625,
            "normalizedX": 0.042,
            "normalizedY": 0.960145751953125,
            "t": 1652307198220,
            "normalizedT": 79
        },
        {
            "x": 21,
            "y": 480.0728759765625,
            "normalizedX": 0.042,
            "normalizedY": 0.960145751953125,
            "t": 1652307198236,
            "normalizedT": 95
        },
        {
            "x": 22,
            "y": 480.0728759765625,
            "normalizedX": 0.044,
            "normalizedY": 0.960145751953125,
            "t": 1652307198244,
            "normalizedT": 103
        },
        {
            "x": 23,
            "y": 480.0728759765625,
            "normalizedX": 0.046,
            "normalizedY": 0.960145751953125,
            "t": 1652307198252,
            "normalizedT": 111
        },
        {
            "x": 25,
            "y": 479.0728759765625,
            "normalizedX": 0.05,
            "normalizedY": 0.958145751953125,
            "t": 1652307198262,
            "normalizedT": 121
        },
        {
            "x": 27,
            "y": 478.0728759765625,
            "normalizedX": 0.054,
            "normalizedY": 0.956145751953125,
            "t": 1652307198270,
            "normalizedT": 129
        },
        {
            "x": 28,
            "y": 478.0728759765625,
            "normalizedX": 0.056,
            "normalizedY": 0.956145751953125,
            "t": 1652307198278,
            "normalizedT": 137
        },
        {
            "x": 31,
            "y": 476.0728759765625,
            "normalizedX": 0.062,
            "normalizedY": 0.952145751953125,
            "t": 1652307198286,
            "normalizedT": 145
        },
        {
            "x": 33,
            "y": 476.0728759765625,
            "normalizedX": 0.066,
            "normalizedY": 0.952145751953125,
            "t": 1652307198294,
            "normalizedT": 153
        },
        {
            "x": 33,
            "y": 475.0728759765625,
            "normalizedX": 0.066,
            "normalizedY": 0.950145751953125,
            "t": 1652307198302,
            "normalizedT": 161
        },
        {
            "x": 35,
            "y": 474.0728759765625,
            "normalizedX": 0.07,
            "normalizedY": 0.948145751953125,
            "t": 1652307198310,
            "normalizedT": 169
        },
        {
            "x": 37,
            "y": 473.0728759765625,
            "normalizedX": 0.074,
            "normalizedY": 0.946145751953125,
            "t": 1652307198318,
            "normalizedT": 177
        },
        {
            "x": 39,
            "y": 472.0728759765625,
            "normalizedX": 0.078,
            "normalizedY": 0.944145751953125,
            "t": 1652307198326,
            "normalizedT": 185
        },
        {
            "x": 41,
            "y": 470.0728759765625,
            "normalizedX": 0.082,
            "normalizedY": 0.940145751953125,
            "t": 1652307198334,
            "normalizedT": 193
        },
        {
            "x": 43,
            "y": 470.0728759765625,
            "normalizedX": 0.086,
            "normalizedY": 0.940145751953125,
            "t": 1652307198342,
            "normalizedT": 201
        },
        {
            "x": 44,
            "y": 469.0728759765625,
            "normalizedX": 0.088,
            "normalizedY": 0.938145751953125,
            "t": 1652307198350,
            "normalizedT": 209
        },
        {
            "x": 46,
            "y": 468.0728759765625,
            "normalizedX": 0.092,
            "normalizedY": 0.936145751953125,
            "t": 1652307198358,
            "normalizedT": 217
        },
        {
            "x": 48,
            "y": 466.0728759765625,
            "normalizedX": 0.096,
            "normalizedY": 0.932145751953125,
            "t": 1652307198366,
            "normalizedT": 225
        },
        {
            "x": 49,
            "y": 466.0728759765625,
            "normalizedX": 0.098,
            "normalizedY": 0.932145751953125,
            "t": 1652307198374,
            "normalizedT": 233
        },
        {
            "x": 53,
            "y": 464.0728759765625,
            "normalizedX": 0.106,
            "normalizedY": 0.928145751953125,
            "t": 1652307198382,
            "normalizedT": 241
        },
        {
            "x": 56,
            "y": 462.0728759765625,
            "normalizedX": 0.112,
            "normalizedY": 0.924145751953125,
            "t": 1652307198390,
            "normalizedT": 249
        },
        {
            "x": 57,
            "y": 462.0728759765625,
            "normalizedX": 0.114,
            "normalizedY": 0.924145751953125,
            "t": 1652307198398,
            "normalizedT": 257
        },
        {
            "x": 61,
            "y": 459.0728759765625,
            "normalizedX": 0.122,
            "normalizedY": 0.918145751953125,
            "t": 1652307198406,
            "normalizedT": 265
        },
        {
            "x": 62,
            "y": 458.0728759765625,
            "normalizedX": 0.124,
            "normalizedY": 0.916145751953125,
            "t": 1652307198414,
            "normalizedT": 273
        },
        {
            "x": 65,
            "y": 457.0728759765625,
            "normalizedX": 0.13,
            "normalizedY": 0.914145751953125,
            "t": 1652307198422,
            "normalizedT": 281
        },
        {
            "x": 67,
            "y": 456.0728759765625,
            "normalizedX": 0.134,
            "normalizedY": 0.912145751953125,
            "t": 1652307198430,
            "normalizedT": 289
        },
        {
            "x": 70,
            "y": 454.0728759765625,
            "normalizedX": 0.14,
            "normalizedY": 0.908145751953125,
            "t": 1652307198438,
            "normalizedT": 297
        },
        {
            "x": 71,
            "y": 453.0728759765625,
            "normalizedX": 0.142,
            "normalizedY": 0.906145751953125,
            "t": 1652307198446,
            "normalizedT": 305
        },
        {
            "x": 73,
            "y": 452.0728759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.904145751953125,
            "t": 1652307198454,
            "normalizedT": 313
        },
        {
            "x": 75,
            "y": 450.0728759765625,
            "normalizedX": 0.15,
            "normalizedY": 0.900145751953125,
            "t": 1652307198462,
            "normalizedT": 321
        },
        {
            "x": 77,
            "y": 449.0728759765625,
            "normalizedX": 0.154,
            "normalizedY": 0.898145751953125,
            "t": 1652307198470,
            "normalizedT": 329
        },
        {
            "x": 79,
            "y": 448.0728759765625,
            "normalizedX": 0.158,
            "normalizedY": 0.896145751953125,
            "t": 1652307198478,
            "normalizedT": 337
        },
        {
            "x": 82,
            "y": 445.0728759765625,
            "normalizedX": 0.164,
            "normalizedY": 0.890145751953125,
            "t": 1652307198486,
            "normalizedT": 345
        },
        {
            "x": 83,
            "y": 444.0728759765625,
            "normalizedX": 0.166,
            "normalizedY": 0.888145751953125,
            "t": 1652307198494,
            "normalizedT": 353
        },
        {
            "x": 85,
            "y": 442.0728759765625,
            "normalizedX": 0.17,
            "normalizedY": 0.884145751953125,
            "t": 1652307198502,
            "normalizedT": 361
        },
        {
            "x": 89,
            "y": 438.0728759765625,
            "normalizedX": 0.178,
            "normalizedY": 0.876145751953125,
            "t": 1652307198510,
            "normalizedT": 369
        },
        {
            "x": 91,
            "y": 436.0728759765625,
            "normalizedX": 0.182,
            "normalizedY": 0.872145751953125,
            "t": 1652307198518,
            "normalizedT": 377
        },
        {
            "x": 93,
            "y": 435.0728759765625,
            "normalizedX": 0.186,
            "normalizedY": 0.870145751953125,
            "t": 1652307198526,
            "normalizedT": 385
        },
        {
            "x": 97,
            "y": 430.0728759765625,
            "normalizedX": 0.194,
            "normalizedY": 0.860145751953125,
            "t": 1652307198534,
            "normalizedT": 393
        },
        {
            "x": 99,
            "y": 429.0728759765625,
            "normalizedX": 0.198,
            "normalizedY": 0.858145751953125,
            "t": 1652307198542,
            "normalizedT": 401
        },
        {
            "x": 99,
            "y": 428.0728759765625,
            "normalizedX": 0.198,
            "normalizedY": 0.856145751953125,
            "t": 1652307198550,
            "normalizedT": 409
        },
        {
            "x": 103,
            "y": 424.0728759765625,
            "normalizedX": 0.206,
            "normalizedY": 0.848145751953125,
            "t": 1652307198560,
            "normalizedT": 419
        },
        {
            "x": 104,
            "y": 422.0728759765625,
            "normalizedX": 0.208,
            "normalizedY": 0.844145751953125,
            "t": 1652307198568,
            "normalizedT": 427
        },
        {
            "x": 105,
            "y": 420.0728759765625,
            "normalizedX": 0.21,
            "normalizedY": 0.840145751953125,
            "t": 1652307198576,
            "normalizedT": 435
        },
        {
            "x": 108,
            "y": 416.0728759765625,
            "normalizedX": 0.216,
            "normalizedY": 0.832145751953125,
            "t": 1652307198584,
            "normalizedT": 443
        },
        {
            "x": 111,
            "y": 414.0728759765625,
            "normalizedX": 0.222,
            "normalizedY": 0.828145751953125,
            "t": 1652307198592,
            "normalizedT": 451
        },
        {
            "x": 112,
            "y": 412.0728759765625,
            "normalizedX": 0.224,
            "normalizedY": 0.824145751953125,
            "t": 1652307198600,
            "normalizedT": 459
        },
        {
            "x": 113,
            "y": 409.0728759765625,
            "normalizedX": 0.226,
            "normalizedY": 0.818145751953125,
            "t": 1652307198608,
            "normalizedT": 467
        },
        {
            "x": 118,
            "y": 403.0728759765625,
            "normalizedX": 0.236,
            "normalizedY": 0.806145751953125,
            "t": 1652307198616,
            "normalizedT": 475
        },
        {
            "x": 119,
            "y": 400.0728759765625,
            "normalizedX": 0.238,
            "normalizedY": 0.800145751953125,
            "t": 1652307198624,
            "normalizedT": 483
        },
        {
            "x": 122,
            "y": 398.0728759765625,
            "normalizedX": 0.244,
            "normalizedY": 0.796145751953125,
            "t": 1652307198632,
            "normalizedT": 491
        },
        {
            "x": 123,
            "y": 395.0728759765625,
            "normalizedX": 0.246,
            "normalizedY": 0.790145751953125,
            "t": 1652307198640,
            "normalizedT": 499
        },
        {
            "x": 126,
            "y": 392.0728759765625,
            "normalizedX": 0.252,
            "normalizedY": 0.784145751953125,
            "t": 1652307198648,
            "normalizedT": 507
        },
        {
            "x": 130,
            "y": 386.0728759765625,
            "normalizedX": 0.26,
            "normalizedY": 0.772145751953125,
            "t": 1652307198656,
            "normalizedT": 515
        },
        {
            "x": 131,
            "y": 384.0728759765625,
            "normalizedX": 0.262,
            "normalizedY": 0.768145751953125,
            "t": 1652307198664,
            "normalizedT": 523
        },
        {
            "x": 132,
            "y": 382.0728759765625,
            "normalizedX": 0.264,
            "normalizedY": 0.764145751953125,
            "t": 1652307198672,
            "normalizedT": 531
        },
        {
            "x": 133,
            "y": 380.0728759765625,
            "normalizedX": 0.266,
            "normalizedY": 0.760145751953125,
            "t": 1652307198680,
            "normalizedT": 539
        },
        {
            "x": 135,
            "y": 379.0728759765625,
            "normalizedX": 0.27,
            "normalizedY": 0.758145751953125,
            "t": 1652307198688,
            "normalizedT": 547
        },
        {
            "x": 135,
            "y": 377.0728759765625,
            "normalizedX": 0.27,
            "normalizedY": 0.754145751953125,
            "t": 1652307198696,
            "normalizedT": 555
        },
        {
            "x": 136,
            "y": 376.0728759765625,
            "normalizedX": 0.272,
            "normalizedY": 0.752145751953125,
            "t": 1652307198704,
            "normalizedT": 563
        },
        {
            "x": 139,
            "y": 369.0728759765625,
            "normalizedX": 0.278,
            "normalizedY": 0.738145751953125,
            "t": 1652307198712,
            "normalizedT": 571
        },
        {
            "x": 140,
            "y": 366.0728759765625,
            "normalizedX": 0.28,
            "normalizedY": 0.732145751953125,
            "t": 1652307198720,
            "normalizedT": 579
        },
        {
            "x": 142,
            "y": 364.0728759765625,
            "normalizedX": 0.284,
            "normalizedY": 0.728145751953125,
            "t": 1652307198728,
            "normalizedT": 587
        },
        {
            "x": 143,
            "y": 360.0728759765625,
            "normalizedX": 0.286,
            "normalizedY": 0.720145751953125,
            "t": 1652307198736,
            "normalizedT": 595
        },
        {
            "x": 144,
            "y": 357.0728759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.714145751953125,
            "t": 1652307198744,
            "normalizedT": 603
        },
        {
            "x": 146,
            "y": 354.0728759765625,
            "normalizedX": 0.292,
            "normalizedY": 0.708145751953125,
            "t": 1652307198752,
            "normalizedT": 611
        },
        {
            "x": 147,
            "y": 350.0728759765625,
            "normalizedX": 0.294,
            "normalizedY": 0.700145751953125,
            "t": 1652307198760,
            "normalizedT": 619
        },
        {
            "x": 149,
            "y": 346.0728759765625,
            "normalizedX": 0.298,
            "normalizedY": 0.692145751953125,
            "t": 1652307198768,
            "normalizedT": 627
        },
        {
            "x": 151,
            "y": 342.0728759765625,
            "normalizedX": 0.302,
            "normalizedY": 0.684145751953125,
            "t": 1652307198776,
            "normalizedT": 635
        },
        {
            "x": 155,
            "y": 330.0728759765625,
            "normalizedX": 0.31,
            "normalizedY": 0.660145751953125,
            "t": 1652307198784,
            "normalizedT": 643
        },
        {
            "x": 157,
            "y": 327.0728759765625,
            "normalizedX": 0.314,
            "normalizedY": 0.654145751953125,
            "t": 1652307198792,
            "normalizedT": 651
        },
        {
            "x": 159,
            "y": 323.0728759765625,
            "normalizedX": 0.318,
            "normalizedY": 0.646145751953125,
            "t": 1652307198800,
            "normalizedT": 659
        },
        {
            "x": 161,
            "y": 319.0728759765625,
            "normalizedX": 0.322,
            "normalizedY": 0.638145751953125,
            "t": 1652307198809,
            "normalizedT": 668
        },
        {
            "x": 163,
            "y": 315.0728759765625,
            "normalizedX": 0.326,
            "normalizedY": 0.630145751953125,
            "t": 1652307198816,
            "normalizedT": 675
        },
        {
            "x": 165,
            "y": 310.0728759765625,
            "normalizedX": 0.33,
            "normalizedY": 0.620145751953125,
            "t": 1652307198824,
            "normalizedT": 683
        },
        {
            "x": 168,
            "y": 304.0728759765625,
            "normalizedX": 0.336,
            "normalizedY": 0.608145751953125,
            "t": 1652307198832,
            "normalizedT": 691
        },
        {
            "x": 170,
            "y": 300.0728759765625,
            "normalizedX": 0.34,
            "normalizedY": 0.600145751953125,
            "t": 1652307198840,
            "normalizedT": 699
        },
        {
            "x": 172,
            "y": 295.0728759765625,
            "normalizedX": 0.344,
            "normalizedY": 0.590145751953125,
            "t": 1652307198850,
            "normalizedT": 709
        },
        {
            "x": 175,
            "y": 290.0728759765625,
            "normalizedX": 0.35,
            "normalizedY": 0.580145751953125,
            "t": 1652307198858,
            "normalizedT": 717
        },
        {
            "x": 176,
            "y": 286.0728759765625,
            "normalizedX": 0.352,
            "normalizedY": 0.572145751953125,
            "t": 1652307198866,
            "normalizedT": 725
        },
        {
            "x": 177,
            "y": 282.0728759765625,
            "normalizedX": 0.354,
            "normalizedY": 0.564145751953125,
            "t": 1652307198874,
            "normalizedT": 733
        },
        {
            "x": 179,
            "y": 277.0728759765625,
            "normalizedX": 0.358,
            "normalizedY": 0.554145751953125,
            "t": 1652307198882,
            "normalizedT": 741
        },
        {
            "x": 181,
            "y": 272.0728759765625,
            "normalizedX": 0.362,
            "normalizedY": 0.544145751953125,
            "t": 1652307198890,
            "normalizedT": 749
        },
        {
            "x": 183,
            "y": 268.0728759765625,
            "normalizedX": 0.366,
            "normalizedY": 0.536145751953125,
            "t": 1652307198898,
            "normalizedT": 757
        },
        {
            "x": 183,
            "y": 264.0728759765625,
            "normalizedX": 0.366,
            "normalizedY": 0.528145751953125,
            "t": 1652307198906,
            "normalizedT": 765
        },
        {
            "x": 184,
            "y": 261.0728759765625,
            "normalizedX": 0.368,
            "normalizedY": 0.522145751953125,
            "t": 1652307198914,
            "normalizedT": 773
        },
        {
            "x": 185,
            "y": 258.0728759765625,
            "normalizedX": 0.37,
            "normalizedY": 0.516145751953125,
            "t": 1652307198922,
            "normalizedT": 781
        },
        {
            "x": 186,
            "y": 253.0728759765625,
            "normalizedX": 0.372,
            "normalizedY": 0.506145751953125,
            "t": 1652307198930,
            "normalizedT": 789
        },
        {
            "x": 187,
            "y": 250.0728759765625,
            "normalizedX": 0.374,
            "normalizedY": 0.500145751953125,
            "t": 1652307198938,
            "normalizedT": 797
        },
        {
            "x": 189,
            "y": 246.0728759765625,
            "normalizedX": 0.378,
            "normalizedY": 0.492145751953125,
            "t": 1652307198946,
            "normalizedT": 805
        },
        {
            "x": 189,
            "y": 241.0728759765625,
            "normalizedX": 0.378,
            "normalizedY": 0.482145751953125,
            "t": 1652307198954,
            "normalizedT": 813
        },
        {
            "x": 191,
            "y": 237.0728759765625,
            "normalizedX": 0.382,
            "normalizedY": 0.474145751953125,
            "t": 1652307198962,
            "normalizedT": 821
        },
        {
            "x": 192,
            "y": 231.0728759765625,
            "normalizedX": 0.384,
            "normalizedY": 0.462145751953125,
            "t": 1652307198970,
            "normalizedT": 829
        },
        {
            "x": 193,
            "y": 227.0728759765625,
            "normalizedX": 0.386,
            "normalizedY": 0.454145751953125,
            "t": 1652307198978,
            "normalizedT": 837
        },
        {
            "x": 194,
            "y": 222.0728759765625,
            "normalizedX": 0.388,
            "normalizedY": 0.444145751953125,
            "t": 1652307198986,
            "normalizedT": 845
        },
        {
            "x": 195,
            "y": 220.0728759765625,
            "normalizedX": 0.39,
            "normalizedY": 0.440145751953125,
            "t": 1652307198994,
            "normalizedT": 853
        },
        {
            "x": 195,
            "y": 215.0728759765625,
            "normalizedX": 0.39,
            "normalizedY": 0.430145751953125,
            "t": 1652307199003,
            "normalizedT": 862
        },
        {
            "x": 196,
            "y": 212.0728759765625,
            "normalizedX": 0.392,
            "normalizedY": 0.424145751953125,
            "t": 1652307199011,
            "normalizedT": 870
        },
        {
            "x": 197,
            "y": 210.0728759765625,
            "normalizedX": 0.394,
            "normalizedY": 0.420145751953125,
            "t": 1652307199018,
            "normalizedT": 877
        },
        {
            "x": 198,
            "y": 206.0728759765625,
            "normalizedX": 0.396,
            "normalizedY": 0.412145751953125,
            "t": 1652307199026,
            "normalizedT": 885
        },
        {
            "x": 199,
            "y": 202.0728759765625,
            "normalizedX": 0.398,
            "normalizedY": 0.404145751953125,
            "t": 1652307199034,
            "normalizedT": 893
        },
        {
            "x": 199,
            "y": 198.0728759765625,
            "normalizedX": 0.398,
            "normalizedY": 0.396145751953125,
            "t": 1652307199042,
            "normalizedT": 901
        },
        {
            "x": 200,
            "y": 194.0728759765625,
            "normalizedX": 0.4,
            "normalizedY": 0.388145751953125,
            "t": 1652307199050,
            "normalizedT": 909
        },
        {
            "x": 201,
            "y": 190.0728759765625,
            "normalizedX": 0.402,
            "normalizedY": 0.380145751953125,
            "t": 1652307199058,
            "normalizedT": 917
        },
        {
            "x": 202,
            "y": 185.0728759765625,
            "normalizedX": 0.404,
            "normalizedY": 0.370145751953125,
            "t": 1652307199074,
            "normalizedT": 933
        },
        {
            "x": 203,
            "y": 182.0728759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.364145751953125,
            "t": 1652307199082,
            "normalizedT": 941
        },
        {
            "x": 203,
            "y": 176.0728759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.352145751953125,
            "t": 1652307199090,
            "normalizedT": 949
        },
        {
            "x": 205,
            "y": 172.0728759765625,
            "normalizedX": 0.41,
            "normalizedY": 0.344145751953125,
            "t": 1652307199098,
            "normalizedT": 957
        },
        {
            "x": 207,
            "y": 168.0728759765625,
            "normalizedX": 0.414,
            "normalizedY": 0.336145751953125,
            "t": 1652307199106,
            "normalizedT": 965
        },
        {
            "x": 209,
            "y": 158.0728759765625,
            "normalizedX": 0.418,
            "normalizedY": 0.316145751953125,
            "t": 1652307199114,
            "normalizedT": 973
        },
        {
            "x": 210,
            "y": 154.0728759765625,
            "normalizedX": 0.42,
            "normalizedY": 0.308145751953125,
            "t": 1652307199122,
            "normalizedT": 981
        },
        {
            "x": 212,
            "y": 146.0728759765625,
            "normalizedX": 0.424,
            "normalizedY": 0.292145751953125,
            "t": 1652307199130,
            "normalizedT": 989
        },
        {
            "x": 213,
            "y": 144.0728759765625,
            "normalizedX": 0.426,
            "normalizedY": 0.288145751953125,
            "t": 1652307199140,
            "normalizedT": 999
        },
        {
            "x": 215,
            "y": 138.0728759765625,
            "normalizedX": 0.43,
            "normalizedY": 0.276145751953125,
            "t": 1652307199148,
            "normalizedT": 1007
        },
        {
            "x": 215,
            "y": 136.0728759765625,
            "normalizedX": 0.43,
            "normalizedY": 0.272145751953125,
            "t": 1652307199156,
            "normalizedT": 1015
        },
        {
            "x": 216,
            "y": 134.0728759765625,
            "normalizedX": 0.432,
            "normalizedY": 0.268145751953125,
            "t": 1652307199164,
            "normalizedT": 1023
        },
        {
            "x": 218,
            "y": 128.0728759765625,
            "normalizedX": 0.436,
            "normalizedY": 0.256145751953125,
            "t": 1652307199172,
            "normalizedT": 1031
        },
        {
            "x": 218,
            "y": 127.0728759765625,
            "normalizedX": 0.436,
            "normalizedY": 0.254145751953125,
            "t": 1652307199180,
            "normalizedT": 1039
        },
        {
            "x": 219,
            "y": 125.0728759765625,
            "normalizedX": 0.438,
            "normalizedY": 0.250145751953125,
            "t": 1652307199188,
            "normalizedT": 1047
        },
        {
            "x": 221,
            "y": 120.0728759765625,
            "normalizedX": 0.442,
            "normalizedY": 0.240145751953125,
            "t": 1652307199196,
            "normalizedT": 1055
        },
        {
            "x": 222,
            "y": 118.0728759765625,
            "normalizedX": 0.444,
            "normalizedY": 0.236145751953125,
            "t": 1652307199204,
            "normalizedT": 1063
        },
        {
            "x": 223,
            "y": 115.0728759765625,
            "normalizedX": 0.446,
            "normalizedY": 0.230145751953125,
            "t": 1652307199212,
            "normalizedT": 1071
        },
        {
            "x": 223,
            "y": 113.0728759765625,
            "normalizedX": 0.446,
            "normalizedY": 0.226145751953125,
            "t": 1652307199220,
            "normalizedT": 1079
        },
        {
            "x": 226,
            "y": 108.0728759765625,
            "normalizedX": 0.452,
            "normalizedY": 0.216145751953125,
            "t": 1652307199228,
            "normalizedT": 1087
        },
        {
            "x": 227,
            "y": 106.0728759765625,
            "normalizedX": 0.454,
            "normalizedY": 0.212145751953125,
            "t": 1652307199236,
            "normalizedT": 1095
        },
        {
            "x": 228,
            "y": 103.0728759765625,
            "normalizedX": 0.456,
            "normalizedY": 0.206145751953125,
            "t": 1652307199244,
            "normalizedT": 1103
        },
        {
            "x": 229,
            "y": 101.0728759765625,
            "normalizedX": 0.458,
            "normalizedY": 0.202145751953125,
            "t": 1652307199252,
            "normalizedT": 1111
        },
        {
            "x": 232,
            "y": 96.0728759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.192145751953125,
            "t": 1652307199260,
            "normalizedT": 1119
        },
        {
            "x": 233,
            "y": 94.0728759765625,
            "normalizedX": 0.466,
            "normalizedY": 0.188145751953125,
            "t": 1652307199268,
            "normalizedT": 1127
        },
        {
            "x": 235,
            "y": 92.0728759765625,
            "normalizedX": 0.47,
            "normalizedY": 0.184145751953125,
            "t": 1652307199276,
            "normalizedT": 1135
        },
        {
            "x": 235,
            "y": 90.0728759765625,
            "normalizedX": 0.47,
            "normalizedY": 0.180145751953125,
            "t": 1652307199284,
            "normalizedT": 1143
        },
        {
            "x": 237,
            "y": 88.0728759765625,
            "normalizedX": 0.474,
            "normalizedY": 0.176145751953125,
            "t": 1652307199292,
            "normalizedT": 1151
        },
        {
            "x": 241,
            "y": 82.0728759765625,
            "normalizedX": 0.482,
            "normalizedY": 0.164145751953125,
            "t": 1652307199300,
            "normalizedT": 1159
        },
        {
            "x": 242,
            "y": 80.0728759765625,
            "normalizedX": 0.484,
            "normalizedY": 0.160145751953125,
            "t": 1652307199309,
            "normalizedT": 1168
        },
        {
            "x": 244,
            "y": 78.0728759765625,
            "normalizedX": 0.488,
            "normalizedY": 0.156145751953125,
            "t": 1652307199316,
            "normalizedT": 1175
        },
        {
            "x": 245,
            "y": 76.0728759765625,
            "normalizedX": 0.49,
            "normalizedY": 0.152145751953125,
            "t": 1652307199324,
            "normalizedT": 1183
        },
        {
            "x": 247,
            "y": 75.0728759765625,
            "normalizedX": 0.494,
            "normalizedY": 0.150145751953125,
            "t": 1652307199332,
            "normalizedT": 1191
        },
        {
            "x": 247,
            "y": 74.0728759765625,
            "normalizedX": 0.494,
            "normalizedY": 0.148145751953125,
            "t": 1652307199340,
            "normalizedT": 1199
        },
        {
            "x": 249,
            "y": 72.0728759765625,
            "normalizedX": 0.498,
            "normalizedY": 0.144145751953125,
            "t": 1652307199348,
            "normalizedT": 1207
        },
        {
            "x": 251,
            "y": 70.0728759765625,
            "normalizedX": 0.502,
            "normalizedY": 0.140145751953125,
            "t": 1652307199356,
            "normalizedT": 1215
        },
        {
            "x": 253,
            "y": 68.0728759765625,
            "normalizedX": 0.506,
            "normalizedY": 0.136145751953125,
            "t": 1652307199364,
            "normalizedT": 1223
        },
        {
            "x": 257,
            "y": 65.0728759765625,
            "normalizedX": 0.514,
            "normalizedY": 0.130145751953125,
            "t": 1652307199372,
            "normalizedT": 1231
        },
        {
            "x": 257,
            "y": 64.0728759765625,
            "normalizedX": 0.514,
            "normalizedY": 0.128145751953125,
            "t": 1652307199380,
            "normalizedT": 1239
        },
        {
            "x": 260,
            "y": 62.0728759765625,
            "normalizedX": 0.52,
            "normalizedY": 0.124145751953125,
            "t": 1652307199388,
            "normalizedT": 1247
        },
        {
            "x": 262,
            "y": 60.0728759765625,
            "normalizedX": 0.524,
            "normalizedY": 0.120145751953125,
            "t": 1652307199396,
            "normalizedT": 1255
        },
        {
            "x": 265,
            "y": 59.0728759765625,
            "normalizedX": 0.53,
            "normalizedY": 0.118145751953125,
            "t": 1652307199406,
            "normalizedT": 1265
        },
        {
            "x": 265,
            "y": 58.0728759765625,
            "normalizedX": 0.53,
            "normalizedY": 0.116145751953125,
            "t": 1652307199414,
            "normalizedT": 1273
        },
        {
            "x": 267,
            "y": 58.0728759765625,
            "normalizedX": 0.534,
            "normalizedY": 0.116145751953125,
            "t": 1652307199422,
            "normalizedT": 1281
        },
        {
            "x": 269,
            "y": 57.0728759765625,
            "normalizedX": 0.538,
            "normalizedY": 0.114145751953125,
            "t": 1652307199430,
            "normalizedT": 1289
        },
        {
            "x": 271,
            "y": 56.0728759765625,
            "normalizedX": 0.542,
            "normalizedY": 0.112145751953125,
            "t": 1652307199438,
            "normalizedT": 1297
        },
        {
            "x": 275,
            "y": 55.0728759765625,
            "normalizedX": 0.55,
            "normalizedY": 0.110145751953125,
            "t": 1652307199446,
            "normalizedT": 1305
        },
        {
            "x": 276,
            "y": 54.0728759765625,
            "normalizedX": 0.552,
            "normalizedY": 0.108145751953125,
            "t": 1652307199454,
            "normalizedT": 1313
        },
        {
            "x": 281,
            "y": 52.0728759765625,
            "normalizedX": 0.562,
            "normalizedY": 0.104145751953125,
            "t": 1652307199462,
            "normalizedT": 1321
        },
        {
            "x": 283,
            "y": 52.0728759765625,
            "normalizedX": 0.566,
            "normalizedY": 0.104145751953125,
            "t": 1652307199470,
            "normalizedT": 1329
        },
        {
            "x": 288,
            "y": 50.0728759765625,
            "normalizedX": 0.576,
            "normalizedY": 0.100145751953125,
            "t": 1652307199478,
            "normalizedT": 1337
        },
        {
            "x": 290,
            "y": 49.0728759765625,
            "normalizedX": 0.58,
            "normalizedY": 0.098145751953125,
            "t": 1652307199486,
            "normalizedT": 1345
        },
        {
            "x": 294,
            "y": 48.0728759765625,
            "normalizedX": 0.588,
            "normalizedY": 0.096145751953125,
            "t": 1652307199494,
            "normalizedT": 1353
        },
        {
            "x": 297,
            "y": 48.0728759765625,
            "normalizedX": 0.594,
            "normalizedY": 0.096145751953125,
            "t": 1652307199502,
            "normalizedT": 1361
        },
        {
            "x": 301,
            "y": 48.0728759765625,
            "normalizedX": 0.602,
            "normalizedY": 0.096145751953125,
            "t": 1652307199510,
            "normalizedT": 1369
        },
        {
            "x": 303,
            "y": 48.0728759765625,
            "normalizedX": 0.606,
            "normalizedY": 0.096145751953125,
            "t": 1652307199518,
            "normalizedT": 1377
        },
        {
            "x": 305,
            "y": 48.0728759765625,
            "normalizedX": 0.61,
            "normalizedY": 0.096145751953125,
            "t": 1652307199526,
            "normalizedT": 1385
        },
        {
            "x": 310,
            "y": 48.0728759765625,
            "normalizedX": 0.62,
            "normalizedY": 0.096145751953125,
            "t": 1652307199534,
            "normalizedT": 1393
        },
        {
            "x": 312,
            "y": 48.0728759765625,
            "normalizedX": 0.624,
            "normalizedY": 0.096145751953125,
            "t": 1652307199542,
            "normalizedT": 1401
        },
        {
            "x": 317,
            "y": 48.0728759765625,
            "normalizedX": 0.634,
            "normalizedY": 0.096145751953125,
            "t": 1652307199550,
            "normalizedT": 1409
        },
        {
            "x": 319,
            "y": 48.0728759765625,
            "normalizedX": 0.638,
            "normalizedY": 0.096145751953125,
            "t": 1652307199558,
            "normalizedT": 1417
        },
        {
            "x": 321,
            "y": 48.0728759765625,
            "normalizedX": 0.642,
            "normalizedY": 0.096145751953125,
            "t": 1652307199566,
            "normalizedT": 1425
        },
        {
            "x": 326,
            "y": 49.0728759765625,
            "normalizedX": 0.652,
            "normalizedY": 0.098145751953125,
            "t": 1652307199574,
            "normalizedT": 1433
        },
        {
            "x": 328,
            "y": 50.0728759765625,
            "normalizedX": 0.656,
            "normalizedY": 0.100145751953125,
            "t": 1652307199582,
            "normalizedT": 1441
        },
        {
            "x": 330,
            "y": 51.0728759765625,
            "normalizedX": 0.66,
            "normalizedY": 0.102145751953125,
            "t": 1652307199590,
            "normalizedT": 1449
        },
        {
            "x": 335,
            "y": 52.0728759765625,
            "normalizedX": 0.67,
            "normalizedY": 0.104145751953125,
            "t": 1652307199598,
            "normalizedT": 1457
        },
        {
            "x": 337,
            "y": 53.0728759765625,
            "normalizedX": 0.674,
            "normalizedY": 0.106145751953125,
            "t": 1652307199606,
            "normalizedT": 1465
        },
        {
            "x": 339,
            "y": 54.0728759765625,
            "normalizedX": 0.678,
            "normalizedY": 0.108145751953125,
            "t": 1652307199614,
            "normalizedT": 1473
        },
        {
            "x": 341,
            "y": 54.0728759765625,
            "normalizedX": 0.682,
            "normalizedY": 0.108145751953125,
            "t": 1652307199622,
            "normalizedT": 1481
        },
        {
            "x": 345,
            "y": 57.0728759765625,
            "normalizedX": 0.69,
            "normalizedY": 0.114145751953125,
            "t": 1652307199630,
            "normalizedT": 1489
        },
        {
            "x": 346,
            "y": 58.0728759765625,
            "normalizedX": 0.692,
            "normalizedY": 0.116145751953125,
            "t": 1652307199638,
            "normalizedT": 1497
        },
        {
            "x": 349,
            "y": 60.0728759765625,
            "normalizedX": 0.698,
            "normalizedY": 0.120145751953125,
            "t": 1652307199646,
            "normalizedT": 1505
        },
        {
            "x": 350,
            "y": 61.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.122145751953125,
            "t": 1652307199654,
            "normalizedT": 1513
        },
        {
            "x": 353,
            "y": 64.0728759765625,
            "normalizedX": 0.706,
            "normalizedY": 0.128145751953125,
            "t": 1652307199662,
            "normalizedT": 1521
        },
        {
            "x": 355,
            "y": 66.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.132145751953125,
            "t": 1652307199670,
            "normalizedT": 1529
        },
        {
            "x": 357,
            "y": 68.0728759765625,
            "normalizedX": 0.714,
            "normalizedY": 0.136145751953125,
            "t": 1652307199678,
            "normalizedT": 1537
        },
        {
            "x": 358,
            "y": 70.0728759765625,
            "normalizedX": 0.716,
            "normalizedY": 0.140145751953125,
            "t": 1652307199686,
            "normalizedT": 1545
        },
        {
            "x": 360,
            "y": 72.0728759765625,
            "normalizedX": 0.72,
            "normalizedY": 0.144145751953125,
            "t": 1652307199694,
            "normalizedT": 1553
        },
        {
            "x": 364,
            "y": 75.0728759765625,
            "normalizedX": 0.728,
            "normalizedY": 0.150145751953125,
            "t": 1652307199704,
            "normalizedT": 1563
        },
        {
            "x": 365,
            "y": 77.0728759765625,
            "normalizedX": 0.73,
            "normalizedY": 0.154145751953125,
            "t": 1652307199712,
            "normalizedT": 1571
        },
        {
            "x": 367,
            "y": 79.0728759765625,
            "normalizedX": 0.734,
            "normalizedY": 0.158145751953125,
            "t": 1652307199720,
            "normalizedT": 1579
        },
        {
            "x": 368,
            "y": 80.0728759765625,
            "normalizedX": 0.736,
            "normalizedY": 0.160145751953125,
            "t": 1652307199728,
            "normalizedT": 1587
        },
        {
            "x": 369,
            "y": 82.0728759765625,
            "normalizedX": 0.738,
            "normalizedY": 0.164145751953125,
            "t": 1652307199736,
            "normalizedT": 1595
        },
        {
            "x": 370,
            "y": 83.0728759765625,
            "normalizedX": 0.74,
            "normalizedY": 0.166145751953125,
            "t": 1652307199744,
            "normalizedT": 1603
        },
        {
            "x": 371,
            "y": 86.0728759765625,
            "normalizedX": 0.742,
            "normalizedY": 0.172145751953125,
            "t": 1652307199752,
            "normalizedT": 1611
        },
        {
            "x": 372,
            "y": 88.0728759765625,
            "normalizedX": 0.744,
            "normalizedY": 0.176145751953125,
            "t": 1652307199760,
            "normalizedT": 1619
        },
        {
            "x": 373,
            "y": 90.0728759765625,
            "normalizedX": 0.746,
            "normalizedY": 0.180145751953125,
            "t": 1652307199768,
            "normalizedT": 1627
        },
        {
            "x": 373,
            "y": 92.0728759765625,
            "normalizedX": 0.746,
            "normalizedY": 0.184145751953125,
            "t": 1652307199776,
            "normalizedT": 1635
        },
        {
            "x": 375,
            "y": 96.0728759765625,
            "normalizedX": 0.75,
            "normalizedY": 0.192145751953125,
            "t": 1652307199784,
            "normalizedT": 1643
        },
        {
            "x": 375,
            "y": 98.0728759765625,
            "normalizedX": 0.75,
            "normalizedY": 0.196145751953125,
            "t": 1652307199792,
            "normalizedT": 1651
        },
        {
            "x": 375,
            "y": 102.0728759765625,
            "normalizedX": 0.75,
            "normalizedY": 0.204145751953125,
            "t": 1652307199800,
            "normalizedT": 1659
        },
        {
            "x": 376,
            "y": 104.0728759765625,
            "normalizedX": 0.752,
            "normalizedY": 0.208145751953125,
            "t": 1652307199808,
            "normalizedT": 1667
        },
        {
            "x": 377,
            "y": 110.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.220145751953125,
            "t": 1652307199816,
            "normalizedT": 1675
        },
        {
            "x": 377,
            "y": 112.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.224145751953125,
            "t": 1652307199824,
            "normalizedT": 1683
        },
        {
            "x": 377,
            "y": 117.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.234145751953125,
            "t": 1652307199832,
            "normalizedT": 1691
        },
        {
            "x": 377,
            "y": 119.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.238145751953125,
            "t": 1652307199840,
            "normalizedT": 1699
        },
        {
            "x": 377,
            "y": 125.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.250145751953125,
            "t": 1652307199848,
            "normalizedT": 1707
        },
        {
            "x": 377,
            "y": 127.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.254145751953125,
            "t": 1652307199856,
            "normalizedT": 1715
        },
        {
            "x": 377,
            "y": 130.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.260145751953125,
            "t": 1652307199864,
            "normalizedT": 1723
        },
        {
            "x": 376,
            "y": 136.0728759765625,
            "normalizedX": 0.752,
            "normalizedY": 0.272145751953125,
            "t": 1652307199872,
            "normalizedT": 1731
        },
        {
            "x": 375,
            "y": 139.0728759765625,
            "normalizedX": 0.75,
            "normalizedY": 0.278145751953125,
            "t": 1652307199880,
            "normalizedT": 1739
        },
        {
            "x": 375,
            "y": 142.0728759765625,
            "normalizedX": 0.75,
            "normalizedY": 0.284145751953125,
            "t": 1652307199888,
            "normalizedT": 1747
        },
        {
            "x": 373,
            "y": 152.0728759765625,
            "normalizedX": 0.746,
            "normalizedY": 0.304145751953125,
            "t": 1652307199896,
            "normalizedT": 1755
        },
        {
            "x": 371,
            "y": 155.0728759765625,
            "normalizedX": 0.742,
            "normalizedY": 0.310145751953125,
            "t": 1652307199904,
            "normalizedT": 1763
        },
        {
            "x": 370,
            "y": 159.0728759765625,
            "normalizedX": 0.74,
            "normalizedY": 0.318145751953125,
            "t": 1652307199912,
            "normalizedT": 1771
        },
        {
            "x": 367,
            "y": 169.0728759765625,
            "normalizedX": 0.734,
            "normalizedY": 0.338145751953125,
            "t": 1652307199920,
            "normalizedT": 1779
        },
        {
            "x": 366,
            "y": 174.0728759765625,
            "normalizedX": 0.732,
            "normalizedY": 0.348145751953125,
            "t": 1652307199928,
            "normalizedT": 1787
        },
        {
            "x": 364,
            "y": 179.0728759765625,
            "normalizedX": 0.728,
            "normalizedY": 0.358145751953125,
            "t": 1652307199936,
            "normalizedT": 1795
        },
        {
            "x": 363,
            "y": 184.0728759765625,
            "normalizedX": 0.726,
            "normalizedY": 0.368145751953125,
            "t": 1652307199944,
            "normalizedT": 1803
        },
        {
            "x": 360,
            "y": 193.0728759765625,
            "normalizedX": 0.72,
            "normalizedY": 0.386145751953125,
            "t": 1652307199952,
            "normalizedT": 1811
        },
        {
            "x": 359,
            "y": 196.0728759765625,
            "normalizedX": 0.718,
            "normalizedY": 0.392145751953125,
            "t": 1652307199960,
            "normalizedT": 1819
        },
        {
            "x": 358,
            "y": 199.0728759765625,
            "normalizedX": 0.716,
            "normalizedY": 0.398145751953125,
            "t": 1652307199968,
            "normalizedT": 1827
        },
        {
            "x": 357,
            "y": 202.0728759765625,
            "normalizedX": 0.714,
            "normalizedY": 0.404145751953125,
            "t": 1652307199976,
            "normalizedT": 1835
        },
        {
            "x": 355,
            "y": 211.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.422145751953125,
            "t": 1652307199984,
            "normalizedT": 1843
        },
        {
            "x": 355,
            "y": 214.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.428145751953125,
            "t": 1652307199994,
            "normalizedT": 1853
        },
        {
            "x": 355,
            "y": 218.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.436145751953125,
            "t": 1652307200002,
            "normalizedT": 1861
        },
        {
            "x": 354,
            "y": 221.0728759765625,
            "normalizedX": 0.708,
            "normalizedY": 0.442145751953125,
            "t": 1652307200010,
            "normalizedT": 1869
        },
        {
            "x": 354,
            "y": 224.0728759765625,
            "normalizedX": 0.708,
            "normalizedY": 0.448145751953125,
            "t": 1652307200018,
            "normalizedT": 1877
        },
        {
            "x": 353,
            "y": 232.0728759765625,
            "normalizedX": 0.706,
            "normalizedY": 0.464145751953125,
            "t": 1652307200026,
            "normalizedT": 1885
        },
        {
            "x": 352,
            "y": 236.0728759765625,
            "normalizedX": 0.704,
            "normalizedY": 0.472145751953125,
            "t": 1652307200034,
            "normalizedT": 1893
        },
        {
            "x": 351,
            "y": 238.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.476145751953125,
            "t": 1652307200043,
            "normalizedT": 1902
        },
        {
            "x": 351,
            "y": 242.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.484145751953125,
            "t": 1652307200050,
            "normalizedT": 1909
        },
        {
            "x": 351,
            "y": 246.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.492145751953125,
            "t": 1652307200058,
            "normalizedT": 1917
        },
        {
            "x": 351,
            "y": 248.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.496145751953125,
            "t": 1652307200066,
            "normalizedT": 1925
        },
        {
            "x": 351,
            "y": 252.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.504145751953125,
            "t": 1652307200074,
            "normalizedT": 1933
        },
        {
            "x": 351,
            "y": 260.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.520145751953125,
            "t": 1652307200082,
            "normalizedT": 1941
        },
        {
            "x": 351,
            "y": 263.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.526145751953125,
            "t": 1652307200090,
            "normalizedT": 1949
        },
        {
            "x": 351,
            "y": 267.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.534145751953125,
            "t": 1652307200098,
            "normalizedT": 1957
        },
        {
            "x": 350,
            "y": 270.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.540145751953125,
            "t": 1652307200106,
            "normalizedT": 1965
        },
        {
            "x": 350,
            "y": 274.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.548145751953125,
            "t": 1652307200114,
            "normalizedT": 1973
        },
        {
            "x": 350,
            "y": 277.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.554145751953125,
            "t": 1652307200122,
            "normalizedT": 1981
        },
        {
            "x": 350,
            "y": 281.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.562145751953125,
            "t": 1652307200130,
            "normalizedT": 1989
        },
        {
            "x": 350,
            "y": 284.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.568145751953125,
            "t": 1652307200138,
            "normalizedT": 1997
        },
        {
            "x": 350,
            "y": 287.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.574145751953125,
            "t": 1652307200146,
            "normalizedT": 2005
        },
        {
            "x": 350,
            "y": 290.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.580145751953125,
            "t": 1652307200154,
            "normalizedT": 2013
        },
        {
            "x": 350,
            "y": 297.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.594145751953125,
            "t": 1652307200162,
            "normalizedT": 2021
        },
        {
            "x": 350,
            "y": 300.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.600145751953125,
            "t": 1652307200170,
            "normalizedT": 2029
        },
        {
            "x": 350,
            "y": 304.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.608145751953125,
            "t": 1652307200178,
            "normalizedT": 2037
        },
        {
            "x": 350,
            "y": 306.0728759765625,
            "normalizedX": 0.7,
            "normalizedY": 0.612145751953125,
            "t": 1652307200186,
            "normalizedT": 2045
        },
        {
            "x": 351,
            "y": 310.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.620145751953125,
            "t": 1652307200194,
            "normalizedT": 2053
        },
        {
            "x": 351,
            "y": 312.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.624145751953125,
            "t": 1652307200202,
            "normalizedT": 2061
        },
        {
            "x": 351,
            "y": 314.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.628145751953125,
            "t": 1652307200210,
            "normalizedT": 2069
        },
        {
            "x": 351,
            "y": 318.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.636145751953125,
            "t": 1652307200218,
            "normalizedT": 2077
        },
        {
            "x": 351,
            "y": 323.0728759765625,
            "normalizedX": 0.702,
            "normalizedY": 0.646145751953125,
            "t": 1652307200226,
            "normalizedT": 2085
        },
        {
            "x": 352,
            "y": 326.0728759765625,
            "normalizedX": 0.704,
            "normalizedY": 0.652145751953125,
            "t": 1652307200234,
            "normalizedT": 2093
        },
        {
            "x": 353,
            "y": 329.0728759765625,
            "normalizedX": 0.706,
            "normalizedY": 0.658145751953125,
            "t": 1652307200242,
            "normalizedT": 2101
        },
        {
            "x": 353,
            "y": 331.0728759765625,
            "normalizedX": 0.706,
            "normalizedY": 0.662145751953125,
            "t": 1652307200250,
            "normalizedT": 2109
        },
        {
            "x": 353,
            "y": 333.0728759765625,
            "normalizedX": 0.706,
            "normalizedY": 0.666145751953125,
            "t": 1652307200258,
            "normalizedT": 2117
        },
        {
            "x": 354,
            "y": 336.0728759765625,
            "normalizedX": 0.708,
            "normalizedY": 0.672145751953125,
            "t": 1652307200266,
            "normalizedT": 2125
        },
        {
            "x": 354,
            "y": 340.0728759765625,
            "normalizedX": 0.708,
            "normalizedY": 0.680145751953125,
            "t": 1652307200276,
            "normalizedT": 2135
        },
        {
            "x": 355,
            "y": 341.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.682145751953125,
            "t": 1652307200284,
            "normalizedT": 2143
        },
        {
            "x": 355,
            "y": 342.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.684145751953125,
            "t": 1652307200292,
            "normalizedT": 2151
        },
        {
            "x": 355,
            "y": 344.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.688145751953125,
            "t": 1652307200300,
            "normalizedT": 2159
        },
        {
            "x": 355,
            "y": 346.0728759765625,
            "normalizedX": 0.71,
            "normalizedY": 0.692145751953125,
            "t": 1652307200308,
            "normalizedT": 2167
        },
        {
            "x": 356,
            "y": 347.0728759765625,
            "normalizedX": 0.712,
            "normalizedY": 0.694145751953125,
            "t": 1652307200316,
            "normalizedT": 2175
        },
        {
            "x": 357,
            "y": 352.0728759765625,
            "normalizedX": 0.714,
            "normalizedY": 0.704145751953125,
            "t": 1652307200324,
            "normalizedT": 2183
        },
        {
            "x": 357,
            "y": 355.0728759765625,
            "normalizedX": 0.714,
            "normalizedY": 0.710145751953125,
            "t": 1652307200332,
            "normalizedT": 2191
        },
        {
            "x": 357,
            "y": 357.0728759765625,
            "normalizedX": 0.714,
            "normalizedY": 0.714145751953125,
            "t": 1652307200340,
            "normalizedT": 2199
        },
        {
            "x": 358,
            "y": 360.0728759765625,
            "normalizedX": 0.716,
            "normalizedY": 0.720145751953125,
            "t": 1652307200348,
            "normalizedT": 2207
        },
        {
            "x": 358,
            "y": 364.0728759765625,
            "normalizedX": 0.716,
            "normalizedY": 0.728145751953125,
            "t": 1652307200356,
            "normalizedT": 2215
        },
        {
            "x": 360,
            "y": 368.0728759765625,
            "normalizedX": 0.72,
            "normalizedY": 0.736145751953125,
            "t": 1652307200364,
            "normalizedT": 2223
        },
        {
            "x": 361,
            "y": 368.0728759765625,
            "normalizedX": 0.722,
            "normalizedY": 0.736145751953125,
            "t": 1652307200372,
            "normalizedT": 2231
        },
        {
            "x": 361,
            "y": 370.0728759765625,
            "normalizedX": 0.722,
            "normalizedY": 0.740145751953125,
            "t": 1652307200380,
            "normalizedT": 2239
        },
        {
            "x": 362,
            "y": 370.0728759765625,
            "normalizedX": 0.724,
            "normalizedY": 0.740145751953125,
            "t": 1652307200388,
            "normalizedT": 2247
        },
        {
            "x": 363,
            "y": 372.0728759765625,
            "normalizedX": 0.726,
            "normalizedY": 0.744145751953125,
            "t": 1652307200396,
            "normalizedT": 2255
        },
        {
            "x": 363,
            "y": 373.0728759765625,
            "normalizedX": 0.726,
            "normalizedY": 0.746145751953125,
            "t": 1652307200404,
            "normalizedT": 2263
        },
        {
            "x": 363,
            "y": 375.0728759765625,
            "normalizedX": 0.726,
            "normalizedY": 0.750145751953125,
            "t": 1652307200412,
            "normalizedT": 2271
        },
        {
            "x": 364,
            "y": 376.0728759765625,
            "normalizedX": 0.728,
            "normalizedY": 0.752145751953125,
            "t": 1652307200420,
            "normalizedT": 2279
        },
        {
            "x": 365,
            "y": 377.0728759765625,
            "normalizedX": 0.73,
            "normalizedY": 0.754145751953125,
            "t": 1652307200428,
            "normalizedT": 2287
        },
        {
            "x": 366,
            "y": 378.0728759765625,
            "normalizedX": 0.732,
            "normalizedY": 0.756145751953125,
            "t": 1652307200436,
            "normalizedT": 2295
        },
        {
            "x": 368,
            "y": 382.0728759765625,
            "normalizedX": 0.736,
            "normalizedY": 0.764145751953125,
            "t": 1652307200444,
            "normalizedT": 2303
        },
        {
            "x": 369,
            "y": 383.0728759765625,
            "normalizedX": 0.738,
            "normalizedY": 0.766145751953125,
            "t": 1652307200452,
            "normalizedT": 2311
        },
        {
            "x": 371,
            "y": 385.0728759765625,
            "normalizedX": 0.742,
            "normalizedY": 0.770145751953125,
            "t": 1652307200460,
            "normalizedT": 2319
        },
        {
            "x": 372,
            "y": 386.0728759765625,
            "normalizedX": 0.744,
            "normalizedY": 0.772145751953125,
            "t": 1652307200468,
            "normalizedT": 2327
        },
        {
            "x": 375,
            "y": 390.0728759765625,
            "normalizedX": 0.75,
            "normalizedY": 0.780145751953125,
            "t": 1652307200476,
            "normalizedT": 2335
        },
        {
            "x": 376,
            "y": 392.0728759765625,
            "normalizedX": 0.752,
            "normalizedY": 0.784145751953125,
            "t": 1652307200484,
            "normalizedT": 2343
        },
        {
            "x": 377,
            "y": 393.0728759765625,
            "normalizedX": 0.754,
            "normalizedY": 0.786145751953125,
            "t": 1652307200492,
            "normalizedT": 2351
        },
        {
            "x": 379,
            "y": 394.0728759765625,
            "normalizedX": 0.758,
            "normalizedY": 0.788145751953125,
            "t": 1652307200500,
            "normalizedT": 2359
        },
        {
            "x": 381,
            "y": 396.0728759765625,
            "normalizedX": 0.762,
            "normalizedY": 0.792145751953125,
            "t": 1652307200508,
            "normalizedT": 2367
        },
        {
            "x": 382,
            "y": 397.0728759765625,
            "normalizedX": 0.764,
            "normalizedY": 0.794145751953125,
            "t": 1652307200516,
            "normalizedT": 2375
        },
        {
            "x": 383,
            "y": 398.0728759765625,
            "normalizedX": 0.766,
            "normalizedY": 0.796145751953125,
            "t": 1652307200524,
            "normalizedT": 2383
        },
        {
            "x": 385,
            "y": 399.0728759765625,
            "normalizedX": 0.77,
            "normalizedY": 0.798145751953125,
            "t": 1652307200532,
            "normalizedT": 2391
        },
        {
            "x": 387,
            "y": 401.0728759765625,
            "normalizedX": 0.774,
            "normalizedY": 0.802145751953125,
            "t": 1652307200542,
            "normalizedT": 2401
        },
        {
            "x": 389,
            "y": 402.0728759765625,
            "normalizedX": 0.778,
            "normalizedY": 0.804145751953125,
            "t": 1652307200550,
            "normalizedT": 2409
        },
        {
            "x": 392,
            "y": 404.0728759765625,
            "normalizedX": 0.784,
            "normalizedY": 0.808145751953125,
            "t": 1652307200559,
            "normalizedT": 2418
        },
        {
            "x": 395,
            "y": 405.0728759765625,
            "normalizedX": 0.79,
            "normalizedY": 0.810145751953125,
            "t": 1652307200566,
            "normalizedT": 2425
        },
        {
            "x": 395,
            "y": 406.0728759765625,
            "normalizedX": 0.79,
            "normalizedY": 0.812145751953125,
            "t": 1652307200574,
            "normalizedT": 2433
        },
        {
            "x": 397,
            "y": 407.0728759765625,
            "normalizedX": 0.794,
            "normalizedY": 0.814145751953125,
            "t": 1652307200582,
            "normalizedT": 2441
        },
        {
            "x": 399,
            "y": 408.0728759765625,
            "normalizedX": 0.798,
            "normalizedY": 0.816145751953125,
            "t": 1652307200590,
            "normalizedT": 2449
        },
        {
            "x": 400,
            "y": 409.0728759765625,
            "normalizedX": 0.8,
            "normalizedY": 0.818145751953125,
            "t": 1652307200598,
            "normalizedT": 2457
        },
        {
            "x": 402,
            "y": 410.0728759765625,
            "normalizedX": 0.804,
            "normalizedY": 0.820145751953125,
            "t": 1652307200606,
            "normalizedT": 2465
        },
        {
            "x": 405,
            "y": 412.0728759765625,
            "normalizedX": 0.81,
            "normalizedY": 0.824145751953125,
            "t": 1652307200614,
            "normalizedT": 2473
        },
        {
            "x": 406,
            "y": 414.0728759765625,
            "normalizedX": 0.812,
            "normalizedY": 0.828145751953125,
            "t": 1652307200622,
            "normalizedT": 2481
        },
        {
            "x": 408,
            "y": 415.0728759765625,
            "normalizedX": 0.816,
            "normalizedY": 0.830145751953125,
            "t": 1652307200630,
            "normalizedT": 2489
        },
        {
            "x": 409,
            "y": 416.0728759765625,
            "normalizedX": 0.818,
            "normalizedY": 0.832145751953125,
            "t": 1652307200638,
            "normalizedT": 2497
        },
        {
            "x": 413,
            "y": 418.0728759765625,
            "normalizedX": 0.826,
            "normalizedY": 0.836145751953125,
            "t": 1652307200646,
            "normalizedT": 2505
        },
        {
            "x": 414,
            "y": 419.0728759765625,
            "normalizedX": 0.828,
            "normalizedY": 0.838145751953125,
            "t": 1652307200654,
            "normalizedT": 2513
        },
        {
            "x": 417,
            "y": 421.0728759765625,
            "normalizedX": 0.834,
            "normalizedY": 0.842145751953125,
            "t": 1652307200662,
            "normalizedT": 2521
        },
        {
            "x": 419,
            "y": 423.0728759765625,
            "normalizedX": 0.838,
            "normalizedY": 0.846145751953125,
            "t": 1652307200670,
            "normalizedT": 2529
        },
        {
            "x": 422,
            "y": 424.0728759765625,
            "normalizedX": 0.844,
            "normalizedY": 0.848145751953125,
            "t": 1652307200678,
            "normalizedT": 2537
        },
        {
            "x": 423,
            "y": 426.0728759765625,
            "normalizedX": 0.846,
            "normalizedY": 0.852145751953125,
            "t": 1652307200686,
            "normalizedT": 2545
        },
        {
            "x": 427,
            "y": 428.0728759765625,
            "normalizedX": 0.854,
            "normalizedY": 0.856145751953125,
            "t": 1652307200694,
            "normalizedT": 2553
        },
        {
            "x": 428,
            "y": 429.0728759765625,
            "normalizedX": 0.856,
            "normalizedY": 0.858145751953125,
            "t": 1652307200702,
            "normalizedT": 2561
        },
        {
            "x": 431,
            "y": 432.0728759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.864145751953125,
            "t": 1652307200710,
            "normalizedT": 2569
        },
        {
            "x": 433,
            "y": 432.0728759765625,
            "normalizedX": 0.866,
            "normalizedY": 0.864145751953125,
            "t": 1652307200718,
            "normalizedT": 2577
        },
        {
            "x": 433,
            "y": 432.0728759765625,
            "normalizedX": 0.866,
            "normalizedY": 0.864145751953125,
            "t": 1652307200726,
            "normalizedT": 2585
        },
        {
            "x": 435,
            "y": 433.0728759765625,
            "normalizedX": 0.87,
            "normalizedY": 0.866145751953125,
            "t": 1652307200734,
            "normalizedT": 2593
        },
        {
            "x": 436,
            "y": 434.0728759765625,
            "normalizedX": 0.872,
            "normalizedY": 0.868145751953125,
            "t": 1652307200742,
            "normalizedT": 2601
        },
        {
            "x": 437,
            "y": 434.0728759765625,
            "normalizedX": 0.874,
            "normalizedY": 0.868145751953125,
            "t": 1652307200759,
            "normalizedT": 2618
        },
        {
            "x": 438,
            "y": 434.0728759765625,
            "normalizedX": 0.876,
            "normalizedY": 0.868145751953125,
            "t": 1652307200766,
            "normalizedT": 2625
        },
        {
            "x": 439,
            "y": 434.0728759765625,
            "normalizedX": 0.878,
            "normalizedY": 0.868145751953125,
            "t": 1652307200774,
            "normalizedT": 2633
        },
        {
            "x": 441,
            "y": 435.0728759765625,
            "normalizedX": 0.882,
            "normalizedY": 0.870145751953125,
            "t": 1652307200783,
            "normalizedT": 2642
        },
        {
            "x": 441,
            "y": 435.0728759765625,
            "normalizedX": 0.882,
            "normalizedY": 0.870145751953125,
            "t": 1652307200790,
            "normalizedT": 2649
        },
        {
            "x": 445,
            "y": 435.0728759765625,
            "normalizedX": 0.89,
            "normalizedY": 0.870145751953125,
            "t": 1652307200798,
            "normalizedT": 2657
        },
        {
            "x": 446,
            "y": 435.0728759765625,
            "normalizedX": 0.892,
            "normalizedY": 0.870145751953125,
            "t": 1652307200806,
            "normalizedT": 2665
        }
    ]
];
