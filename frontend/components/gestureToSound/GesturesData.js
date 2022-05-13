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


export const GESTURE_LINES = [
    [
        {
            "x": 21.33331298828125,
            "y": 186.0728759765625,
            "normalizedX": 0.0426666259765625,
            "normalizedY": 0.372145751953125,
            "t": 1652312311207,
            "normalizedT": 0
        },
        {
            "x": 21.33331298828125,
            "y": 182.0728759765625,
            "normalizedX": 0.0426666259765625,
            "normalizedY": 0.364145751953125,
            "t": 1652312311276,
            "normalizedT": 69
        },
        {
            "x": 22.33331298828125,
            "y": 178.0728759765625,
            "normalizedX": 0.0446666259765625,
            "normalizedY": 0.356145751953125,
            "t": 1652312311293,
            "normalizedT": 86
        },
        {
            "x": 23.33331298828125,
            "y": 174.0728759765625,
            "normalizedX": 0.0466666259765625,
            "normalizedY": 0.348145751953125,
            "t": 1652312311310,
            "normalizedT": 103
        },
        {
            "x": 26.33331298828125,
            "y": 162.0728759765625,
            "normalizedX": 0.0526666259765625,
            "normalizedY": 0.324145751953125,
            "t": 1652312311326,
            "normalizedT": 119
        },
        {
            "x": 29.33331298828125,
            "y": 154.0728759765625,
            "normalizedX": 0.0586666259765625,
            "normalizedY": 0.308145751953125,
            "t": 1652312311343,
            "normalizedT": 136
        },
        {
            "x": 31.33331298828125,
            "y": 148.0728759765625,
            "normalizedX": 0.0626666259765625,
            "normalizedY": 0.296145751953125,
            "t": 1652312311360,
            "normalizedT": 153
        },
        {
            "x": 35.33331298828125,
            "y": 138.0728759765625,
            "normalizedX": 0.0706666259765625,
            "normalizedY": 0.276145751953125,
            "t": 1652312311376,
            "normalizedT": 169
        },
        {
            "x": 40.33331298828125,
            "y": 129.0728759765625,
            "normalizedX": 0.0806666259765625,
            "normalizedY": 0.258145751953125,
            "t": 1652312311393,
            "normalizedT": 186
        },
        {
            "x": 46.33331298828125,
            "y": 121.0728759765625,
            "normalizedX": 0.0926666259765625,
            "normalizedY": 0.242145751953125,
            "t": 1652312311410,
            "normalizedT": 203
        },
        {
            "x": 49.33331298828125,
            "y": 116.0728759765625,
            "normalizedX": 0.0986666259765625,
            "normalizedY": 0.232145751953125,
            "t": 1652312311426,
            "normalizedT": 219
        },
        {
            "x": 54.33331298828125,
            "y": 112.0728759765625,
            "normalizedX": 0.1086666259765625,
            "normalizedY": 0.224145751953125,
            "t": 1652312311443,
            "normalizedT": 236
        },
        {
            "x": 61.33331298828125,
            "y": 106.0728759765625,
            "normalizedX": 0.1226666259765625,
            "normalizedY": 0.212145751953125,
            "t": 1652312311460,
            "normalizedT": 253
        },
        {
            "x": 69.33331298828125,
            "y": 100.0728759765625,
            "normalizedX": 0.1386666259765625,
            "normalizedY": 0.200145751953125,
            "t": 1652312311476,
            "normalizedT": 269
        },
        {
            "x": 80.33331298828125,
            "y": 92.0728759765625,
            "normalizedX": 0.1606666259765625,
            "normalizedY": 0.184145751953125,
            "t": 1652312311493,
            "normalizedT": 286
        },
        {
            "x": 89.33331298828125,
            "y": 85.0728759765625,
            "normalizedX": 0.1786666259765625,
            "normalizedY": 0.170145751953125,
            "t": 1652312311510,
            "normalizedT": 303
        },
        {
            "x": 102.33331298828125,
            "y": 74.0728759765625,
            "normalizedX": 0.2046666259765625,
            "normalizedY": 0.148145751953125,
            "t": 1652312311526,
            "normalizedT": 319
        },
        {
            "x": 111.33331298828125,
            "y": 66.0728759765625,
            "normalizedX": 0.2226666259765625,
            "normalizedY": 0.132145751953125,
            "t": 1652312311543,
            "normalizedT": 336
        },
        {
            "x": 117.33331298828125,
            "y": 56.0728759765625,
            "normalizedX": 0.2346666259765625,
            "normalizedY": 0.112145751953125,
            "t": 1652312311560,
            "normalizedT": 353
        },
        {
            "x": 119.33331298828125,
            "y": 52.0728759765625,
            "normalizedX": 0.2386666259765625,
            "normalizedY": 0.104145751953125,
            "t": 1652312311576,
            "normalizedT": 369
        },
        {
            "x": 121.33331298828125,
            "y": 49.0728759765625,
            "normalizedX": 0.2426666259765625,
            "normalizedY": 0.098145751953125,
            "t": 1652312311593,
            "normalizedT": 386
        },
        {
            "x": 123.33331298828125,
            "y": 46.0728759765625,
            "normalizedX": 0.2466666259765625,
            "normalizedY": 0.092145751953125,
            "t": 1652312311610,
            "normalizedT": 403
        },
        {
            "x": 125.33331298828125,
            "y": 41.0728759765625,
            "normalizedX": 0.2506666259765625,
            "normalizedY": 0.082145751953125,
            "t": 1652312311626,
            "normalizedT": 419
        },
        {
            "x": 126.33331298828125,
            "y": 38.0728759765625,
            "normalizedX": 0.2526666259765625,
            "normalizedY": 0.076145751953125,
            "t": 1652312311643,
            "normalizedT": 436
        },
        {
            "x": 127.33331298828125,
            "y": 36.0728759765625,
            "normalizedX": 0.2546666259765625,
            "normalizedY": 0.072145751953125,
            "t": 1652312311660,
            "normalizedT": 453
        },
        {
            "x": 127.33331298828125,
            "y": 34.0728759765625,
            "normalizedX": 0.2546666259765625,
            "normalizedY": 0.068145751953125,
            "t": 1652312311676,
            "normalizedT": 469
        }
    ],
    [
        {
            "x": 213.33331298828125,
            "y": 18.0728759765625,
            "normalizedX": 0.4266666259765625,
            "normalizedY": 0.036145751953125,
            "t": 1652312312161,
            "normalizedT": 0
        },
        {
            "x": 211.33331298828125,
            "y": 22.0728759765625,
            "normalizedX": 0.4226666259765625,
            "normalizedY": 0.044145751953125,
            "t": 1652312312193,
            "normalizedT": 32
        },
        {
            "x": 198.33331298828125,
            "y": 38.0728759765625,
            "normalizedX": 0.3966666259765625,
            "normalizedY": 0.076145751953125,
            "t": 1652312312210,
            "normalizedT": 49
        },
        {
            "x": 173.33331298828125,
            "y": 72.0728759765625,
            "normalizedX": 0.3466666259765625,
            "normalizedY": 0.144145751953125,
            "t": 1652312312226,
            "normalizedT": 65
        },
        {
            "x": 150.33331298828125,
            "y": 102.0728759765625,
            "normalizedX": 0.3006666259765625,
            "normalizedY": 0.204145751953125,
            "t": 1652312312243,
            "normalizedT": 82
        },
        {
            "x": 117.33331298828125,
            "y": 144.0728759765625,
            "normalizedX": 0.2346666259765625,
            "normalizedY": 0.288145751953125,
            "t": 1652312312260,
            "normalizedT": 99
        },
        {
            "x": 91.33331298828125,
            "y": 176.0728759765625,
            "normalizedX": 0.1826666259765625,
            "normalizedY": 0.352145751953125,
            "t": 1652312312276,
            "normalizedT": 115
        },
        {
            "x": 63.33331298828125,
            "y": 210.0728759765625,
            "normalizedX": 0.1266666259765625,
            "normalizedY": 0.420145751953125,
            "t": 1652312312293,
            "normalizedT": 132
        },
        {
            "x": 48.33331298828125,
            "y": 237.0728759765625,
            "normalizedX": 0.0966666259765625,
            "normalizedY": 0.474145751953125,
            "t": 1652312312310,
            "normalizedT": 149
        },
        {
            "x": 35.33331298828125,
            "y": 260.0728759765625,
            "normalizedX": 0.0706666259765625,
            "normalizedY": 0.520145751953125,
            "t": 1652312312326,
            "normalizedT": 165
        },
        {
            "x": 29.33331298828125,
            "y": 275.0728759765625,
            "normalizedX": 0.0586666259765625,
            "normalizedY": 0.550145751953125,
            "t": 1652312312343,
            "normalizedT": 182
        },
        {
            "x": 25.33331298828125,
            "y": 286.0728759765625,
            "normalizedX": 0.0506666259765625,
            "normalizedY": 0.572145751953125,
            "t": 1652312312360,
            "normalizedT": 199
        },
        {
            "x": 25.33331298828125,
            "y": 290.0728759765625,
            "normalizedX": 0.0506666259765625,
            "normalizedY": 0.580145751953125,
            "t": 1652312312376,
            "normalizedT": 215
        },
        {
            "x": 24.33331298828125,
            "y": 292.0728759765625,
            "normalizedX": 0.0486666259765625,
            "normalizedY": 0.584145751953125,
            "t": 1652312312393,
            "normalizedT": 232
        },
        {
            "x": 24.33331298828125,
            "y": 292.0728759765625,
            "normalizedX": 0.0486666259765625,
            "normalizedY": 0.584145751953125,
            "t": 1652312312410,
            "normalizedT": 249
        },
        {
            "x": 24.33331298828125,
            "y": 293.0728759765625,
            "normalizedX": 0.0486666259765625,
            "normalizedY": 0.586145751953125,
            "t": 1652312312426,
            "normalizedT": 265
        },
        {
            "x": 24.33331298828125,
            "y": 294.0728759765625,
            "normalizedX": 0.0486666259765625,
            "normalizedY": 0.588145751953125,
            "t": 1652312312460,
            "normalizedT": 299
        }
    ],
    [
        {
            "x": 56.33331298828125,
            "y": 378.0728759765625,
            "normalizedX": 0.1126666259765625,
            "normalizedY": 0.756145751953125,
            "t": 1652312312895,
            "normalizedT": 0
        },
        {
            "x": 59.33331298828125,
            "y": 378.0728759765625,
            "normalizedX": 0.1186666259765625,
            "normalizedY": 0.756145751953125,
            "t": 1652312312926,
            "normalizedT": 31
        },
        {
            "x": 64.33331298828125,
            "y": 372.0728759765625,
            "normalizedX": 0.1286666259765625,
            "normalizedY": 0.744145751953125,
            "t": 1652312312943,
            "normalizedT": 48
        },
        {
            "x": 77.33331298828125,
            "y": 361.0728759765625,
            "normalizedX": 0.1546666259765625,
            "normalizedY": 0.722145751953125,
            "t": 1652312312960,
            "normalizedT": 65
        },
        {
            "x": 89.33331298828125,
            "y": 348.0728759765625,
            "normalizedX": 0.1786666259765625,
            "normalizedY": 0.696145751953125,
            "t": 1652312312976,
            "normalizedT": 81
        },
        {
            "x": 113.33331298828125,
            "y": 319.0728759765625,
            "normalizedX": 0.2266666259765625,
            "normalizedY": 0.638145751953125,
            "t": 1652312312993,
            "normalizedT": 98
        },
        {
            "x": 139.33331298828125,
            "y": 290.0728759765625,
            "normalizedX": 0.2786666259765625,
            "normalizedY": 0.580145751953125,
            "t": 1652312313010,
            "normalizedT": 115
        },
        {
            "x": 165.33331298828125,
            "y": 254.0728759765625,
            "normalizedX": 0.3306666259765625,
            "normalizedY": 0.508145751953125,
            "t": 1652312313026,
            "normalizedT": 131
        },
        {
            "x": 184.33331298828125,
            "y": 223.0728759765625,
            "normalizedX": 0.3686666259765625,
            "normalizedY": 0.446145751953125,
            "t": 1652312313043,
            "normalizedT": 148
        },
        {
            "x": 215.33331298828125,
            "y": 176.0728759765625,
            "normalizedX": 0.4306666259765625,
            "normalizedY": 0.352145751953125,
            "t": 1652312313060,
            "normalizedT": 165
        },
        {
            "x": 246.33331298828125,
            "y": 125.0728759765625,
            "normalizedX": 0.4926666259765625,
            "normalizedY": 0.250145751953125,
            "t": 1652312313076,
            "normalizedT": 181
        },
        {
            "x": 262.33331298828125,
            "y": 98.0728759765625,
            "normalizedX": 0.5246666259765626,
            "normalizedY": 0.196145751953125,
            "t": 1652312313093,
            "normalizedT": 198
        },
        {
            "x": 281.33331298828125,
            "y": 67.0728759765625,
            "normalizedX": 0.5626666259765625,
            "normalizedY": 0.134145751953125,
            "t": 1652312313110,
            "normalizedT": 215
        },
        {
            "x": 295.33331298828125,
            "y": 46.0728759765625,
            "normalizedX": 0.5906666259765625,
            "normalizedY": 0.092145751953125,
            "t": 1652312313127,
            "normalizedT": 232
        },
        {
            "x": 298.33331298828125,
            "y": 41.0728759765625,
            "normalizedX": 0.5966666259765625,
            "normalizedY": 0.082145751953125,
            "t": 1652312313143,
            "normalizedT": 248
        },
        {
            "x": 301.33331298828125,
            "y": 36.0728759765625,
            "normalizedX": 0.6026666259765625,
            "normalizedY": 0.072145751953125,
            "t": 1652312313160,
            "normalizedT": 265
        },
        {
            "x": 303.33331298828125,
            "y": 34.0728759765625,
            "normalizedX": 0.6066666259765625,
            "normalizedY": 0.068145751953125,
            "t": 1652312313176,
            "normalizedT": 281
        },
        {
            "x": 307.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.6146666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312313193,
            "normalizedT": 298
        },
        {
            "x": 309.33331298828125,
            "y": 27.0728759765625,
            "normalizedX": 0.6186666259765625,
            "normalizedY": 0.054145751953125,
            "t": 1652312313210,
            "normalizedT": 315
        },
        {
            "x": 309.33331298828125,
            "y": 26.0728759765625,
            "normalizedX": 0.6186666259765625,
            "normalizedY": 0.052145751953125,
            "t": 1652312313226,
            "normalizedT": 331
        }
    ],
    [
        {
            "x": 378.33331298828125,
            "y": 28.0728759765625,
            "normalizedX": 0.7566666259765625,
            "normalizedY": 0.056145751953125,
            "t": 1652312313813,
            "normalizedT": 0
        },
        {
            "x": 378.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.7566666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312313860,
            "normalizedT": 47
        },
        {
            "x": 375.33331298828125,
            "y": 43.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.086145751953125,
            "t": 1652312313876,
            "normalizedT": 63
        },
        {
            "x": 369.33331298828125,
            "y": 58.0728759765625,
            "normalizedX": 0.7386666259765625,
            "normalizedY": 0.116145751953125,
            "t": 1652312313893,
            "normalizedT": 80
        },
        {
            "x": 359.33331298828125,
            "y": 81.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.162145751953125,
            "t": 1652312313910,
            "normalizedT": 97
        },
        {
            "x": 333.33331298828125,
            "y": 126.0728759765625,
            "normalizedX": 0.6666666259765625,
            "normalizedY": 0.252145751953125,
            "t": 1652312313926,
            "normalizedT": 113
        },
        {
            "x": 313.33331298828125,
            "y": 158.0728759765625,
            "normalizedX": 0.6266666259765625,
            "normalizedY": 0.316145751953125,
            "t": 1652312313943,
            "normalizedT": 130
        },
        {
            "x": 275.33331298828125,
            "y": 218.0728759765625,
            "normalizedX": 0.5506666259765625,
            "normalizedY": 0.436145751953125,
            "t": 1652312313960,
            "normalizedT": 147
        },
        {
            "x": 237.33331298828125,
            "y": 275.0728759765625,
            "normalizedX": 0.4746666259765625,
            "normalizedY": 0.550145751953125,
            "t": 1652312313976,
            "normalizedT": 163
        },
        {
            "x": 205.33331298828125,
            "y": 321.0728759765625,
            "normalizedX": 0.4106666259765625,
            "normalizedY": 0.642145751953125,
            "t": 1652312313993,
            "normalizedT": 180
        },
        {
            "x": 180.33331298828125,
            "y": 359.0728759765625,
            "normalizedX": 0.3606666259765625,
            "normalizedY": 0.718145751953125,
            "t": 1652312314010,
            "normalizedT": 197
        },
        {
            "x": 167.33331298828125,
            "y": 382.0728759765625,
            "normalizedX": 0.3346666259765625,
            "normalizedY": 0.764145751953125,
            "t": 1652312314026,
            "normalizedT": 213
        },
        {
            "x": 156.33331298828125,
            "y": 404.0728759765625,
            "normalizedX": 0.3126666259765625,
            "normalizedY": 0.808145751953125,
            "t": 1652312314043,
            "normalizedT": 230
        },
        {
            "x": 148.33331298828125,
            "y": 421.0728759765625,
            "normalizedX": 0.2966666259765625,
            "normalizedY": 0.842145751953125,
            "t": 1652312314060,
            "normalizedT": 247
        },
        {
            "x": 143.33331298828125,
            "y": 434.0728759765625,
            "normalizedX": 0.2866666259765625,
            "normalizedY": 0.868145751953125,
            "t": 1652312314076,
            "normalizedT": 263
        },
        {
            "x": 141.33331298828125,
            "y": 439.0728759765625,
            "normalizedX": 0.2826666259765625,
            "normalizedY": 0.878145751953125,
            "t": 1652312314093,
            "normalizedT": 280
        },
        {
            "x": 138.33331298828125,
            "y": 444.0728759765625,
            "normalizedX": 0.2766666259765625,
            "normalizedY": 0.888145751953125,
            "t": 1652312314110,
            "normalizedT": 297
        },
        {
            "x": 134.33331298828125,
            "y": 450.0728759765625,
            "normalizedX": 0.2686666259765625,
            "normalizedY": 0.900145751953125,
            "t": 1652312314126,
            "normalizedT": 313
        },
        {
            "x": 132.33331298828125,
            "y": 454.0728759765625,
            "normalizedX": 0.2646666259765625,
            "normalizedY": 0.908145751953125,
            "t": 1652312314143,
            "normalizedT": 330
        },
        {
            "x": 131.33331298828125,
            "y": 456.0728759765625,
            "normalizedX": 0.2626666259765625,
            "normalizedY": 0.912145751953125,
            "t": 1652312314160,
            "normalizedT": 347
        },
        {
            "x": 130.33331298828125,
            "y": 460.0728759765625,
            "normalizedX": 0.2606666259765625,
            "normalizedY": 0.920145751953125,
            "t": 1652312314176,
            "normalizedT": 363
        },
        {
            "x": 128.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.2566666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312314193,
            "normalizedT": 380
        },
        {
            "x": 127.33331298828125,
            "y": 467.0728759765625,
            "normalizedX": 0.2546666259765625,
            "normalizedY": 0.934145751953125,
            "t": 1652312314210,
            "normalizedT": 397
        },
        {
            "x": 126.33331298828125,
            "y": 468.0728759765625,
            "normalizedX": 0.2526666259765625,
            "normalizedY": 0.936145751953125,
            "t": 1652312314226,
            "normalizedT": 413
        },
        {
            "x": 126.33331298828125,
            "y": 469.0728759765625,
            "normalizedX": 0.2526666259765625,
            "normalizedY": 0.938145751953125,
            "t": 1652312314243,
            "normalizedT": 430
        }
    ],
    [
        {
            "x": 187.33331298828125,
            "y": 476.0728759765625,
            "normalizedX": 0.3746666259765625,
            "normalizedY": 0.952145751953125,
            "t": 1652312314671,
            "normalizedT": 0
        },
        {
            "x": 189.33331298828125,
            "y": 475.0728759765625,
            "normalizedX": 0.3786666259765625,
            "normalizedY": 0.950145751953125,
            "t": 1652312314693,
            "normalizedT": 22
        },
        {
            "x": 189.33331298828125,
            "y": 474.0728759765625,
            "normalizedX": 0.3786666259765625,
            "normalizedY": 0.948145751953125,
            "t": 1652312314710,
            "normalizedT": 39
        },
        {
            "x": 195.33331298828125,
            "y": 471.0728759765625,
            "normalizedX": 0.3906666259765625,
            "normalizedY": 0.942145751953125,
            "t": 1652312314726,
            "normalizedT": 55
        },
        {
            "x": 197.33331298828125,
            "y": 468.0728759765625,
            "normalizedX": 0.3946666259765625,
            "normalizedY": 0.936145751953125,
            "t": 1652312314743,
            "normalizedT": 72
        },
        {
            "x": 202.33331298828125,
            "y": 465.0728759765625,
            "normalizedX": 0.4046666259765625,
            "normalizedY": 0.930145751953125,
            "t": 1652312314760,
            "normalizedT": 89
        },
        {
            "x": 206.33331298828125,
            "y": 462.0728759765625,
            "normalizedX": 0.4126666259765625,
            "normalizedY": 0.924145751953125,
            "t": 1652312314776,
            "normalizedT": 105
        },
        {
            "x": 208.33331298828125,
            "y": 459.0728759765625,
            "normalizedX": 0.4166666259765625,
            "normalizedY": 0.918145751953125,
            "t": 1652312314793,
            "normalizedT": 122
        },
        {
            "x": 211.33331298828125,
            "y": 456.0728759765625,
            "normalizedX": 0.4226666259765625,
            "normalizedY": 0.912145751953125,
            "t": 1652312314810,
            "normalizedT": 139
        },
        {
            "x": 215.33331298828125,
            "y": 451.0728759765625,
            "normalizedX": 0.4306666259765625,
            "normalizedY": 0.902145751953125,
            "t": 1652312314826,
            "normalizedT": 155
        },
        {
            "x": 217.33331298828125,
            "y": 446.0728759765625,
            "normalizedX": 0.4346666259765625,
            "normalizedY": 0.892145751953125,
            "t": 1652312314843,
            "normalizedT": 172
        },
        {
            "x": 221.33331298828125,
            "y": 442.0728759765625,
            "normalizedX": 0.4426666259765625,
            "normalizedY": 0.884145751953125,
            "t": 1652312314860,
            "normalizedT": 189
        },
        {
            "x": 225.33331298828125,
            "y": 436.0728759765625,
            "normalizedX": 0.4506666259765625,
            "normalizedY": 0.872145751953125,
            "t": 1652312314876,
            "normalizedT": 205
        },
        {
            "x": 228.33331298828125,
            "y": 432.0728759765625,
            "normalizedX": 0.4566666259765625,
            "normalizedY": 0.864145751953125,
            "t": 1652312314893,
            "normalizedT": 222
        },
        {
            "x": 233.33331298828125,
            "y": 424.0728759765625,
            "normalizedX": 0.4666666259765625,
            "normalizedY": 0.848145751953125,
            "t": 1652312314910,
            "normalizedT": 239
        },
        {
            "x": 237.33331298828125,
            "y": 420.0728759765625,
            "normalizedX": 0.4746666259765625,
            "normalizedY": 0.840145751953125,
            "t": 1652312314926,
            "normalizedT": 255
        },
        {
            "x": 242.33331298828125,
            "y": 414.0728759765625,
            "normalizedX": 0.4846666259765625,
            "normalizedY": 0.828145751953125,
            "t": 1652312314943,
            "normalizedT": 272
        },
        {
            "x": 251.33331298828125,
            "y": 403.0728759765625,
            "normalizedX": 0.5026666259765625,
            "normalizedY": 0.806145751953125,
            "t": 1652312314960,
            "normalizedT": 289
        },
        {
            "x": 259.33331298828125,
            "y": 393.0728759765625,
            "normalizedX": 0.5186666259765625,
            "normalizedY": 0.786145751953125,
            "t": 1652312314976,
            "normalizedT": 305
        },
        {
            "x": 269.33331298828125,
            "y": 382.0728759765625,
            "normalizedX": 0.5386666259765625,
            "normalizedY": 0.764145751953125,
            "t": 1652312314993,
            "normalizedT": 322
        },
        {
            "x": 275.33331298828125,
            "y": 376.0728759765625,
            "normalizedX": 0.5506666259765625,
            "normalizedY": 0.752145751953125,
            "t": 1652312315010,
            "normalizedT": 339
        },
        {
            "x": 280.33331298828125,
            "y": 371.0728759765625,
            "normalizedX": 0.5606666259765625,
            "normalizedY": 0.742145751953125,
            "t": 1652312315026,
            "normalizedT": 355
        },
        {
            "x": 286.33331298828125,
            "y": 365.0728759765625,
            "normalizedX": 0.5726666259765625,
            "normalizedY": 0.730145751953125,
            "t": 1652312315043,
            "normalizedT": 372
        },
        {
            "x": 291.33331298828125,
            "y": 360.0728759765625,
            "normalizedX": 0.5826666259765625,
            "normalizedY": 0.720145751953125,
            "t": 1652312315060,
            "normalizedT": 389
        },
        {
            "x": 297.33331298828125,
            "y": 355.0728759765625,
            "normalizedX": 0.5946666259765625,
            "normalizedY": 0.710145751953125,
            "t": 1652312315076,
            "normalizedT": 405
        },
        {
            "x": 309.33331298828125,
            "y": 344.0728759765625,
            "normalizedX": 0.6186666259765625,
            "normalizedY": 0.688145751953125,
            "t": 1652312315093,
            "normalizedT": 422
        },
        {
            "x": 316.33331298828125,
            "y": 337.0728759765625,
            "normalizedX": 0.6326666259765625,
            "normalizedY": 0.674145751953125,
            "t": 1652312315110,
            "normalizedT": 439
        },
        {
            "x": 322.33331298828125,
            "y": 330.0728759765625,
            "normalizedX": 0.6446666259765625,
            "normalizedY": 0.660145751953125,
            "t": 1652312315126,
            "normalizedT": 455
        },
        {
            "x": 329.33331298828125,
            "y": 322.0728759765625,
            "normalizedX": 0.6586666259765624,
            "normalizedY": 0.644145751953125,
            "t": 1652312315143,
            "normalizedT": 472
        },
        {
            "x": 335.33331298828125,
            "y": 316.0728759765625,
            "normalizedX": 0.6706666259765625,
            "normalizedY": 0.632145751953125,
            "t": 1652312315160,
            "normalizedT": 489
        },
        {
            "x": 343.33331298828125,
            "y": 303.0728759765625,
            "normalizedX": 0.6866666259765625,
            "normalizedY": 0.606145751953125,
            "t": 1652312315176,
            "normalizedT": 505
        },
        {
            "x": 347.33331298828125,
            "y": 298.0728759765625,
            "normalizedX": 0.6946666259765625,
            "normalizedY": 0.596145751953125,
            "t": 1652312315193,
            "normalizedT": 522
        },
        {
            "x": 351.33331298828125,
            "y": 288.0728759765625,
            "normalizedX": 0.7026666259765625,
            "normalizedY": 0.576145751953125,
            "t": 1652312315210,
            "normalizedT": 539
        },
        {
            "x": 357.33331298828125,
            "y": 272.0728759765625,
            "normalizedX": 0.7146666259765625,
            "normalizedY": 0.544145751953125,
            "t": 1652312315226,
            "normalizedT": 555
        },
        {
            "x": 359.33331298828125,
            "y": 263.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.526145751953125,
            "t": 1652312315243,
            "normalizedT": 572
        },
        {
            "x": 362.33331298828125,
            "y": 255.0728759765625,
            "normalizedX": 0.7246666259765625,
            "normalizedY": 0.510145751953125,
            "t": 1652312315260,
            "normalizedT": 589
        },
        {
            "x": 364.33331298828125,
            "y": 246.0728759765625,
            "normalizedX": 0.7286666259765625,
            "normalizedY": 0.492145751953125,
            "t": 1652312315276,
            "normalizedT": 605
        },
        {
            "x": 367.33331298828125,
            "y": 238.0728759765625,
            "normalizedX": 0.7346666259765625,
            "normalizedY": 0.476145751953125,
            "t": 1652312315293,
            "normalizedT": 622
        },
        {
            "x": 368.33331298828125,
            "y": 232.0728759765625,
            "normalizedX": 0.7366666259765625,
            "normalizedY": 0.464145751953125,
            "t": 1652312315310,
            "normalizedT": 639
        },
        {
            "x": 370.33331298828125,
            "y": 227.0728759765625,
            "normalizedX": 0.7406666259765625,
            "normalizedY": 0.454145751953125,
            "t": 1652312315326,
            "normalizedT": 655
        },
        {
            "x": 373.33331298828125,
            "y": 216.0728759765625,
            "normalizedX": 0.7466666259765625,
            "normalizedY": 0.432145751953125,
            "t": 1652312315343,
            "normalizedT": 672
        },
        {
            "x": 376.33331298828125,
            "y": 208.0728759765625,
            "normalizedX": 0.7526666259765625,
            "normalizedY": 0.416145751953125,
            "t": 1652312315360,
            "normalizedT": 689
        },
        {
            "x": 380.33331298828125,
            "y": 200.0728759765625,
            "normalizedX": 0.7606666259765625,
            "normalizedY": 0.400145751953125,
            "t": 1652312315376,
            "normalizedT": 705
        },
        {
            "x": 384.33331298828125,
            "y": 191.0728759765625,
            "normalizedX": 0.7686666259765625,
            "normalizedY": 0.382145751953125,
            "t": 1652312315393,
            "normalizedT": 722
        },
        {
            "x": 386.33331298828125,
            "y": 185.0728759765625,
            "normalizedX": 0.7726666259765625,
            "normalizedY": 0.370145751953125,
            "t": 1652312315410,
            "normalizedT": 739
        },
        {
            "x": 393.33331298828125,
            "y": 169.0728759765625,
            "normalizedX": 0.7866666259765625,
            "normalizedY": 0.338145751953125,
            "t": 1652312315426,
            "normalizedT": 755
        },
        {
            "x": 398.33331298828125,
            "y": 157.0728759765625,
            "normalizedX": 0.7966666259765625,
            "normalizedY": 0.314145751953125,
            "t": 1652312315443,
            "normalizedT": 772
        },
        {
            "x": 401.33331298828125,
            "y": 151.0728759765625,
            "normalizedX": 0.8026666259765625,
            "normalizedY": 0.302145751953125,
            "t": 1652312315460,
            "normalizedT": 789
        },
        {
            "x": 405.33331298828125,
            "y": 142.0728759765625,
            "normalizedX": 0.8106666259765625,
            "normalizedY": 0.284145751953125,
            "t": 1652312315476,
            "normalizedT": 805
        },
        {
            "x": 410.33331298828125,
            "y": 133.0728759765625,
            "normalizedX": 0.8206666259765625,
            "normalizedY": 0.266145751953125,
            "t": 1652312315493,
            "normalizedT": 822
        },
        {
            "x": 415.33331298828125,
            "y": 122.0728759765625,
            "normalizedX": 0.8306666259765625,
            "normalizedY": 0.244145751953125,
            "t": 1652312315510,
            "normalizedT": 839
        },
        {
            "x": 419.33331298828125,
            "y": 113.0728759765625,
            "normalizedX": 0.8386666259765625,
            "normalizedY": 0.226145751953125,
            "t": 1652312315526,
            "normalizedT": 855
        },
        {
            "x": 423.33331298828125,
            "y": 106.0728759765625,
            "normalizedX": 0.8466666259765625,
            "normalizedY": 0.212145751953125,
            "t": 1652312315543,
            "normalizedT": 872
        },
        {
            "x": 427.33331298828125,
            "y": 98.0728759765625,
            "normalizedX": 0.8546666259765625,
            "normalizedY": 0.196145751953125,
            "t": 1652312315560,
            "normalizedT": 889
        },
        {
            "x": 431.33331298828125,
            "y": 92.0728759765625,
            "normalizedX": 0.8626666259765625,
            "normalizedY": 0.184145751953125,
            "t": 1652312315576,
            "normalizedT": 905
        },
        {
            "x": 433.33331298828125,
            "y": 88.0728759765625,
            "normalizedX": 0.8666666259765625,
            "normalizedY": 0.176145751953125,
            "t": 1652312315593,
            "normalizedT": 922
        },
        {
            "x": 439.33331298828125,
            "y": 78.0728759765625,
            "normalizedX": 0.8786666259765625,
            "normalizedY": 0.156145751953125,
            "t": 1652312315610,
            "normalizedT": 939
        },
        {
            "x": 443.33331298828125,
            "y": 70.0728759765625,
            "normalizedX": 0.8866666259765625,
            "normalizedY": 0.140145751953125,
            "t": 1652312315626,
            "normalizedT": 955
        },
        {
            "x": 445.33331298828125,
            "y": 66.0728759765625,
            "normalizedX": 0.8906666259765625,
            "normalizedY": 0.132145751953125,
            "t": 1652312315643,
            "normalizedT": 972
        },
        {
            "x": 448.33331298828125,
            "y": 61.0728759765625,
            "normalizedX": 0.8966666259765625,
            "normalizedY": 0.122145751953125,
            "t": 1652312315660,
            "normalizedT": 989
        },
        {
            "x": 448.33331298828125,
            "y": 60.0728759765625,
            "normalizedX": 0.8966666259765625,
            "normalizedY": 0.120145751953125,
            "t": 1652312315676,
            "normalizedT": 1005
        }
    ],
    [
        {
            "x": 465.33331298828125,
            "y": 116.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.232145751953125,
            "t": 1652312316009,
            "normalizedT": 0
        },
        {
            "x": 465.33331298828125,
            "y": 117.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.234145751953125,
            "t": 1652312316026,
            "normalizedT": 17
        },
        {
            "x": 465.33331298828125,
            "y": 119.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.238145751953125,
            "t": 1652312316043,
            "normalizedT": 34
        },
        {
            "x": 465.33331298828125,
            "y": 121.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.242145751953125,
            "t": 1652312316060,
            "normalizedT": 51
        },
        {
            "x": 465.33331298828125,
            "y": 125.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.250145751953125,
            "t": 1652312316076,
            "normalizedT": 67
        },
        {
            "x": 465.33331298828125,
            "y": 130.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.260145751953125,
            "t": 1652312316093,
            "normalizedT": 84
        },
        {
            "x": 465.33331298828125,
            "y": 136.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.272145751953125,
            "t": 1652312316110,
            "normalizedT": 101
        },
        {
            "x": 462.33331298828125,
            "y": 142.0728759765625,
            "normalizedX": 0.9246666259765625,
            "normalizedY": 0.284145751953125,
            "t": 1652312316126,
            "normalizedT": 117
        },
        {
            "x": 460.33331298828125,
            "y": 148.0728759765625,
            "normalizedX": 0.9206666259765625,
            "normalizedY": 0.296145751953125,
            "t": 1652312316143,
            "normalizedT": 134
        },
        {
            "x": 458.33331298828125,
            "y": 152.0728759765625,
            "normalizedX": 0.9166666259765625,
            "normalizedY": 0.304145751953125,
            "t": 1652312316160,
            "normalizedT": 151
        },
        {
            "x": 453.33331298828125,
            "y": 161.0728759765625,
            "normalizedX": 0.9066666259765624,
            "normalizedY": 0.322145751953125,
            "t": 1652312316176,
            "normalizedT": 167
        },
        {
            "x": 451.33331298828125,
            "y": 167.0728759765625,
            "normalizedX": 0.9026666259765626,
            "normalizedY": 0.334145751953125,
            "t": 1652312316193,
            "normalizedT": 184
        },
        {
            "x": 446.33331298828125,
            "y": 174.0728759765625,
            "normalizedX": 0.8926666259765625,
            "normalizedY": 0.348145751953125,
            "t": 1652312316210,
            "normalizedT": 201
        },
        {
            "x": 442.33331298828125,
            "y": 182.0728759765625,
            "normalizedX": 0.8846666259765625,
            "normalizedY": 0.364145751953125,
            "t": 1652312316226,
            "normalizedT": 217
        },
        {
            "x": 439.33331298828125,
            "y": 188.0728759765625,
            "normalizedX": 0.8786666259765625,
            "normalizedY": 0.376145751953125,
            "t": 1652312316243,
            "normalizedT": 234
        },
        {
            "x": 433.33331298828125,
            "y": 195.0728759765625,
            "normalizedX": 0.8666666259765625,
            "normalizedY": 0.390145751953125,
            "t": 1652312316260,
            "normalizedT": 251
        },
        {
            "x": 430.33331298828125,
            "y": 201.0728759765625,
            "normalizedX": 0.8606666259765625,
            "normalizedY": 0.402145751953125,
            "t": 1652312316277,
            "normalizedT": 268
        },
        {
            "x": 425.33331298828125,
            "y": 208.0728759765625,
            "normalizedX": 0.8506666259765625,
            "normalizedY": 0.416145751953125,
            "t": 1652312316293,
            "normalizedT": 284
        },
        {
            "x": 417.33331298828125,
            "y": 217.0728759765625,
            "normalizedX": 0.8346666259765625,
            "normalizedY": 0.434145751953125,
            "t": 1652312316310,
            "normalizedT": 301
        },
        {
            "x": 411.33331298828125,
            "y": 224.0728759765625,
            "normalizedX": 0.8226666259765625,
            "normalizedY": 0.448145751953125,
            "t": 1652312316326,
            "normalizedT": 317
        },
        {
            "x": 405.33331298828125,
            "y": 232.0728759765625,
            "normalizedX": 0.8106666259765625,
            "normalizedY": 0.464145751953125,
            "t": 1652312316343,
            "normalizedT": 334
        },
        {
            "x": 399.33331298828125,
            "y": 240.0728759765625,
            "normalizedX": 0.7986666259765625,
            "normalizedY": 0.480145751953125,
            "t": 1652312316360,
            "normalizedT": 351
        },
        {
            "x": 393.33331298828125,
            "y": 248.0728759765625,
            "normalizedX": 0.7866666259765625,
            "normalizedY": 0.496145751953125,
            "t": 1652312316376,
            "normalizedT": 367
        },
        {
            "x": 386.33331298828125,
            "y": 260.0728759765625,
            "normalizedX": 0.7726666259765625,
            "normalizedY": 0.520145751953125,
            "t": 1652312316393,
            "normalizedT": 384
        },
        {
            "x": 384.33331298828125,
            "y": 267.0728759765625,
            "normalizedX": 0.7686666259765625,
            "normalizedY": 0.534145751953125,
            "t": 1652312316410,
            "normalizedT": 401
        },
        {
            "x": 379.33331298828125,
            "y": 280.0728759765625,
            "normalizedX": 0.7586666259765625,
            "normalizedY": 0.560145751953125,
            "t": 1652312316426,
            "normalizedT": 417
        },
        {
            "x": 375.33331298828125,
            "y": 291.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.582145751953125,
            "t": 1652312316443,
            "normalizedT": 434
        },
        {
            "x": 373.33331298828125,
            "y": 300.0728759765625,
            "normalizedX": 0.7466666259765625,
            "normalizedY": 0.600145751953125,
            "t": 1652312316460,
            "normalizedT": 451
        },
        {
            "x": 372.33331298828125,
            "y": 304.0728759765625,
            "normalizedX": 0.7446666259765625,
            "normalizedY": 0.608145751953125,
            "t": 1652312316476,
            "normalizedT": 467
        },
        {
            "x": 369.33331298828125,
            "y": 314.0728759765625,
            "normalizedX": 0.7386666259765625,
            "normalizedY": 0.628145751953125,
            "t": 1652312316493,
            "normalizedT": 484
        },
        {
            "x": 369.33331298828125,
            "y": 318.0728759765625,
            "normalizedX": 0.7386666259765625,
            "normalizedY": 0.636145751953125,
            "t": 1652312316510,
            "normalizedT": 501
        },
        {
            "x": 367.33331298828125,
            "y": 326.0728759765625,
            "normalizedX": 0.7346666259765625,
            "normalizedY": 0.652145751953125,
            "t": 1652312316527,
            "normalizedT": 518
        },
        {
            "x": 366.33331298828125,
            "y": 330.0728759765625,
            "normalizedX": 0.7326666259765625,
            "normalizedY": 0.660145751953125,
            "t": 1652312316543,
            "normalizedT": 534
        },
        {
            "x": 365.33331298828125,
            "y": 342.0728759765625,
            "normalizedX": 0.7306666259765625,
            "normalizedY": 0.684145751953125,
            "t": 1652312316560,
            "normalizedT": 551
        },
        {
            "x": 363.33331298828125,
            "y": 349.0728759765625,
            "normalizedX": 0.7266666259765625,
            "normalizedY": 0.698145751953125,
            "t": 1652312316576,
            "normalizedT": 567
        },
        {
            "x": 361.33331298828125,
            "y": 357.0728759765625,
            "normalizedX": 0.7226666259765625,
            "normalizedY": 0.714145751953125,
            "t": 1652312316593,
            "normalizedT": 584
        },
        {
            "x": 359.33331298828125,
            "y": 369.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.738145751953125,
            "t": 1652312316610,
            "normalizedT": 601
        },
        {
            "x": 357.33331298828125,
            "y": 377.0728759765625,
            "normalizedX": 0.7146666259765625,
            "normalizedY": 0.754145751953125,
            "t": 1652312316626,
            "normalizedT": 617
        },
        {
            "x": 355.33331298828125,
            "y": 383.0728759765625,
            "normalizedX": 0.7106666259765625,
            "normalizedY": 0.766145751953125,
            "t": 1652312316643,
            "normalizedT": 634
        },
        {
            "x": 352.33331298828125,
            "y": 390.0728759765625,
            "normalizedX": 0.7046666259765625,
            "normalizedY": 0.780145751953125,
            "t": 1652312316660,
            "normalizedT": 651
        },
        {
            "x": 344.33331298828125,
            "y": 408.0728759765625,
            "normalizedX": 0.6886666259765625,
            "normalizedY": 0.816145751953125,
            "t": 1652312316676,
            "normalizedT": 667
        },
        {
            "x": 339.33331298828125,
            "y": 419.0728759765625,
            "normalizedX": 0.6786666259765625,
            "normalizedY": 0.838145751953125,
            "t": 1652312316693,
            "normalizedT": 684
        },
        {
            "x": 335.33331298828125,
            "y": 426.0728759765625,
            "normalizedX": 0.6706666259765625,
            "normalizedY": 0.852145751953125,
            "t": 1652312316710,
            "normalizedT": 701
        },
        {
            "x": 331.33331298828125,
            "y": 434.0728759765625,
            "normalizedX": 0.6626666259765625,
            "normalizedY": 0.868145751953125,
            "t": 1652312316727,
            "normalizedT": 718
        },
        {
            "x": 329.33331298828125,
            "y": 438.0728759765625,
            "normalizedX": 0.6586666259765624,
            "normalizedY": 0.876145751953125,
            "t": 1652312316743,
            "normalizedT": 734
        },
        {
            "x": 327.33331298828125,
            "y": 440.0728759765625,
            "normalizedX": 0.6546666259765626,
            "normalizedY": 0.880145751953125,
            "t": 1652312316760,
            "normalizedT": 751
        },
        {
            "x": 326.33331298828125,
            "y": 442.0728759765625,
            "normalizedX": 0.6526666259765626,
            "normalizedY": 0.884145751953125,
            "t": 1652312316777,
            "normalizedT": 768
        },
        {
            "x": 325.33331298828125,
            "y": 444.0728759765625,
            "normalizedX": 0.6506666259765626,
            "normalizedY": 0.888145751953125,
            "t": 1652312316793,
            "normalizedT": 784
        },
        {
            "x": 324.33331298828125,
            "y": 446.0728759765625,
            "normalizedX": 0.6486666259765625,
            "normalizedY": 0.892145751953125,
            "t": 1652312316810,
            "normalizedT": 801
        },
        {
            "x": 323.33331298828125,
            "y": 448.0728759765625,
            "normalizedX": 0.6466666259765625,
            "normalizedY": 0.896145751953125,
            "t": 1652312316826,
            "normalizedT": 817
        },
        {
            "x": 322.33331298828125,
            "y": 449.0728759765625,
            "normalizedX": 0.6446666259765625,
            "normalizedY": 0.898145751953125,
            "t": 1652312316843,
            "normalizedT": 834
        },
        {
            "x": 321.33331298828125,
            "y": 451.0728759765625,
            "normalizedX": 0.6426666259765625,
            "normalizedY": 0.902145751953125,
            "t": 1652312316860,
            "normalizedT": 851
        },
        {
            "x": 319.33331298828125,
            "y": 454.0728759765625,
            "normalizedX": 0.6386666259765625,
            "normalizedY": 0.908145751953125,
            "t": 1652312316876,
            "normalizedT": 867
        },
        {
            "x": 317.33331298828125,
            "y": 456.0728759765625,
            "normalizedX": 0.6346666259765625,
            "normalizedY": 0.912145751953125,
            "t": 1652312316893,
            "normalizedT": 884
        },
        {
            "x": 316.33331298828125,
            "y": 459.0728759765625,
            "normalizedX": 0.6326666259765625,
            "normalizedY": 0.918145751953125,
            "t": 1652312316910,
            "normalizedT": 901
        },
        {
            "x": 315.33331298828125,
            "y": 461.0728759765625,
            "normalizedX": 0.6306666259765625,
            "normalizedY": 0.922145751953125,
            "t": 1652312316926,
            "normalizedT": 917
        }
    ],
    [
        {
            "x": 413.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.8266666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312317673,
            "normalizedT": 0
        },
        {
            "x": 419.33331298828125,
            "y": 455.0728759765625,
            "normalizedX": 0.8386666259765625,
            "normalizedY": 0.910145751953125,
            "t": 1652312317743,
            "normalizedT": 70
        },
        {
            "x": 429.33331298828125,
            "y": 439.0728759765625,
            "normalizedX": 0.8586666259765625,
            "normalizedY": 0.878145751953125,
            "t": 1652312317760,
            "normalizedT": 87
        },
        {
            "x": 443.33331298828125,
            "y": 417.0728759765625,
            "normalizedX": 0.8866666259765625,
            "normalizedY": 0.834145751953125,
            "t": 1652312317777,
            "normalizedT": 104
        },
        {
            "x": 451.33331298828125,
            "y": 401.0728759765625,
            "normalizedX": 0.9026666259765626,
            "normalizedY": 0.802145751953125,
            "t": 1652312317793,
            "normalizedT": 120
        },
        {
            "x": 458.33331298828125,
            "y": 388.0728759765625,
            "normalizedX": 0.9166666259765625,
            "normalizedY": 0.776145751953125,
            "t": 1652312317810,
            "normalizedT": 137
        },
        {
            "x": 465.33331298828125,
            "y": 375.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.750145751953125,
            "t": 1652312317827,
            "normalizedT": 154
        },
        {
            "x": 471.33331298828125,
            "y": 364.0728759765625,
            "normalizedX": 0.9426666259765625,
            "normalizedY": 0.728145751953125,
            "t": 1652312317840,
            "normalizedT": 167
        }
    ]
];


export const GESTURE_CORNERS = [
    [
        {
            "x": 37.33331298828125,
            "y": 149.0728759765625,
            "normalizedX": 0.0746666259765625,
            "normalizedY": 0.298145751953125,
            "t": 1652312401584,
            "normalizedT": 0
        },
        {
            "x": 39.33331298828125,
            "y": 142.0728759765625,
            "normalizedX": 0.0786666259765625,
            "normalizedY": 0.284145751953125,
            "t": 1652312401664,
            "normalizedT": 80
        },
        {
            "x": 43.33331298828125,
            "y": 132.0728759765625,
            "normalizedX": 0.0866666259765625,
            "normalizedY": 0.264145751953125,
            "t": 1652312401680,
            "normalizedT": 96
        },
        {
            "x": 46.33331298828125,
            "y": 118.0728759765625,
            "normalizedX": 0.0926666259765625,
            "normalizedY": 0.236145751953125,
            "t": 1652312401697,
            "normalizedT": 113
        },
        {
            "x": 55.33331298828125,
            "y": 84.0728759765625,
            "normalizedX": 0.1106666259765625,
            "normalizedY": 0.168145751953125,
            "t": 1652312401714,
            "normalizedT": 130
        },
        {
            "x": 60.33331298828125,
            "y": 68.0728759765625,
            "normalizedX": 0.1206666259765625,
            "normalizedY": 0.136145751953125,
            "t": 1652312401730,
            "normalizedT": 146
        },
        {
            "x": 66.33331298828125,
            "y": 54.0728759765625,
            "normalizedX": 0.1326666259765625,
            "normalizedY": 0.108145751953125,
            "t": 1652312401747,
            "normalizedT": 163
        },
        {
            "x": 69.33331298828125,
            "y": 50.0728759765625,
            "normalizedX": 0.1386666259765625,
            "normalizedY": 0.100145751953125,
            "t": 1652312401763,
            "normalizedT": 179
        },
        {
            "x": 71.33331298828125,
            "y": 46.0728759765625,
            "normalizedX": 0.1426666259765625,
            "normalizedY": 0.092145751953125,
            "t": 1652312401780,
            "normalizedT": 196
        },
        {
            "x": 71.33331298828125,
            "y": 46.0728759765625,
            "normalizedX": 0.1426666259765625,
            "normalizedY": 0.092145751953125,
            "t": 1652312401797,
            "normalizedT": 213
        },
        {
            "x": 72.33331298828125,
            "y": 44.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.088145751953125,
            "t": 1652312401980,
            "normalizedT": 396
        },
        {
            "x": 75.33331298828125,
            "y": 40.0728759765625,
            "normalizedX": 0.1506666259765625,
            "normalizedY": 0.080145751953125,
            "t": 1652312401997,
            "normalizedT": 413
        },
        {
            "x": 76.33331298828125,
            "y": 38.0728759765625,
            "normalizedX": 0.1526666259765625,
            "normalizedY": 0.076145751953125,
            "t": 1652312402014,
            "normalizedT": 430
        },
        {
            "x": 77.33331298828125,
            "y": 35.0728759765625,
            "normalizedX": 0.1546666259765625,
            "normalizedY": 0.070145751953125,
            "t": 1652312402030,
            "normalizedT": 446
        },
        {
            "x": 78.33331298828125,
            "y": 33.0728759765625,
            "normalizedX": 0.1566666259765625,
            "normalizedY": 0.066145751953125,
            "t": 1652312402047,
            "normalizedT": 463
        },
        {
            "x": 79.33331298828125,
            "y": 32.0728759765625,
            "normalizedX": 0.1586666259765625,
            "normalizedY": 0.064145751953125,
            "t": 1652312402064,
            "normalizedT": 480
        },
        {
            "x": 79.33331298828125,
            "y": 31.0728759765625,
            "normalizedX": 0.1586666259765625,
            "normalizedY": 0.062145751953125,
            "t": 1652312402080,
            "normalizedT": 496
        },
        {
            "x": 80.33331298828125,
            "y": 31.0728759765625,
            "normalizedX": 0.1606666259765625,
            "normalizedY": 0.062145751953125,
            "t": 1652312402097,
            "normalizedT": 513
        },
        {
            "x": 80.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.1606666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312402113,
            "normalizedT": 529
        },
        {
            "x": 80.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.1606666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312402130,
            "normalizedT": 546
        },
        {
            "x": 81.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.1626666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312402147,
            "normalizedT": 563
        },
        {
            "x": 81.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.1626666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312402247,
            "normalizedT": 663
        },
        {
            "x": 81.33331298828125,
            "y": 33.0728759765625,
            "normalizedX": 0.1626666259765625,
            "normalizedY": 0.066145751953125,
            "t": 1652312402264,
            "normalizedT": 680
        },
        {
            "x": 81.33331298828125,
            "y": 38.0728759765625,
            "normalizedX": 0.1626666259765625,
            "normalizedY": 0.076145751953125,
            "t": 1652312402280,
            "normalizedT": 696
        },
        {
            "x": 81.33331298828125,
            "y": 44.0728759765625,
            "normalizedX": 0.1626666259765625,
            "normalizedY": 0.088145751953125,
            "t": 1652312402297,
            "normalizedT": 713
        },
        {
            "x": 81.33331298828125,
            "y": 57.0728759765625,
            "normalizedX": 0.1626666259765625,
            "normalizedY": 0.114145751953125,
            "t": 1652312402314,
            "normalizedT": 730
        },
        {
            "x": 82.33331298828125,
            "y": 68.0728759765625,
            "normalizedX": 0.1646666259765625,
            "normalizedY": 0.136145751953125,
            "t": 1652312402330,
            "normalizedT": 746
        },
        {
            "x": 84.33331298828125,
            "y": 82.0728759765625,
            "normalizedX": 0.1686666259765625,
            "normalizedY": 0.164145751953125,
            "t": 1652312402347,
            "normalizedT": 763
        },
        {
            "x": 85.33331298828125,
            "y": 94.0728759765625,
            "normalizedX": 0.1706666259765625,
            "normalizedY": 0.188145751953125,
            "t": 1652312402363,
            "normalizedT": 779
        },
        {
            "x": 89.33331298828125,
            "y": 107.0728759765625,
            "normalizedX": 0.1786666259765625,
            "normalizedY": 0.214145751953125,
            "t": 1652312402380,
            "normalizedT": 796
        },
        {
            "x": 90.33331298828125,
            "y": 117.0728759765625,
            "normalizedX": 0.1806666259765625,
            "normalizedY": 0.234145751953125,
            "t": 1652312402397,
            "normalizedT": 813
        },
        {
            "x": 93.33331298828125,
            "y": 128.0728759765625,
            "normalizedX": 0.1866666259765625,
            "normalizedY": 0.256145751953125,
            "t": 1652312402414,
            "normalizedT": 830
        },
        {
            "x": 95.33331298828125,
            "y": 132.0728759765625,
            "normalizedX": 0.1906666259765625,
            "normalizedY": 0.264145751953125,
            "t": 1652312402430,
            "normalizedT": 846
        },
        {
            "x": 95.33331298828125,
            "y": 134.0728759765625,
            "normalizedX": 0.1906666259765625,
            "normalizedY": 0.268145751953125,
            "t": 1652312402447,
            "normalizedT": 863
        },
        {
            "x": 98.33331298828125,
            "y": 136.0728759765625,
            "normalizedX": 0.1966666259765625,
            "normalizedY": 0.272145751953125,
            "t": 1652312402463,
            "normalizedT": 879
        },
        {
            "x": 99.33331298828125,
            "y": 140.0728759765625,
            "normalizedX": 0.1986666259765625,
            "normalizedY": 0.280145751953125,
            "t": 1652312402480,
            "normalizedT": 896
        },
        {
            "x": 102.33331298828125,
            "y": 144.0728759765625,
            "normalizedX": 0.2046666259765625,
            "normalizedY": 0.288145751953125,
            "t": 1652312402497,
            "normalizedT": 913
        },
        {
            "x": 104.33331298828125,
            "y": 148.0728759765625,
            "normalizedX": 0.2086666259765625,
            "normalizedY": 0.296145751953125,
            "t": 1652312402514,
            "normalizedT": 930
        },
        {
            "x": 107.33331298828125,
            "y": 151.0728759765625,
            "normalizedX": 0.2146666259765625,
            "normalizedY": 0.302145751953125,
            "t": 1652312402530,
            "normalizedT": 946
        },
        {
            "x": 110.33331298828125,
            "y": 155.0728759765625,
            "normalizedX": 0.2206666259765625,
            "normalizedY": 0.310145751953125,
            "t": 1652312402547,
            "normalizedT": 963
        },
        {
            "x": 111.33331298828125,
            "y": 156.0728759765625,
            "normalizedX": 0.2226666259765625,
            "normalizedY": 0.312145751953125,
            "t": 1652312402563,
            "normalizedT": 979
        },
        {
            "x": 111.33331298828125,
            "y": 157.0728759765625,
            "normalizedX": 0.2226666259765625,
            "normalizedY": 0.314145751953125,
            "t": 1652312402580,
            "normalizedT": 996
        }
    ],
    [
        {
            "x": 357.33331298828125,
            "y": 28.0728759765625,
            "normalizedX": 0.7146666259765625,
            "normalizedY": 0.056145751953125,
            "t": 1652312403520,
            "normalizedT": 0
        },
        {
            "x": 357.33331298828125,
            "y": 28.0728759765625,
            "normalizedX": 0.7146666259765625,
            "normalizedY": 0.056145751953125,
            "t": 1652312403747,
            "normalizedT": 227
        },
        {
            "x": 358.33331298828125,
            "y": 29.0728759765625,
            "normalizedX": 0.7166666259765625,
            "normalizedY": 0.058145751953125,
            "t": 1652312403780,
            "normalizedT": 260
        },
        {
            "x": 359.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312403797,
            "normalizedT": 277
        },
        {
            "x": 361.33331298828125,
            "y": 30.0728759765625,
            "normalizedX": 0.7226666259765625,
            "normalizedY": 0.060145751953125,
            "t": 1652312403814,
            "normalizedT": 294
        },
        {
            "x": 361.33331298828125,
            "y": 31.0728759765625,
            "normalizedX": 0.7226666259765625,
            "normalizedY": 0.062145751953125,
            "t": 1652312403830,
            "normalizedT": 310
        },
        {
            "x": 362.33331298828125,
            "y": 32.0728759765625,
            "normalizedX": 0.7246666259765625,
            "normalizedY": 0.064145751953125,
            "t": 1652312403847,
            "normalizedT": 327
        },
        {
            "x": 363.33331298828125,
            "y": 32.0728759765625,
            "normalizedX": 0.7266666259765625,
            "normalizedY": 0.064145751953125,
            "t": 1652312403864,
            "normalizedT": 344
        },
        {
            "x": 364.33331298828125,
            "y": 33.0728759765625,
            "normalizedX": 0.7286666259765625,
            "normalizedY": 0.066145751953125,
            "t": 1652312403880,
            "normalizedT": 360
        },
        {
            "x": 365.33331298828125,
            "y": 33.0728759765625,
            "normalizedX": 0.7306666259765625,
            "normalizedY": 0.066145751953125,
            "t": 1652312403897,
            "normalizedT": 377
        },
        {
            "x": 366.33331298828125,
            "y": 35.0728759765625,
            "normalizedX": 0.7326666259765625,
            "normalizedY": 0.070145751953125,
            "t": 1652312403914,
            "normalizedT": 394
        },
        {
            "x": 367.33331298828125,
            "y": 36.0728759765625,
            "normalizedX": 0.7346666259765625,
            "normalizedY": 0.072145751953125,
            "t": 1652312403930,
            "normalizedT": 410
        },
        {
            "x": 370.33331298828125,
            "y": 38.0728759765625,
            "normalizedX": 0.7406666259765625,
            "normalizedY": 0.076145751953125,
            "t": 1652312403947,
            "normalizedT": 427
        },
        {
            "x": 371.33331298828125,
            "y": 39.0728759765625,
            "normalizedX": 0.7426666259765625,
            "normalizedY": 0.078145751953125,
            "t": 1652312403964,
            "normalizedT": 444
        },
        {
            "x": 373.33331298828125,
            "y": 40.0728759765625,
            "normalizedX": 0.7466666259765625,
            "normalizedY": 0.080145751953125,
            "t": 1652312403980,
            "normalizedT": 460
        },
        {
            "x": 374.33331298828125,
            "y": 41.0728759765625,
            "normalizedX": 0.7486666259765625,
            "normalizedY": 0.082145751953125,
            "t": 1652312403997,
            "normalizedT": 477
        },
        {
            "x": 375.33331298828125,
            "y": 42.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.084145751953125,
            "t": 1652312404014,
            "normalizedT": 494
        },
        {
            "x": 375.33331298828125,
            "y": 43.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.086145751953125,
            "t": 1652312404030,
            "normalizedT": 510
        },
        {
            "x": 375.33331298828125,
            "y": 44.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.088145751953125,
            "t": 1652312404047,
            "normalizedT": 527
        },
        {
            "x": 376.33331298828125,
            "y": 46.0728759765625,
            "normalizedX": 0.7526666259765625,
            "normalizedY": 0.092145751953125,
            "t": 1652312404064,
            "normalizedT": 544
        },
        {
            "x": 377.33331298828125,
            "y": 48.0728759765625,
            "normalizedX": 0.7546666259765625,
            "normalizedY": 0.096145751953125,
            "t": 1652312404080,
            "normalizedT": 560
        },
        {
            "x": 377.33331298828125,
            "y": 49.0728759765625,
            "normalizedX": 0.7546666259765625,
            "normalizedY": 0.098145751953125,
            "t": 1652312404097,
            "normalizedT": 577
        },
        {
            "x": 377.33331298828125,
            "y": 52.0728759765625,
            "normalizedX": 0.7546666259765625,
            "normalizedY": 0.104145751953125,
            "t": 1652312404114,
            "normalizedT": 594
        },
        {
            "x": 377.33331298828125,
            "y": 54.0728759765625,
            "normalizedX": 0.7546666259765625,
            "normalizedY": 0.108145751953125,
            "t": 1652312404130,
            "normalizedT": 610
        },
        {
            "x": 377.33331298828125,
            "y": 57.0728759765625,
            "normalizedX": 0.7546666259765625,
            "normalizedY": 0.114145751953125,
            "t": 1652312404147,
            "normalizedT": 627
        },
        {
            "x": 376.33331298828125,
            "y": 60.0728759765625,
            "normalizedX": 0.7526666259765625,
            "normalizedY": 0.120145751953125,
            "t": 1652312404164,
            "normalizedT": 644
        },
        {
            "x": 375.33331298828125,
            "y": 62.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.124145751953125,
            "t": 1652312404180,
            "normalizedT": 660
        },
        {
            "x": 375.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404197,
            "normalizedT": 677
        },
        {
            "x": 374.33331298828125,
            "y": 66.0728759765625,
            "normalizedX": 0.7486666259765625,
            "normalizedY": 0.132145751953125,
            "t": 1652312404214,
            "normalizedT": 694
        },
        {
            "x": 373.33331298828125,
            "y": 68.0728759765625,
            "normalizedX": 0.7466666259765625,
            "normalizedY": 0.136145751953125,
            "t": 1652312404230,
            "normalizedT": 710
        },
        {
            "x": 372.33331298828125,
            "y": 70.0728759765625,
            "normalizedX": 0.7446666259765625,
            "normalizedY": 0.140145751953125,
            "t": 1652312404247,
            "normalizedT": 727
        },
        {
            "x": 371.33331298828125,
            "y": 71.0728759765625,
            "normalizedX": 0.7426666259765625,
            "normalizedY": 0.142145751953125,
            "t": 1652312404264,
            "normalizedT": 744
        },
        {
            "x": 371.33331298828125,
            "y": 71.0728759765625,
            "normalizedX": 0.7426666259765625,
            "normalizedY": 0.142145751953125,
            "t": 1652312404280,
            "normalizedT": 760
        },
        {
            "x": 369.33331298828125,
            "y": 72.0728759765625,
            "normalizedX": 0.7386666259765625,
            "normalizedY": 0.144145751953125,
            "t": 1652312404297,
            "normalizedT": 777
        },
        {
            "x": 369.33331298828125,
            "y": 72.0728759765625,
            "normalizedX": 0.7386666259765625,
            "normalizedY": 0.144145751953125,
            "t": 1652312404314,
            "normalizedT": 794
        },
        {
            "x": 368.33331298828125,
            "y": 72.0728759765625,
            "normalizedX": 0.7366666259765625,
            "normalizedY": 0.144145751953125,
            "t": 1652312404347,
            "normalizedT": 827
        },
        {
            "x": 366.33331298828125,
            "y": 72.0728759765625,
            "normalizedX": 0.7326666259765625,
            "normalizedY": 0.144145751953125,
            "t": 1652312404364,
            "normalizedT": 844
        },
        {
            "x": 364.33331298828125,
            "y": 72.0728759765625,
            "normalizedX": 0.7286666259765625,
            "normalizedY": 0.144145751953125,
            "t": 1652312404380,
            "normalizedT": 860
        },
        {
            "x": 361.33331298828125,
            "y": 71.0728759765625,
            "normalizedX": 0.7226666259765625,
            "normalizedY": 0.142145751953125,
            "t": 1652312404397,
            "normalizedT": 877
        },
        {
            "x": 359.33331298828125,
            "y": 69.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.138145751953125,
            "t": 1652312404414,
            "normalizedT": 894
        },
        {
            "x": 359.33331298828125,
            "y": 66.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.132145751953125,
            "t": 1652312404430,
            "normalizedT": 910
        },
        {
            "x": 359.33331298828125,
            "y": 66.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.132145751953125,
            "t": 1652312404447,
            "normalizedT": 927
        },
        {
            "x": 359.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404464,
            "normalizedT": 944
        },
        {
            "x": 359.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7186666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404497,
            "normalizedT": 977
        },
        {
            "x": 360.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7206666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404514,
            "normalizedT": 994
        },
        {
            "x": 363.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7266666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404530,
            "normalizedT": 1010
        },
        {
            "x": 366.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7326666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404547,
            "normalizedT": 1027
        },
        {
            "x": 369.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7386666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404564,
            "normalizedT": 1044
        },
        {
            "x": 375.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.7506666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312404580,
            "normalizedT": 1060
        },
        {
            "x": 381.33331298828125,
            "y": 66.0728759765625,
            "normalizedX": 0.7626666259765625,
            "normalizedY": 0.132145751953125,
            "t": 1652312404597,
            "normalizedT": 1077
        },
        {
            "x": 387.33331298828125,
            "y": 70.0728759765625,
            "normalizedX": 0.7746666259765626,
            "normalizedY": 0.140145751953125,
            "t": 1652312404614,
            "normalizedT": 1094
        },
        {
            "x": 390.33331298828125,
            "y": 73.0728759765625,
            "normalizedX": 0.7806666259765624,
            "normalizedY": 0.146145751953125,
            "t": 1652312404630,
            "normalizedT": 1110
        },
        {
            "x": 392.33331298828125,
            "y": 76.0728759765625,
            "normalizedX": 0.7846666259765624,
            "normalizedY": 0.152145751953125,
            "t": 1652312404647,
            "normalizedT": 1127
        },
        {
            "x": 395.33331298828125,
            "y": 81.0728759765625,
            "normalizedX": 0.7906666259765625,
            "normalizedY": 0.162145751953125,
            "t": 1652312404664,
            "normalizedT": 1144
        },
        {
            "x": 395.33331298828125,
            "y": 86.0728759765625,
            "normalizedX": 0.7906666259765625,
            "normalizedY": 0.172145751953125,
            "t": 1652312404680,
            "normalizedT": 1160
        },
        {
            "x": 395.33331298828125,
            "y": 92.0728759765625,
            "normalizedX": 0.7906666259765625,
            "normalizedY": 0.184145751953125,
            "t": 1652312404697,
            "normalizedT": 1177
        },
        {
            "x": 395.33331298828125,
            "y": 96.0728759765625,
            "normalizedX": 0.7906666259765625,
            "normalizedY": 0.192145751953125,
            "t": 1652312404714,
            "normalizedT": 1194
        },
        {
            "x": 395.33331298828125,
            "y": 101.0728759765625,
            "normalizedX": 0.7906666259765625,
            "normalizedY": 0.202145751953125,
            "t": 1652312404730,
            "normalizedT": 1210
        },
        {
            "x": 395.33331298828125,
            "y": 104.0728759765625,
            "normalizedX": 0.7906666259765625,
            "normalizedY": 0.208145751953125,
            "t": 1652312404747,
            "normalizedT": 1227
        },
        {
            "x": 393.33331298828125,
            "y": 109.0728759765625,
            "normalizedX": 0.7866666259765625,
            "normalizedY": 0.218145751953125,
            "t": 1652312404764,
            "normalizedT": 1244
        },
        {
            "x": 392.33331298828125,
            "y": 112.0728759765625,
            "normalizedX": 0.7846666259765624,
            "normalizedY": 0.224145751953125,
            "t": 1652312404780,
            "normalizedT": 1260
        },
        {
            "x": 391.33331298828125,
            "y": 115.0728759765625,
            "normalizedX": 0.7826666259765624,
            "normalizedY": 0.230145751953125,
            "t": 1652312404797,
            "normalizedT": 1277
        },
        {
            "x": 389.33331298828125,
            "y": 116.0728759765625,
            "normalizedX": 0.7786666259765626,
            "normalizedY": 0.232145751953125,
            "t": 1652312404814,
            "normalizedT": 1294
        },
        {
            "x": 387.33331298828125,
            "y": 117.0728759765625,
            "normalizedX": 0.7746666259765626,
            "normalizedY": 0.234145751953125,
            "t": 1652312404830,
            "normalizedT": 1310
        },
        {
            "x": 386.33331298828125,
            "y": 118.0728759765625,
            "normalizedX": 0.7726666259765625,
            "normalizedY": 0.236145751953125,
            "t": 1652312404847,
            "normalizedT": 1327
        },
        {
            "x": 385.33331298828125,
            "y": 118.0728759765625,
            "normalizedX": 0.7706666259765625,
            "normalizedY": 0.236145751953125,
            "t": 1652312404864,
            "normalizedT": 1344
        },
        {
            "x": 383.33331298828125,
            "y": 118.0728759765625,
            "normalizedX": 0.7666666259765625,
            "normalizedY": 0.236145751953125,
            "t": 1652312404880,
            "normalizedT": 1360
        },
        {
            "x": 382.33331298828125,
            "y": 116.0728759765625,
            "normalizedX": 0.7646666259765625,
            "normalizedY": 0.232145751953125,
            "t": 1652312404897,
            "normalizedT": 1377
        },
        {
            "x": 381.33331298828125,
            "y": 113.0728759765625,
            "normalizedX": 0.7626666259765625,
            "normalizedY": 0.226145751953125,
            "t": 1652312404914,
            "normalizedT": 1394
        },
        {
            "x": 381.33331298828125,
            "y": 112.0728759765625,
            "normalizedX": 0.7626666259765625,
            "normalizedY": 0.224145751953125,
            "t": 1652312404930,
            "normalizedT": 1410
        },
        {
            "x": 382.33331298828125,
            "y": 109.0728759765625,
            "normalizedX": 0.7646666259765625,
            "normalizedY": 0.218145751953125,
            "t": 1652312404947,
            "normalizedT": 1427
        },
        {
            "x": 384.33331298828125,
            "y": 107.0728759765625,
            "normalizedX": 0.7686666259765625,
            "normalizedY": 0.214145751953125,
            "t": 1652312404964,
            "normalizedT": 1444
        },
        {
            "x": 387.33331298828125,
            "y": 104.0728759765625,
            "normalizedX": 0.7746666259765626,
            "normalizedY": 0.208145751953125,
            "t": 1652312404980,
            "normalizedT": 1460
        },
        {
            "x": 389.33331298828125,
            "y": 102.0728759765625,
            "normalizedX": 0.7786666259765626,
            "normalizedY": 0.204145751953125,
            "t": 1652312404997,
            "normalizedT": 1477
        },
        {
            "x": 392.33331298828125,
            "y": 101.0728759765625,
            "normalizedX": 0.7846666259765624,
            "normalizedY": 0.202145751953125,
            "t": 1652312405014,
            "normalizedT": 1494
        },
        {
            "x": 395.33331298828125,
            "y": 101.0728759765625,
            "normalizedX": 0.7906666259765625,
            "normalizedY": 0.202145751953125,
            "t": 1652312405030,
            "normalizedT": 1510
        },
        {
            "x": 397.33331298828125,
            "y": 101.0728759765625,
            "normalizedX": 0.7946666259765625,
            "normalizedY": 0.202145751953125,
            "t": 1652312405047,
            "normalizedT": 1527
        },
        {
            "x": 401.33331298828125,
            "y": 102.0728759765625,
            "normalizedX": 0.8026666259765625,
            "normalizedY": 0.204145751953125,
            "t": 1652312405064,
            "normalizedT": 1544
        },
        {
            "x": 405.33331298828125,
            "y": 104.0728759765625,
            "normalizedX": 0.8106666259765625,
            "normalizedY": 0.208145751953125,
            "t": 1652312405080,
            "normalizedT": 1560
        },
        {
            "x": 409.33331298828125,
            "y": 108.0728759765625,
            "normalizedX": 0.8186666259765625,
            "normalizedY": 0.216145751953125,
            "t": 1652312405097,
            "normalizedT": 1577
        },
        {
            "x": 414.33331298828125,
            "y": 112.0728759765625,
            "normalizedX": 0.8286666259765625,
            "normalizedY": 0.224145751953125,
            "t": 1652312405114,
            "normalizedT": 1594
        },
        {
            "x": 417.33331298828125,
            "y": 116.0728759765625,
            "normalizedX": 0.8346666259765625,
            "normalizedY": 0.232145751953125,
            "t": 1652312405130,
            "normalizedT": 1610
        },
        {
            "x": 417.33331298828125,
            "y": 120.0728759765625,
            "normalizedX": 0.8346666259765625,
            "normalizedY": 0.240145751953125,
            "t": 1652312405147,
            "normalizedT": 1627
        },
        {
            "x": 417.33331298828125,
            "y": 125.0728759765625,
            "normalizedX": 0.8346666259765625,
            "normalizedY": 0.250145751953125,
            "t": 1652312405164,
            "normalizedT": 1644
        },
        {
            "x": 418.33331298828125,
            "y": 130.0728759765625,
            "normalizedX": 0.8366666259765625,
            "normalizedY": 0.260145751953125,
            "t": 1652312405180,
            "normalizedT": 1660
        },
        {
            "x": 418.33331298828125,
            "y": 134.0728759765625,
            "normalizedX": 0.8366666259765625,
            "normalizedY": 0.268145751953125,
            "t": 1652312405197,
            "normalizedT": 1677
        },
        {
            "x": 418.33331298828125,
            "y": 138.0728759765625,
            "normalizedX": 0.8366666259765625,
            "normalizedY": 0.276145751953125,
            "t": 1652312405214,
            "normalizedT": 1694
        },
        {
            "x": 418.33331298828125,
            "y": 142.0728759765625,
            "normalizedX": 0.8366666259765625,
            "normalizedY": 0.284145751953125,
            "t": 1652312405230,
            "normalizedT": 1710
        },
        {
            "x": 418.33331298828125,
            "y": 145.0728759765625,
            "normalizedX": 0.8366666259765625,
            "normalizedY": 0.290145751953125,
            "t": 1652312405247,
            "normalizedT": 1727
        },
        {
            "x": 417.33331298828125,
            "y": 147.0728759765625,
            "normalizedX": 0.8346666259765625,
            "normalizedY": 0.294145751953125,
            "t": 1652312405264,
            "normalizedT": 1744
        },
        {
            "x": 415.33331298828125,
            "y": 151.0728759765625,
            "normalizedX": 0.8306666259765625,
            "normalizedY": 0.302145751953125,
            "t": 1652312405280,
            "normalizedT": 1760
        },
        {
            "x": 414.33331298828125,
            "y": 152.0728759765625,
            "normalizedX": 0.8286666259765625,
            "normalizedY": 0.304145751953125,
            "t": 1652312405297,
            "normalizedT": 1777
        },
        {
            "x": 413.33331298828125,
            "y": 152.0728759765625,
            "normalizedX": 0.8266666259765625,
            "normalizedY": 0.304145751953125,
            "t": 1652312405314,
            "normalizedT": 1794
        },
        {
            "x": 413.33331298828125,
            "y": 153.0728759765625,
            "normalizedX": 0.8266666259765625,
            "normalizedY": 0.306145751953125,
            "t": 1652312405330,
            "normalizedT": 1810
        },
        {
            "x": 413.33331298828125,
            "y": 153.0728759765625,
            "normalizedX": 0.8266666259765625,
            "normalizedY": 0.306145751953125,
            "t": 1652312405364,
            "normalizedT": 1844
        },
        {
            "x": 411.33331298828125,
            "y": 153.0728759765625,
            "normalizedX": 0.8226666259765625,
            "normalizedY": 0.306145751953125,
            "t": 1652312405397,
            "normalizedT": 1877
        },
        {
            "x": 409.33331298828125,
            "y": 152.0728759765625,
            "normalizedX": 0.8186666259765625,
            "normalizedY": 0.304145751953125,
            "t": 1652312405414,
            "normalizedT": 1894
        },
        {
            "x": 407.33331298828125,
            "y": 150.0728759765625,
            "normalizedX": 0.8146666259765625,
            "normalizedY": 0.300145751953125,
            "t": 1652312405430,
            "normalizedT": 1910
        },
        {
            "x": 407.33331298828125,
            "y": 148.0728759765625,
            "normalizedX": 0.8146666259765625,
            "normalizedY": 0.296145751953125,
            "t": 1652312405447,
            "normalizedT": 1927
        },
        {
            "x": 407.33331298828125,
            "y": 143.0728759765625,
            "normalizedX": 0.8146666259765625,
            "normalizedY": 0.286145751953125,
            "t": 1652312405464,
            "normalizedT": 1944
        },
        {
            "x": 407.33331298828125,
            "y": 138.0728759765625,
            "normalizedX": 0.8146666259765625,
            "normalizedY": 0.276145751953125,
            "t": 1652312405480,
            "normalizedT": 1960
        },
        {
            "x": 412.33331298828125,
            "y": 130.0728759765625,
            "normalizedX": 0.8246666259765625,
            "normalizedY": 0.260145751953125,
            "t": 1652312405497,
            "normalizedT": 1977
        },
        {
            "x": 416.33331298828125,
            "y": 126.0728759765625,
            "normalizedX": 0.8326666259765625,
            "normalizedY": 0.252145751953125,
            "t": 1652312405514,
            "normalizedT": 1994
        },
        {
            "x": 421.33331298828125,
            "y": 118.0728759765625,
            "normalizedX": 0.8426666259765625,
            "normalizedY": 0.236145751953125,
            "t": 1652312405530,
            "normalizedT": 2010
        },
        {
            "x": 424.33331298828125,
            "y": 114.0728759765625,
            "normalizedX": 0.8486666259765625,
            "normalizedY": 0.228145751953125,
            "t": 1652312405547,
            "normalizedT": 2027
        },
        {
            "x": 428.33331298828125,
            "y": 109.0728759765625,
            "normalizedX": 0.8566666259765625,
            "normalizedY": 0.218145751953125,
            "t": 1652312405564,
            "normalizedT": 2044
        },
        {
            "x": 429.33331298828125,
            "y": 108.0728759765625,
            "normalizedX": 0.8586666259765625,
            "normalizedY": 0.216145751953125,
            "t": 1652312405580,
            "normalizedT": 2060
        },
        {
            "x": 432.33331298828125,
            "y": 107.0728759765625,
            "normalizedX": 0.8646666259765625,
            "normalizedY": 0.214145751953125,
            "t": 1652312405597,
            "normalizedT": 2077
        },
        {
            "x": 435.33331298828125,
            "y": 106.0728759765625,
            "normalizedX": 0.8706666259765625,
            "normalizedY": 0.212145751953125,
            "t": 1652312405614,
            "normalizedT": 2094
        },
        {
            "x": 437.33331298828125,
            "y": 106.0728759765625,
            "normalizedX": 0.8746666259765625,
            "normalizedY": 0.212145751953125,
            "t": 1652312405630,
            "normalizedT": 2110
        },
        {
            "x": 439.33331298828125,
            "y": 106.0728759765625,
            "normalizedX": 0.8786666259765625,
            "normalizedY": 0.212145751953125,
            "t": 1652312405647,
            "normalizedT": 2127
        },
        {
            "x": 442.33331298828125,
            "y": 107.0728759765625,
            "normalizedX": 0.8846666259765625,
            "normalizedY": 0.214145751953125,
            "t": 1652312405664,
            "normalizedT": 2144
        },
        {
            "x": 445.33331298828125,
            "y": 109.0728759765625,
            "normalizedX": 0.8906666259765625,
            "normalizedY": 0.218145751953125,
            "t": 1652312405680,
            "normalizedT": 2160
        },
        {
            "x": 447.33331298828125,
            "y": 110.0728759765625,
            "normalizedX": 0.8946666259765625,
            "normalizedY": 0.220145751953125,
            "t": 1652312405697,
            "normalizedT": 2177
        },
        {
            "x": 447.33331298828125,
            "y": 111.0728759765625,
            "normalizedX": 0.8946666259765625,
            "normalizedY": 0.222145751953125,
            "t": 1652312405714,
            "normalizedT": 2194
        },
        {
            "x": 447.33331298828125,
            "y": 112.0728759765625,
            "normalizedX": 0.8946666259765625,
            "normalizedY": 0.224145751953125,
            "t": 1652312405730,
            "normalizedT": 2210
        },
        {
            "x": 446.33331298828125,
            "y": 112.0728759765625,
            "normalizedX": 0.8926666259765625,
            "normalizedY": 0.224145751953125,
            "t": 1652312405797,
            "normalizedT": 2277
        },
        {
            "x": 443.33331298828125,
            "y": 110.0728759765625,
            "normalizedX": 0.8866666259765625,
            "normalizedY": 0.220145751953125,
            "t": 1652312405814,
            "normalizedT": 2294
        },
        {
            "x": 439.33331298828125,
            "y": 104.0728759765625,
            "normalizedX": 0.8786666259765625,
            "normalizedY": 0.208145751953125,
            "t": 1652312405830,
            "normalizedT": 2310
        },
        {
            "x": 438.33331298828125,
            "y": 100.0728759765625,
            "normalizedX": 0.8766666259765625,
            "normalizedY": 0.200145751953125,
            "t": 1652312405847,
            "normalizedT": 2327
        },
        {
            "x": 437.33331298828125,
            "y": 92.0728759765625,
            "normalizedX": 0.8746666259765625,
            "normalizedY": 0.184145751953125,
            "t": 1652312405864,
            "normalizedT": 2344
        },
        {
            "x": 437.33331298828125,
            "y": 88.0728759765625,
            "normalizedX": 0.8746666259765625,
            "normalizedY": 0.176145751953125,
            "t": 1652312405880,
            "normalizedT": 2360
        },
        {
            "x": 439.33331298828125,
            "y": 84.0728759765625,
            "normalizedX": 0.8786666259765625,
            "normalizedY": 0.168145751953125,
            "t": 1652312405897,
            "normalizedT": 2377
        },
        {
            "x": 441.33331298828125,
            "y": 81.0728759765625,
            "normalizedX": 0.8826666259765625,
            "normalizedY": 0.162145751953125,
            "t": 1652312405914,
            "normalizedT": 2394
        },
        {
            "x": 443.33331298828125,
            "y": 78.0728759765625,
            "normalizedX": 0.8866666259765625,
            "normalizedY": 0.156145751953125,
            "t": 1652312405930,
            "normalizedT": 2410
        },
        {
            "x": 445.33331298828125,
            "y": 74.0728759765625,
            "normalizedX": 0.8906666259765625,
            "normalizedY": 0.148145751953125,
            "t": 1652312405947,
            "normalizedT": 2427
        },
        {
            "x": 447.33331298828125,
            "y": 72.0728759765625,
            "normalizedX": 0.8946666259765625,
            "normalizedY": 0.144145751953125,
            "t": 1652312405964,
            "normalizedT": 2444
        },
        {
            "x": 450.33331298828125,
            "y": 71.0728759765625,
            "normalizedX": 0.9006666259765626,
            "normalizedY": 0.142145751953125,
            "t": 1652312405980,
            "normalizedT": 2460
        },
        {
            "x": 453.33331298828125,
            "y": 70.0728759765625,
            "normalizedX": 0.9066666259765624,
            "normalizedY": 0.140145751953125,
            "t": 1652312405997,
            "normalizedT": 2477
        },
        {
            "x": 456.33331298828125,
            "y": 70.0728759765625,
            "normalizedX": 0.9126666259765625,
            "normalizedY": 0.140145751953125,
            "t": 1652312406014,
            "normalizedT": 2494
        },
        {
            "x": 460.33331298828125,
            "y": 70.0728759765625,
            "normalizedX": 0.9206666259765625,
            "normalizedY": 0.140145751953125,
            "t": 1652312406030,
            "normalizedT": 2510
        },
        {
            "x": 464.33331298828125,
            "y": 71.0728759765625,
            "normalizedX": 0.9286666259765625,
            "normalizedY": 0.142145751953125,
            "t": 1652312406047,
            "normalizedT": 2527
        },
        {
            "x": 467.33331298828125,
            "y": 74.0728759765625,
            "normalizedX": 0.9346666259765625,
            "normalizedY": 0.148145751953125,
            "t": 1652312406064,
            "normalizedT": 2544
        },
        {
            "x": 468.33331298828125,
            "y": 77.0728759765625,
            "normalizedX": 0.9366666259765625,
            "normalizedY": 0.154145751953125,
            "t": 1652312406080,
            "normalizedT": 2560
        },
        {
            "x": 468.33331298828125,
            "y": 80.0728759765625,
            "normalizedX": 0.9366666259765625,
            "normalizedY": 0.160145751953125,
            "t": 1652312406097,
            "normalizedT": 2577
        },
        {
            "x": 468.33331298828125,
            "y": 80.0728759765625,
            "normalizedX": 0.9366666259765625,
            "normalizedY": 0.160145751953125,
            "t": 1652312406114,
            "normalizedT": 2594
        },
        {
            "x": 468.33331298828125,
            "y": 81.0728759765625,
            "normalizedX": 0.9366666259765625,
            "normalizedY": 0.162145751953125,
            "t": 1652312406130,
            "normalizedT": 2610
        },
        {
            "x": 467.33331298828125,
            "y": 81.0728759765625,
            "normalizedX": 0.9346666259765625,
            "normalizedY": 0.162145751953125,
            "t": 1652312406164,
            "normalizedT": 2644
        },
        {
            "x": 465.33331298828125,
            "y": 81.0728759765625,
            "normalizedX": 0.9306666259765625,
            "normalizedY": 0.162145751953125,
            "t": 1652312406180,
            "normalizedT": 2660
        },
        {
            "x": 464.33331298828125,
            "y": 80.0728759765625,
            "normalizedX": 0.9286666259765625,
            "normalizedY": 0.160145751953125,
            "t": 1652312406197,
            "normalizedT": 2677
        },
        {
            "x": 463.33331298828125,
            "y": 77.0728759765625,
            "normalizedX": 0.9266666259765625,
            "normalizedY": 0.154145751953125,
            "t": 1652312406214,
            "normalizedT": 2694
        },
        {
            "x": 462.33331298828125,
            "y": 70.0728759765625,
            "normalizedX": 0.9246666259765625,
            "normalizedY": 0.140145751953125,
            "t": 1652312406230,
            "normalizedT": 2710
        },
        {
            "x": 461.33331298828125,
            "y": 64.0728759765625,
            "normalizedX": 0.9226666259765625,
            "normalizedY": 0.128145751953125,
            "t": 1652312406247,
            "normalizedT": 2727
        },
        {
            "x": 464.33331298828125,
            "y": 55.0728759765625,
            "normalizedX": 0.9286666259765625,
            "normalizedY": 0.110145751953125,
            "t": 1652312406264,
            "normalizedT": 2744
        },
        {
            "x": 467.33331298828125,
            "y": 50.0728759765625,
            "normalizedX": 0.9346666259765625,
            "normalizedY": 0.100145751953125,
            "t": 1652312406280,
            "normalizedT": 2760
        },
        {
            "x": 470.33331298828125,
            "y": 44.0728759765625,
            "normalizedX": 0.9406666259765625,
            "normalizedY": 0.088145751953125,
            "t": 1652312406297,
            "normalizedT": 2777
        },
        {
            "x": 478.33331298828125,
            "y": 31.0728759765625,
            "normalizedX": 0.9566666259765625,
            "normalizedY": 0.062145751953125,
            "t": 1652312406314,
            "normalizedT": 2794
        },
        {
            "x": 485.33331298828125,
            "y": 22.0728759765625,
            "normalizedX": 0.9706666259765625,
            "normalizedY": 0.044145751953125,
            "t": 1652312406330,
            "normalizedT": 2810
        },
        {
            "x": 489.33331298828125,
            "y": 18.0728759765625,
            "normalizedX": 0.9786666259765625,
            "normalizedY": 0.036145751953125,
            "t": 1652312406347,
            "normalizedT": 2827
        },
        {
            "x": 493.33331298828125,
            "y": 11.0728759765625,
            "normalizedX": 0.9866666259765625,
            "normalizedY": 0.022145751953125,
            "t": 1652312406364,
            "normalizedT": 2844
        },
        {
            "x": 494.33331298828125,
            "y": 8.0728759765625,
            "normalizedX": 0.9886666259765625,
            "normalizedY": 0.016145751953125,
            "t": 1652312406380,
            "normalizedT": 2860
        },
        {
            "x": 494.33331298828125,
            "y": 4.0728759765625,
            "normalizedX": 0.9886666259765625,
            "normalizedY": 0.008145751953125,
            "t": 1652312406397,
            "normalizedT": 2877
        },
        {
            "x": 494.33331298828125,
            "y": 3.0728759765625,
            "normalizedX": 0.9886666259765625,
            "normalizedY": 0.006145751953125,
            "t": 1652312406414,
            "normalizedT": 2894
        },
        {
            "x": 493.33331298828125,
            "y": 2.0728759765625,
            "normalizedX": 0.9866666259765625,
            "normalizedY": 0.004145751953125,
            "t": 1652312406430,
            "normalizedT": 2910
        },
        {
            "x": 491.33331298828125,
            "y": 2.0728759765625,
            "normalizedX": 0.9826666259765625,
            "normalizedY": 0.004145751953125,
            "t": 1652312406447,
            "normalizedT": 2927
        },
        {
            "x": 489.33331298828125,
            "y": 2.0728759765625,
            "normalizedX": 0.9786666259765625,
            "normalizedY": 0.004145751953125,
            "t": 1652312406451,
            "normalizedT": 2931
        }
    ],
    [
        {
            "x": 37.33331298828125,
            "y": 362.0728759765625,
            "normalizedX": 0.0746666259765625,
            "normalizedY": 0.724145751953125,
            "t": 1652312407712,
            "normalizedT": 0
        },
        {
            "x": 37.33331298828125,
            "y": 363.0728759765625,
            "normalizedX": 0.0746666259765625,
            "normalizedY": 0.726145751953125,
            "t": 1652312407764,
            "normalizedT": 52
        },
        {
            "x": 41.33331298828125,
            "y": 363.0728759765625,
            "normalizedX": 0.0826666259765625,
            "normalizedY": 0.726145751953125,
            "t": 1652312407780,
            "normalizedT": 68
        },
        {
            "x": 44.33331298828125,
            "y": 363.0728759765625,
            "normalizedX": 0.0886666259765625,
            "normalizedY": 0.726145751953125,
            "t": 1652312407797,
            "normalizedT": 85
        },
        {
            "x": 48.33331298828125,
            "y": 363.0728759765625,
            "normalizedX": 0.0966666259765625,
            "normalizedY": 0.726145751953125,
            "t": 1652312407814,
            "normalizedT": 102
        },
        {
            "x": 53.33331298828125,
            "y": 363.0728759765625,
            "normalizedX": 0.1066666259765625,
            "normalizedY": 0.726145751953125,
            "t": 1652312407831,
            "normalizedT": 119
        },
        {
            "x": 56.33331298828125,
            "y": 364.0728759765625,
            "normalizedX": 0.1126666259765625,
            "normalizedY": 0.728145751953125,
            "t": 1652312407847,
            "normalizedT": 135
        },
        {
            "x": 59.33331298828125,
            "y": 365.0728759765625,
            "normalizedX": 0.1186666259765625,
            "normalizedY": 0.730145751953125,
            "t": 1652312407864,
            "normalizedT": 152
        },
        {
            "x": 61.33331298828125,
            "y": 366.0728759765625,
            "normalizedX": 0.1226666259765625,
            "normalizedY": 0.732145751953125,
            "t": 1652312407880,
            "normalizedT": 168
        },
        {
            "x": 62.33331298828125,
            "y": 369.0728759765625,
            "normalizedX": 0.1246666259765625,
            "normalizedY": 0.738145751953125,
            "t": 1652312407897,
            "normalizedT": 185
        },
        {
            "x": 63.33331298828125,
            "y": 376.0728759765625,
            "normalizedX": 0.1266666259765625,
            "normalizedY": 0.752145751953125,
            "t": 1652312407914,
            "normalizedT": 202
        },
        {
            "x": 63.33331298828125,
            "y": 381.0728759765625,
            "normalizedX": 0.1266666259765625,
            "normalizedY": 0.762145751953125,
            "t": 1652312407930,
            "normalizedT": 218
        },
        {
            "x": 62.33331298828125,
            "y": 384.0728759765625,
            "normalizedX": 0.1246666259765625,
            "normalizedY": 0.768145751953125,
            "t": 1652312407947,
            "normalizedT": 235
        },
        {
            "x": 60.33331298828125,
            "y": 386.0728759765625,
            "normalizedX": 0.1206666259765625,
            "normalizedY": 0.772145751953125,
            "t": 1652312407964,
            "normalizedT": 252
        },
        {
            "x": 59.33331298828125,
            "y": 387.0728759765625,
            "normalizedX": 0.1186666259765625,
            "normalizedY": 0.774145751953125,
            "t": 1652312407980,
            "normalizedT": 268
        },
        {
            "x": 55.33331298828125,
            "y": 389.0728759765625,
            "normalizedX": 0.1106666259765625,
            "normalizedY": 0.778145751953125,
            "t": 1652312407997,
            "normalizedT": 285
        },
        {
            "x": 54.33331298828125,
            "y": 390.0728759765625,
            "normalizedX": 0.1086666259765625,
            "normalizedY": 0.780145751953125,
            "t": 1652312408014,
            "normalizedT": 302
        },
        {
            "x": 50.33331298828125,
            "y": 391.0728759765625,
            "normalizedX": 0.1006666259765625,
            "normalizedY": 0.782145751953125,
            "t": 1652312408030,
            "normalizedT": 318
        },
        {
            "x": 49.33331298828125,
            "y": 392.0728759765625,
            "normalizedX": 0.0986666259765625,
            "normalizedY": 0.784145751953125,
            "t": 1652312408047,
            "normalizedT": 335
        },
        {
            "x": 49.33331298828125,
            "y": 392.0728759765625,
            "normalizedX": 0.0986666259765625,
            "normalizedY": 0.784145751953125,
            "t": 1652312408064,
            "normalizedT": 352
        },
        {
            "x": 48.33331298828125,
            "y": 392.0728759765625,
            "normalizedX": 0.0966666259765625,
            "normalizedY": 0.784145751953125,
            "t": 1652312408130,
            "normalizedT": 418
        },
        {
            "x": 48.33331298828125,
            "y": 391.0728759765625,
            "normalizedX": 0.0966666259765625,
            "normalizedY": 0.782145751953125,
            "t": 1652312408147,
            "normalizedT": 435
        },
        {
            "x": 49.33331298828125,
            "y": 390.0728759765625,
            "normalizedX": 0.0986666259765625,
            "normalizedY": 0.780145751953125,
            "t": 1652312408164,
            "normalizedT": 452
        },
        {
            "x": 49.33331298828125,
            "y": 390.0728759765625,
            "normalizedX": 0.0986666259765625,
            "normalizedY": 0.780145751953125,
            "t": 1652312408180,
            "normalizedT": 468
        },
        {
            "x": 51.33331298828125,
            "y": 389.0728759765625,
            "normalizedX": 0.1026666259765625,
            "normalizedY": 0.778145751953125,
            "t": 1652312408197,
            "normalizedT": 485
        },
        {
            "x": 53.33331298828125,
            "y": 389.0728759765625,
            "normalizedX": 0.1066666259765625,
            "normalizedY": 0.778145751953125,
            "t": 1652312408214,
            "normalizedT": 502
        },
        {
            "x": 57.33331298828125,
            "y": 389.0728759765625,
            "normalizedX": 0.1146666259765625,
            "normalizedY": 0.778145751953125,
            "t": 1652312408230,
            "normalizedT": 518
        },
        {
            "x": 60.33331298828125,
            "y": 392.0728759765625,
            "normalizedX": 0.1206666259765625,
            "normalizedY": 0.784145751953125,
            "t": 1652312408247,
            "normalizedT": 535
        },
        {
            "x": 63.33331298828125,
            "y": 394.0728759765625,
            "normalizedX": 0.1266666259765625,
            "normalizedY": 0.788145751953125,
            "t": 1652312408264,
            "normalizedT": 552
        },
        {
            "x": 66.33331298828125,
            "y": 398.0728759765625,
            "normalizedX": 0.1326666259765625,
            "normalizedY": 0.796145751953125,
            "t": 1652312408281,
            "normalizedT": 569
        },
        {
            "x": 69.33331298828125,
            "y": 400.0728759765625,
            "normalizedX": 0.1386666259765625,
            "normalizedY": 0.800145751953125,
            "t": 1652312408297,
            "normalizedT": 585
        },
        {
            "x": 70.33331298828125,
            "y": 404.0728759765625,
            "normalizedX": 0.1406666259765625,
            "normalizedY": 0.808145751953125,
            "t": 1652312408314,
            "normalizedT": 602
        },
        {
            "x": 72.33331298828125,
            "y": 408.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.816145751953125,
            "t": 1652312408330,
            "normalizedT": 618
        },
        {
            "x": 72.33331298828125,
            "y": 412.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.824145751953125,
            "t": 1652312408347,
            "normalizedT": 635
        },
        {
            "x": 72.33331298828125,
            "y": 417.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.834145751953125,
            "t": 1652312408364,
            "normalizedT": 652
        },
        {
            "x": 72.33331298828125,
            "y": 420.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.840145751953125,
            "t": 1652312408381,
            "normalizedT": 669
        },
        {
            "x": 69.33331298828125,
            "y": 422.0728759765625,
            "normalizedX": 0.1386666259765625,
            "normalizedY": 0.844145751953125,
            "t": 1652312408397,
            "normalizedT": 685
        },
        {
            "x": 67.33331298828125,
            "y": 424.0728759765625,
            "normalizedX": 0.1346666259765625,
            "normalizedY": 0.848145751953125,
            "t": 1652312408414,
            "normalizedT": 702
        },
        {
            "x": 66.33331298828125,
            "y": 425.0728759765625,
            "normalizedX": 0.1326666259765625,
            "normalizedY": 0.850145751953125,
            "t": 1652312408430,
            "normalizedT": 718
        },
        {
            "x": 64.33331298828125,
            "y": 425.0728759765625,
            "normalizedX": 0.1286666259765625,
            "normalizedY": 0.850145751953125,
            "t": 1652312408447,
            "normalizedT": 735
        },
        {
            "x": 61.33331298828125,
            "y": 426.0728759765625,
            "normalizedX": 0.1226666259765625,
            "normalizedY": 0.852145751953125,
            "t": 1652312408464,
            "normalizedT": 752
        },
        {
            "x": 59.33331298828125,
            "y": 426.0728759765625,
            "normalizedX": 0.1186666259765625,
            "normalizedY": 0.852145751953125,
            "t": 1652312408481,
            "normalizedT": 769
        },
        {
            "x": 58.33331298828125,
            "y": 426.0728759765625,
            "normalizedX": 0.1166666259765625,
            "normalizedY": 0.852145751953125,
            "t": 1652312408497,
            "normalizedT": 785
        },
        {
            "x": 57.33331298828125,
            "y": 426.0728759765625,
            "normalizedX": 0.1146666259765625,
            "normalizedY": 0.852145751953125,
            "t": 1652312408514,
            "normalizedT": 802
        },
        {
            "x": 61.33331298828125,
            "y": 426.0728759765625,
            "normalizedX": 0.1226666259765625,
            "normalizedY": 0.852145751953125,
            "t": 1652312408597,
            "normalizedT": 885
        },
        {
            "x": 67.33331298828125,
            "y": 427.0728759765625,
            "normalizedX": 0.1346666259765625,
            "normalizedY": 0.854145751953125,
            "t": 1652312408614,
            "normalizedT": 902
        },
        {
            "x": 75.33331298828125,
            "y": 429.0728759765625,
            "normalizedX": 0.1506666259765625,
            "normalizedY": 0.858145751953125,
            "t": 1652312408630,
            "normalizedT": 918
        },
        {
            "x": 79.33331298828125,
            "y": 432.0728759765625,
            "normalizedX": 0.1586666259765625,
            "normalizedY": 0.864145751953125,
            "t": 1652312408647,
            "normalizedT": 935
        },
        {
            "x": 83.33331298828125,
            "y": 434.0728759765625,
            "normalizedX": 0.1666666259765625,
            "normalizedY": 0.868145751953125,
            "t": 1652312408664,
            "normalizedT": 952
        },
        {
            "x": 85.33331298828125,
            "y": 437.0728759765625,
            "normalizedX": 0.1706666259765625,
            "normalizedY": 0.874145751953125,
            "t": 1652312408680,
            "normalizedT": 968
        },
        {
            "x": 85.33331298828125,
            "y": 439.0728759765625,
            "normalizedX": 0.1706666259765625,
            "normalizedY": 0.878145751953125,
            "t": 1652312408697,
            "normalizedT": 985
        },
        {
            "x": 86.33331298828125,
            "y": 443.0728759765625,
            "normalizedX": 0.1726666259765625,
            "normalizedY": 0.886145751953125,
            "t": 1652312408714,
            "normalizedT": 1002
        },
        {
            "x": 86.33331298828125,
            "y": 446.0728759765625,
            "normalizedX": 0.1726666259765625,
            "normalizedY": 0.892145751953125,
            "t": 1652312408730,
            "normalizedT": 1018
        },
        {
            "x": 86.33331298828125,
            "y": 449.0728759765625,
            "normalizedX": 0.1726666259765625,
            "normalizedY": 0.898145751953125,
            "t": 1652312408747,
            "normalizedT": 1035
        },
        {
            "x": 86.33331298828125,
            "y": 454.0728759765625,
            "normalizedX": 0.1726666259765625,
            "normalizedY": 0.908145751953125,
            "t": 1652312408764,
            "normalizedT": 1052
        },
        {
            "x": 85.33331298828125,
            "y": 456.0728759765625,
            "normalizedX": 0.1706666259765625,
            "normalizedY": 0.912145751953125,
            "t": 1652312408780,
            "normalizedT": 1068
        },
        {
            "x": 82.33331298828125,
            "y": 458.0728759765625,
            "normalizedX": 0.1646666259765625,
            "normalizedY": 0.916145751953125,
            "t": 1652312408797,
            "normalizedT": 1085
        },
        {
            "x": 81.33331298828125,
            "y": 460.0728759765625,
            "normalizedX": 0.1626666259765625,
            "normalizedY": 0.920145751953125,
            "t": 1652312408814,
            "normalizedT": 1102
        },
        {
            "x": 79.33331298828125,
            "y": 461.0728759765625,
            "normalizedX": 0.1586666259765625,
            "normalizedY": 0.922145751953125,
            "t": 1652312408830,
            "normalizedT": 1118
        },
        {
            "x": 78.33331298828125,
            "y": 462.0728759765625,
            "normalizedX": 0.1566666259765625,
            "normalizedY": 0.924145751953125,
            "t": 1652312408847,
            "normalizedT": 1135
        },
        {
            "x": 77.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1546666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408864,
            "normalizedT": 1152
        },
        {
            "x": 76.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1526666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408880,
            "normalizedT": 1168
        },
        {
            "x": 75.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1506666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408897,
            "normalizedT": 1185
        },
        {
            "x": 75.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1506666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408914,
            "normalizedT": 1202
        },
        {
            "x": 74.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1486666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408947,
            "normalizedT": 1235
        },
        {
            "x": 73.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1466666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408964,
            "normalizedT": 1252
        },
        {
            "x": 73.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1466666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408981,
            "normalizedT": 1269
        },
        {
            "x": 72.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312408997,
            "normalizedT": 1285
        },
        {
            "x": 72.33331298828125,
            "y": 462.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.924145751953125,
            "t": 1652312409014,
            "normalizedT": 1302
        },
        {
            "x": 72.33331298828125,
            "y": 460.0728759765625,
            "normalizedX": 0.1446666259765625,
            "normalizedY": 0.920145751953125,
            "t": 1652312409031,
            "normalizedT": 1319
        },
        {
            "x": 75.33331298828125,
            "y": 458.0728759765625,
            "normalizedX": 0.1506666259765625,
            "normalizedY": 0.916145751953125,
            "t": 1652312409048,
            "normalizedT": 1336
        },
        {
            "x": 79.33331298828125,
            "y": 457.0728759765625,
            "normalizedX": 0.1586666259765625,
            "normalizedY": 0.914145751953125,
            "t": 1652312409064,
            "normalizedT": 1352
        },
        {
            "x": 85.33331298828125,
            "y": 457.0728759765625,
            "normalizedX": 0.1706666259765625,
            "normalizedY": 0.914145751953125,
            "t": 1652312409081,
            "normalizedT": 1369
        },
        {
            "x": 91.33331298828125,
            "y": 457.0728759765625,
            "normalizedX": 0.1826666259765625,
            "normalizedY": 0.914145751953125,
            "t": 1652312409097,
            "normalizedT": 1385
        },
        {
            "x": 98.33331298828125,
            "y": 460.0728759765625,
            "normalizedX": 0.1966666259765625,
            "normalizedY": 0.920145751953125,
            "t": 1652312409114,
            "normalizedT": 1402
        },
        {
            "x": 101.33331298828125,
            "y": 461.0728759765625,
            "normalizedX": 0.2026666259765625,
            "normalizedY": 0.922145751953125,
            "t": 1652312409131,
            "normalizedT": 1419
        },
        {
            "x": 104.33331298828125,
            "y": 464.0728759765625,
            "normalizedX": 0.2086666259765625,
            "normalizedY": 0.928145751953125,
            "t": 1652312409147,
            "normalizedT": 1435
        },
        {
            "x": 105.33331298828125,
            "y": 466.0728759765625,
            "normalizedX": 0.2106666259765625,
            "normalizedY": 0.932145751953125,
            "t": 1652312409164,
            "normalizedT": 1452
        },
        {
            "x": 106.33331298828125,
            "y": 468.0728759765625,
            "normalizedX": 0.2126666259765625,
            "normalizedY": 0.936145751953125,
            "t": 1652312409180,
            "normalizedT": 1468
        },
        {
            "x": 107.33331298828125,
            "y": 470.0728759765625,
            "normalizedX": 0.2146666259765625,
            "normalizedY": 0.940145751953125,
            "t": 1652312409197,
            "normalizedT": 1485
        },
        {
            "x": 108.33331298828125,
            "y": 472.0728759765625,
            "normalizedX": 0.2166666259765625,
            "normalizedY": 0.944145751953125,
            "t": 1652312409214,
            "normalizedT": 1502
        },
        {
            "x": 108.33331298828125,
            "y": 473.0728759765625,
            "normalizedX": 0.2166666259765625,
            "normalizedY": 0.946145751953125,
            "t": 1652312409231,
            "normalizedT": 1519
        },
        {
            "x": 108.33331298828125,
            "y": 474.0728759765625,
            "normalizedX": 0.2166666259765625,
            "normalizedY": 0.948145751953125,
            "t": 1652312409247,
            "normalizedT": 1535
        },
        {
            "x": 108.33331298828125,
            "y": 475.0728759765625,
            "normalizedX": 0.2166666259765625,
            "normalizedY": 0.950145751953125,
            "t": 1652312409264,
            "normalizedT": 1552
        },
        {
            "x": 108.33331298828125,
            "y": 476.0728759765625,
            "normalizedX": 0.2166666259765625,
            "normalizedY": 0.952145751953125,
            "t": 1652312409281,
            "normalizedT": 1569
        },
        {
            "x": 107.33331298828125,
            "y": 477.0728759765625,
            "normalizedX": 0.2146666259765625,
            "normalizedY": 0.954145751953125,
            "t": 1652312409314,
            "normalizedT": 1602
        },
        {
            "x": 107.33331298828125,
            "y": 478.0728759765625,
            "normalizedX": 0.2146666259765625,
            "normalizedY": 0.956145751953125,
            "t": 1652312409331,
            "normalizedT": 1619
        },
        {
            "x": 105.33331298828125,
            "y": 478.0728759765625,
            "normalizedX": 0.2106666259765625,
            "normalizedY": 0.956145751953125,
            "t": 1652312409364,
            "normalizedT": 1652
        },
        {
            "x": 103.33331298828125,
            "y": 478.0728759765625,
            "normalizedX": 0.2066666259765625,
            "normalizedY": 0.956145751953125,
            "t": 1652312409380,
            "normalizedT": 1668
        },
        {
            "x": 102.33331298828125,
            "y": 478.0728759765625,
            "normalizedX": 0.2046666259765625,
            "normalizedY": 0.956145751953125,
            "t": 1652312409397,
            "normalizedT": 1685
        },
        {
            "x": 100.33331298828125,
            "y": 477.0728759765625,
            "normalizedX": 0.2006666259765625,
            "normalizedY": 0.954145751953125,
            "t": 1652312409414,
            "normalizedT": 1702
        },
        {
            "x": 97.33331298828125,
            "y": 472.0728759765625,
            "normalizedX": 0.1946666259765625,
            "normalizedY": 0.944145751953125,
            "t": 1652312409430,
            "normalizedT": 1718
        },
        {
            "x": 95.33331298828125,
            "y": 469.0728759765625,
            "normalizedX": 0.1906666259765625,
            "normalizedY": 0.938145751953125,
            "t": 1652312409447,
            "normalizedT": 1735
        },
        {
            "x": 95.33331298828125,
            "y": 466.0728759765625,
            "normalizedX": 0.1906666259765625,
            "normalizedY": 0.932145751953125,
            "t": 1652312409464,
            "normalizedT": 1752
        },
        {
            "x": 95.33331298828125,
            "y": 462.0728759765625,
            "normalizedX": 0.1906666259765625,
            "normalizedY": 0.924145751953125,
            "t": 1652312409480,
            "normalizedT": 1768
        },
        {
            "x": 97.33331298828125,
            "y": 456.0728759765625,
            "normalizedX": 0.1946666259765625,
            "normalizedY": 0.912145751953125,
            "t": 1652312409497,
            "normalizedT": 1785
        },
        {
            "x": 101.33331298828125,
            "y": 452.0728759765625,
            "normalizedX": 0.2026666259765625,
            "normalizedY": 0.904145751953125,
            "t": 1652312409514,
            "normalizedT": 1802
        },
        {
            "x": 108.33331298828125,
            "y": 446.0728759765625,
            "normalizedX": 0.2166666259765625,
            "normalizedY": 0.892145751953125,
            "t": 1652312409531,
            "normalizedT": 1819
        },
        {
            "x": 112.33331298828125,
            "y": 442.0728759765625,
            "normalizedX": 0.2246666259765625,
            "normalizedY": 0.884145751953125,
            "t": 1652312409547,
            "normalizedT": 1835
        },
        {
            "x": 115.33331298828125,
            "y": 440.0728759765625,
            "normalizedX": 0.2306666259765625,
            "normalizedY": 0.880145751953125,
            "t": 1652312409564,
            "normalizedT": 1852
        },
        {
            "x": 118.33331298828125,
            "y": 439.0728759765625,
            "normalizedX": 0.2366666259765625,
            "normalizedY": 0.878145751953125,
            "t": 1652312409581,
            "normalizedT": 1869
        },
        {
            "x": 119.33331298828125,
            "y": 438.0728759765625,
            "normalizedX": 0.2386666259765625,
            "normalizedY": 0.876145751953125,
            "t": 1652312409597,
            "normalizedT": 1885
        },
        {
            "x": 122.33331298828125,
            "y": 438.0728759765625,
            "normalizedX": 0.2446666259765625,
            "normalizedY": 0.876145751953125,
            "t": 1652312409614,
            "normalizedT": 1902
        },
        {
            "x": 123.33331298828125,
            "y": 438.0728759765625,
            "normalizedX": 0.2466666259765625,
            "normalizedY": 0.876145751953125,
            "t": 1652312409631,
            "normalizedT": 1919
        },
        {
            "x": 125.33331298828125,
            "y": 438.0728759765625,
            "normalizedX": 0.2506666259765625,
            "normalizedY": 0.876145751953125,
            "t": 1652312409647,
            "normalizedT": 1935
        },
        {
            "x": 125.33331298828125,
            "y": 438.0728759765625,
            "normalizedX": 0.2506666259765625,
            "normalizedY": 0.876145751953125,
            "t": 1652312409664,
            "normalizedT": 1952
        },
        {
            "x": 126.33331298828125,
            "y": 438.0728759765625,
            "normalizedX": 0.2526666259765625,
            "normalizedY": 0.876145751953125,
            "t": 1652312409681,
            "normalizedT": 1969
        },
        {
            "x": 126.33331298828125,
            "y": 436.0728759765625,
            "normalizedX": 0.2526666259765625,
            "normalizedY": 0.872145751953125,
            "t": 1652312409747,
            "normalizedT": 2035
        },
        {
            "x": 126.33331298828125,
            "y": 435.0728759765625,
            "normalizedX": 0.2526666259765625,
            "normalizedY": 0.870145751953125,
            "t": 1652312409764,
            "normalizedT": 2052
        },
        {
            "x": 124.33331298828125,
            "y": 432.0728759765625,
            "normalizedX": 0.2486666259765625,
            "normalizedY": 0.864145751953125,
            "t": 1652312409781,
            "normalizedT": 2069
        },
        {
            "x": 123.33331298828125,
            "y": 430.0728759765625,
            "normalizedX": 0.2466666259765625,
            "normalizedY": 0.860145751953125,
            "t": 1652312409797,
            "normalizedT": 2085
        },
        {
            "x": 120.33331298828125,
            "y": 424.0728759765625,
            "normalizedX": 0.2406666259765625,
            "normalizedY": 0.848145751953125,
            "t": 1652312409814,
            "normalizedT": 2102
        },
        {
            "x": 119.33331298828125,
            "y": 420.0728759765625,
            "normalizedX": 0.2386666259765625,
            "normalizedY": 0.840145751953125,
            "t": 1652312409831,
            "normalizedT": 2119
        },
        {
            "x": 119.33331298828125,
            "y": 416.0728759765625,
            "normalizedX": 0.2386666259765625,
            "normalizedY": 0.832145751953125,
            "t": 1652312409847,
            "normalizedT": 2135
        },
        {
            "x": 119.33331298828125,
            "y": 410.0728759765625,
            "normalizedX": 0.2386666259765625,
            "normalizedY": 0.820145751953125,
            "t": 1652312409864,
            "normalizedT": 2152
        },
        {
            "x": 121.33331298828125,
            "y": 408.0728759765625,
            "normalizedX": 0.2426666259765625,
            "normalizedY": 0.816145751953125,
            "t": 1652312409880,
            "normalizedT": 2168
        },
        {
            "x": 123.33331298828125,
            "y": 405.0728759765625,
            "normalizedX": 0.2466666259765625,
            "normalizedY": 0.810145751953125,
            "t": 1652312409897,
            "normalizedT": 2185
        },
        {
            "x": 127.33331298828125,
            "y": 401.0728759765625,
            "normalizedX": 0.2546666259765625,
            "normalizedY": 0.802145751953125,
            "t": 1652312409914,
            "normalizedT": 2202
        },
        {
            "x": 130.33331298828125,
            "y": 400.0728759765625,
            "normalizedX": 0.2606666259765625,
            "normalizedY": 0.800145751953125,
            "t": 1652312409931,
            "normalizedT": 2219
        },
        {
            "x": 133.33331298828125,
            "y": 398.0728759765625,
            "normalizedX": 0.2666666259765625,
            "normalizedY": 0.796145751953125,
            "t": 1652312409947,
            "normalizedT": 2235
        },
        {
            "x": 135.33331298828125,
            "y": 397.0728759765625,
            "normalizedX": 0.2706666259765625,
            "normalizedY": 0.794145751953125,
            "t": 1652312409964,
            "normalizedT": 2252
        },
        {
            "x": 137.33331298828125,
            "y": 397.0728759765625,
            "normalizedX": 0.2746666259765625,
            "normalizedY": 0.794145751953125,
            "t": 1652312409981,
            "normalizedT": 2269
        },
        {
            "x": 138.33331298828125,
            "y": 397.0728759765625,
            "normalizedX": 0.2766666259765625,
            "normalizedY": 0.794145751953125,
            "t": 1652312409997,
            "normalizedT": 2285
        },
        {
            "x": 139.33331298828125,
            "y": 397.0728759765625,
            "normalizedX": 0.2786666259765625,
            "normalizedY": 0.794145751953125,
            "t": 1652312410014,
            "normalizedT": 2302
        },
        {
            "x": 140.33331298828125,
            "y": 397.0728759765625,
            "normalizedX": 0.2806666259765625,
            "normalizedY": 0.794145751953125,
            "t": 1652312410031,
            "normalizedT": 2319
        },
        {
            "x": 141.33331298828125,
            "y": 398.0728759765625,
            "normalizedX": 0.2826666259765625,
            "normalizedY": 0.796145751953125,
            "t": 1652312410047,
            "normalizedT": 2335
        },
        {
            "x": 141.33331298828125,
            "y": 399.0728759765625,
            "normalizedX": 0.2826666259765625,
            "normalizedY": 0.798145751953125,
            "t": 1652312410064,
            "normalizedT": 2352
        },
        {
            "x": 139.33331298828125,
            "y": 398.0728759765625,
            "normalizedX": 0.2786666259765625,
            "normalizedY": 0.796145751953125,
            "t": 1652312410164,
            "normalizedT": 2452
        },
        {
            "x": 137.33331298828125,
            "y": 396.0728759765625,
            "normalizedX": 0.2746666259765625,
            "normalizedY": 0.792145751953125,
            "t": 1652312410181,
            "normalizedT": 2469
        },
        {
            "x": 134.33331298828125,
            "y": 389.0728759765625,
            "normalizedX": 0.2686666259765625,
            "normalizedY": 0.778145751953125,
            "t": 1652312410197,
            "normalizedT": 2485
        },
        {
            "x": 133.33331298828125,
            "y": 383.0728759765625,
            "normalizedX": 0.2666666259765625,
            "normalizedY": 0.766145751953125,
            "t": 1652312410214,
            "normalizedT": 2502
        },
        {
            "x": 133.33331298828125,
            "y": 377.0728759765625,
            "normalizedX": 0.2666666259765625,
            "normalizedY": 0.754145751953125,
            "t": 1652312410231,
            "normalizedT": 2519
        },
        {
            "x": 133.33331298828125,
            "y": 372.0728759765625,
            "normalizedX": 0.2666666259765625,
            "normalizedY": 0.744145751953125,
            "t": 1652312410247,
            "normalizedT": 2535
        },
        {
            "x": 134.33331298828125,
            "y": 366.0728759765625,
            "normalizedX": 0.2686666259765625,
            "normalizedY": 0.732145751953125,
            "t": 1652312410264,
            "normalizedT": 2552
        },
        {
            "x": 137.33331298828125,
            "y": 362.0728759765625,
            "normalizedX": 0.2746666259765625,
            "normalizedY": 0.724145751953125,
            "t": 1652312410281,
            "normalizedT": 2569
        },
        {
            "x": 139.33331298828125,
            "y": 359.0728759765625,
            "normalizedX": 0.2786666259765625,
            "normalizedY": 0.718145751953125,
            "t": 1652312410297,
            "normalizedT": 2585
        },
        {
            "x": 141.33331298828125,
            "y": 357.0728759765625,
            "normalizedX": 0.2826666259765625,
            "normalizedY": 0.714145751953125,
            "t": 1652312410314,
            "normalizedT": 2602
        },
        {
            "x": 143.33331298828125,
            "y": 356.0728759765625,
            "normalizedX": 0.2866666259765625,
            "normalizedY": 0.712145751953125,
            "t": 1652312410331,
            "normalizedT": 2619
        },
        {
            "x": 144.33331298828125,
            "y": 356.0728759765625,
            "normalizedX": 0.2886666259765625,
            "normalizedY": 0.712145751953125,
            "t": 1652312410347,
            "normalizedT": 2635
        },
        {
            "x": 145.33331298828125,
            "y": 356.0728759765625,
            "normalizedX": 0.2906666259765625,
            "normalizedY": 0.712145751953125,
            "t": 1652312410364,
            "normalizedT": 2652
        },
        {
            "x": 147.33331298828125,
            "y": 356.0728759765625,
            "normalizedX": 0.2946666259765625,
            "normalizedY": 0.712145751953125,
            "t": 1652312410381,
            "normalizedT": 2669
        },
        {
            "x": 148.33331298828125,
            "y": 358.0728759765625,
            "normalizedX": 0.2966666259765625,
            "normalizedY": 0.716145751953125,
            "t": 1652312410397,
            "normalizedT": 2685
        },
        {
            "x": 149.33331298828125,
            "y": 358.0728759765625,
            "normalizedX": 0.2986666259765625,
            "normalizedY": 0.716145751953125,
            "t": 1652312410414,
            "normalizedT": 2702
        },
        {
            "x": 149.33331298828125,
            "y": 359.0728759765625,
            "normalizedX": 0.2986666259765625,
            "normalizedY": 0.718145751953125,
            "t": 1652312410431,
            "normalizedT": 2719
        },
        {
            "x": 150.33331298828125,
            "y": 359.0728759765625,
            "normalizedX": 0.3006666259765625,
            "normalizedY": 0.718145751953125,
            "t": 1652312410447,
            "normalizedT": 2735
        },
        {
            "x": 150.33331298828125,
            "y": 360.0728759765625,
            "normalizedX": 0.3006666259765625,
            "normalizedY": 0.720145751953125,
            "t": 1652312410464,
            "normalizedT": 2752
        },
        {
            "x": 150.33331298828125,
            "y": 361.0728759765625,
            "normalizedX": 0.3006666259765625,
            "normalizedY": 0.722145751953125,
            "t": 1652312410481,
            "normalizedT": 2769
        },
        {
            "x": 150.33331298828125,
            "y": 362.0728759765625,
            "normalizedX": 0.3006666259765625,
            "normalizedY": 0.724145751953125,
            "t": 1652312410514,
            "normalizedT": 2802
        },
        {
            "x": 150.33331298828125,
            "y": 362.0728759765625,
            "normalizedX": 0.3006666259765625,
            "normalizedY": 0.724145751953125,
            "t": 1652312410531,
            "normalizedT": 2819
        },
        {
            "x": 149.33331298828125,
            "y": 362.0728759765625,
            "normalizedX": 0.2986666259765625,
            "normalizedY": 0.724145751953125,
            "t": 1652312410581,
            "normalizedT": 2869
        },
        {
            "x": 147.33331298828125,
            "y": 361.0728759765625,
            "normalizedX": 0.2946666259765625,
            "normalizedY": 0.722145751953125,
            "t": 1652312410597,
            "normalizedT": 2885
        },
        {
            "x": 145.33331298828125,
            "y": 358.0728759765625,
            "normalizedX": 0.2906666259765625,
            "normalizedY": 0.716145751953125,
            "t": 1652312410614,
            "normalizedT": 2902
        },
        {
            "x": 143.33331298828125,
            "y": 354.0728759765625,
            "normalizedX": 0.2866666259765625,
            "normalizedY": 0.708145751953125,
            "t": 1652312410631,
            "normalizedT": 2919
        },
        {
            "x": 142.33331298828125,
            "y": 349.0728759765625,
            "normalizedX": 0.2846666259765625,
            "normalizedY": 0.698145751953125,
            "t": 1652312410647,
            "normalizedT": 2935
        },
        {
            "x": 142.33331298828125,
            "y": 344.0728759765625,
            "normalizedX": 0.2846666259765625,
            "normalizedY": 0.688145751953125,
            "t": 1652312410664,
            "normalizedT": 2952
        },
        {
            "x": 143.33331298828125,
            "y": 341.0728759765625,
            "normalizedX": 0.2866666259765625,
            "normalizedY": 0.682145751953125,
            "t": 1652312410681,
            "normalizedT": 2969
        },
        {
            "x": 145.33331298828125,
            "y": 338.0728759765625,
            "normalizedX": 0.2906666259765625,
            "normalizedY": 0.676145751953125,
            "t": 1652312410697,
            "normalizedT": 2985
        },
        {
            "x": 152.33331298828125,
            "y": 333.0728759765625,
            "normalizedX": 0.3046666259765625,
            "normalizedY": 0.666145751953125,
            "t": 1652312410714,
            "normalizedT": 3002
        },
        {
            "x": 159.33331298828125,
            "y": 328.0728759765625,
            "normalizedX": 0.3186666259765625,
            "normalizedY": 0.656145751953125,
            "t": 1652312410731,
            "normalizedT": 3019
        },
        {
            "x": 168.33331298828125,
            "y": 322.0728759765625,
            "normalizedX": 0.3366666259765625,
            "normalizedY": 0.644145751953125,
            "t": 1652312410747,
            "normalizedT": 3035
        },
        {
            "x": 177.33331298828125,
            "y": 316.0728759765625,
            "normalizedX": 0.3546666259765625,
            "normalizedY": 0.632145751953125,
            "t": 1652312410764,
            "normalizedT": 3052
        },
        {
            "x": 183.33331298828125,
            "y": 313.0728759765625,
            "normalizedX": 0.3666666259765625,
            "normalizedY": 0.626145751953125,
            "t": 1652312410766,
            "normalizedT": 3054
        }
    ],
    [
        {
            "x": 333.33331298828125,
            "y": 450.0728759765625,
            "normalizedX": 0.6666666259765625,
            "normalizedY": 0.900145751953125,
            "t": 1652312411402,
            "normalizedT": 0
        },
        {
            "x": 333.33331298828125,
            "y": 450.0728759765625,
            "normalizedX": 0.6666666259765625,
            "normalizedY": 0.900145751953125,
            "t": 1652312411431,
            "normalizedT": 29
        },
        {
            "x": 334.33331298828125,
            "y": 450.0728759765625,
            "normalizedX": 0.6686666259765625,
            "normalizedY": 0.900145751953125,
            "t": 1652312411447,
            "normalizedT": 45
        },
        {
            "x": 337.33331298828125,
            "y": 450.0728759765625,
            "normalizedX": 0.6746666259765625,
            "normalizedY": 0.900145751953125,
            "t": 1652312411464,
            "normalizedT": 62
        },
        {
            "x": 342.33331298828125,
            "y": 446.0728759765625,
            "normalizedX": 0.6846666259765625,
            "normalizedY": 0.892145751953125,
            "t": 1652312411481,
            "normalizedT": 79
        },
        {
            "x": 347.33331298828125,
            "y": 440.0728759765625,
            "normalizedX": 0.6946666259765625,
            "normalizedY": 0.880145751953125,
            "t": 1652312411497,
            "normalizedT": 95
        },
        {
            "x": 360.33331298828125,
            "y": 420.0728759765625,
            "normalizedX": 0.7206666259765625,
            "normalizedY": 0.840145751953125,
            "t": 1652312411514,
            "normalizedT": 112
        },
        {
            "x": 365.33331298828125,
            "y": 412.0728759765625,
            "normalizedX": 0.7306666259765625,
            "normalizedY": 0.824145751953125,
            "t": 1652312411531,
            "normalizedT": 129
        },
        {
            "x": 377.33331298828125,
            "y": 383.0728759765625,
            "normalizedX": 0.7546666259765625,
            "normalizedY": 0.766145751953125,
            "t": 1652312411547,
            "normalizedT": 145
        },
        {
            "x": 391.33331298828125,
            "y": 338.0728759765625,
            "normalizedX": 0.7826666259765624,
            "normalizedY": 0.676145751953125,
            "t": 1652312411564,
            "normalizedT": 162
        },
        {
            "x": 400.33331298828125,
            "y": 320.0728759765625,
            "normalizedX": 0.8006666259765625,
            "normalizedY": 0.640145751953125,
            "t": 1652312411581,
            "normalizedT": 179
        },
        {
            "x": 403.33331298828125,
            "y": 312.0728759765625,
            "normalizedX": 0.8066666259765625,
            "normalizedY": 0.624145751953125,
            "t": 1652312411597,
            "normalizedT": 195
        },
        {
            "x": 404.33331298828125,
            "y": 312.0728759765625,
            "normalizedX": 0.8086666259765625,
            "normalizedY": 0.624145751953125,
            "t": 1652312411614,
            "normalizedT": 212
        },
        {
            "x": 404.33331298828125,
            "y": 317.0728759765625,
            "normalizedX": 0.8086666259765625,
            "normalizedY": 0.634145751953125,
            "t": 1652312411881,
            "normalizedT": 479
        },
        {
            "x": 405.33331298828125,
            "y": 328.0728759765625,
            "normalizedX": 0.8106666259765625,
            "normalizedY": 0.656145751953125,
            "t": 1652312411897,
            "normalizedT": 495
        },
        {
            "x": 410.33331298828125,
            "y": 348.0728759765625,
            "normalizedX": 0.8206666259765625,
            "normalizedY": 0.696145751953125,
            "t": 1652312411914,
            "normalizedT": 512
        },
        {
            "x": 418.33331298828125,
            "y": 376.0728759765625,
            "normalizedX": 0.8366666259765625,
            "normalizedY": 0.752145751953125,
            "t": 1652312411931,
            "normalizedT": 529
        },
        {
            "x": 432.33331298828125,
            "y": 405.0728759765625,
            "normalizedX": 0.8646666259765625,
            "normalizedY": 0.810145751953125,
            "t": 1652312411947,
            "normalizedT": 545
        },
        {
            "x": 445.33331298828125,
            "y": 433.0728759765625,
            "normalizedX": 0.8906666259765625,
            "normalizedY": 0.866145751953125,
            "t": 1652312411964,
            "normalizedT": 562
        },
        {
            "x": 453.33331298828125,
            "y": 452.0728759765625,
            "normalizedX": 0.9066666259765624,
            "normalizedY": 0.904145751953125,
            "t": 1652312411981,
            "normalizedT": 579
        },
        {
            "x": 462.33331298828125,
            "y": 467.0728759765625,
            "normalizedX": 0.9246666259765625,
            "normalizedY": 0.934145751953125,
            "t": 1652312411997,
            "normalizedT": 595
        },
        {
            "x": 471.33331298828125,
            "y": 475.0728759765625,
            "normalizedX": 0.9426666259765625,
            "normalizedY": 0.950145751953125,
            "t": 1652312412014,
            "normalizedT": 612
        },
        {
            "x": 477.33331298828125,
            "y": 476.0728759765625,
            "normalizedX": 0.9546666259765625,
            "normalizedY": 0.952145751953125,
            "t": 1652312412031,
            "normalizedT": 629
        },
        {
            "x": 481.33331298828125,
            "y": 476.0728759765625,
            "normalizedX": 0.9626666259765625,
            "normalizedY": 0.952145751953125,
            "t": 1652312412037,
            "normalizedT": 635
        }
    ]
];
