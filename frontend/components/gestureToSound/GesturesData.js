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


const GESTURE_LINES_UNUSED = [
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
            "x": 80,
            "y": 459.4478759765625,
            "normalizedX": 0.16,
            "normalizedY": 0.918895751953125,
            "t": 1652540427853,
            "normalizedT": 0
        },
        {
            "x": 80,
            "y": 459.4478759765625,
            "normalizedX": 0.16,
            "normalizedY": 0.918895751953125,
            "t": 1652540427926,
            "normalizedT": 73
        },
        {
            "x": 78,
            "y": 459.4478759765625,
            "normalizedX": 0.156,
            "normalizedY": 0.918895751953125,
            "t": 1652540427972,
            "normalizedT": 119
        },
        {
            "x": 76,
            "y": 459.4478759765625,
            "normalizedX": 0.152,
            "normalizedY": 0.918895751953125,
            "t": 1652540427990,
            "normalizedT": 137
        },
        {
            "x": 76,
            "y": 459.4478759765625,
            "normalizedX": 0.152,
            "normalizedY": 0.918895751953125,
            "t": 1652540428006,
            "normalizedT": 153
        },
        {
            "x": 75,
            "y": 459.4478759765625,
            "normalizedX": 0.15,
            "normalizedY": 0.918895751953125,
            "t": 1652540428023,
            "normalizedT": 170
        },
        {
            "x": 74,
            "y": 459.4478759765625,
            "normalizedX": 0.148,
            "normalizedY": 0.918895751953125,
            "t": 1652540428045,
            "normalizedT": 192
        },
        {
            "x": 74,
            "y": 459.4478759765625,
            "normalizedX": 0.148,
            "normalizedY": 0.918895751953125,
            "t": 1652540428056,
            "normalizedT": 203
        },
        {
            "x": 73,
            "y": 459.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.918895751953125,
            "t": 1652540428073,
            "normalizedT": 220
        },
        {
            "x": 71,
            "y": 459.4478759765625,
            "normalizedX": 0.142,
            "normalizedY": 0.918895751953125,
            "t": 1652540428089,
            "normalizedT": 236
        },
        {
            "x": 69,
            "y": 457.4478759765625,
            "normalizedX": 0.138,
            "normalizedY": 0.914895751953125,
            "t": 1652540428106,
            "normalizedT": 253
        },
        {
            "x": 63,
            "y": 455.4478759765625,
            "normalizedX": 0.126,
            "normalizedY": 0.910895751953125,
            "t": 1652540428123,
            "normalizedT": 270
        },
        {
            "x": 58,
            "y": 451.4478759765625,
            "normalizedX": 0.116,
            "normalizedY": 0.902895751953125,
            "t": 1652540428139,
            "normalizedT": 286
        },
        {
            "x": 54,
            "y": 447.4478759765625,
            "normalizedX": 0.108,
            "normalizedY": 0.894895751953125,
            "t": 1652540428156,
            "normalizedT": 303
        },
        {
            "x": 49,
            "y": 443.4478759765625,
            "normalizedX": 0.098,
            "normalizedY": 0.886895751953125,
            "t": 1652540428172,
            "normalizedT": 319
        },
        {
            "x": 47,
            "y": 442.4478759765625,
            "normalizedX": 0.094,
            "normalizedY": 0.884895751953125,
            "t": 1652540428189,
            "normalizedT": 336
        },
        {
            "x": 46,
            "y": 440.4478759765625,
            "normalizedX": 0.092,
            "normalizedY": 0.880895751953125,
            "t": 1652540428206,
            "normalizedT": 353
        },
        {
            "x": 45,
            "y": 438.4478759765625,
            "normalizedX": 0.09,
            "normalizedY": 0.876895751953125,
            "t": 1652540428222,
            "normalizedT": 369
        },
        {
            "x": 45,
            "y": 436.4478759765625,
            "normalizedX": 0.09,
            "normalizedY": 0.872895751953125,
            "t": 1652540428239,
            "normalizedT": 386
        },
        {
            "x": 45,
            "y": 431.4478759765625,
            "normalizedX": 0.09,
            "normalizedY": 0.862895751953125,
            "t": 1652540428257,
            "normalizedT": 404
        },
        {
            "x": 44,
            "y": 427.4478759765625,
            "normalizedX": 0.088,
            "normalizedY": 0.854895751953125,
            "t": 1652540428273,
            "normalizedT": 420
        },
        {
            "x": 44,
            "y": 422.4478759765625,
            "normalizedX": 0.088,
            "normalizedY": 0.844895751953125,
            "t": 1652540428290,
            "normalizedT": 437
        },
        {
            "x": 44,
            "y": 419.4478759765625,
            "normalizedX": 0.088,
            "normalizedY": 0.838895751953125,
            "t": 1652540428306,
            "normalizedT": 453
        },
        {
            "x": 44,
            "y": 413.4478759765625,
            "normalizedX": 0.088,
            "normalizedY": 0.826895751953125,
            "t": 1652540428323,
            "normalizedT": 470
        },
        {
            "x": 44,
            "y": 408.4478759765625,
            "normalizedX": 0.088,
            "normalizedY": 0.816895751953125,
            "t": 1652540428340,
            "normalizedT": 487
        },
        {
            "x": 44,
            "y": 405.4478759765625,
            "normalizedX": 0.088,
            "normalizedY": 0.810895751953125,
            "t": 1652540428356,
            "normalizedT": 503
        },
        {
            "x": 46,
            "y": 401.4478759765625,
            "normalizedX": 0.092,
            "normalizedY": 0.802895751953125,
            "t": 1652540428373,
            "normalizedT": 520
        },
        {
            "x": 47,
            "y": 398.4478759765625,
            "normalizedX": 0.094,
            "normalizedY": 0.796895751953125,
            "t": 1652540428389,
            "normalizedT": 536
        },
        {
            "x": 49,
            "y": 395.4478759765625,
            "normalizedX": 0.098,
            "normalizedY": 0.790895751953125,
            "t": 1652540428406,
            "normalizedT": 553
        },
        {
            "x": 50,
            "y": 395.4478759765625,
            "normalizedX": 0.1,
            "normalizedY": 0.790895751953125,
            "t": 1652540428423,
            "normalizedT": 570
        },
        {
            "x": 52,
            "y": 393.4478759765625,
            "normalizedX": 0.104,
            "normalizedY": 0.786895751953125,
            "t": 1652540428439,
            "normalizedT": 586
        },
        {
            "x": 53,
            "y": 392.4478759765625,
            "normalizedX": 0.106,
            "normalizedY": 0.784895751953125,
            "t": 1652540428456,
            "normalizedT": 603
        },
        {
            "x": 54,
            "y": 391.4478759765625,
            "normalizedX": 0.108,
            "normalizedY": 0.782895751953125,
            "t": 1652540428473,
            "normalizedT": 620
        },
        {
            "x": 56,
            "y": 391.4478759765625,
            "normalizedX": 0.112,
            "normalizedY": 0.782895751953125,
            "t": 1652540428489,
            "normalizedT": 636
        },
        {
            "x": 59,
            "y": 391.4478759765625,
            "normalizedX": 0.118,
            "normalizedY": 0.782895751953125,
            "t": 1652540428506,
            "normalizedT": 653
        },
        {
            "x": 62,
            "y": 390.4478759765625,
            "normalizedX": 0.124,
            "normalizedY": 0.780895751953125,
            "t": 1652540428523,
            "normalizedT": 670
        },
        {
            "x": 66,
            "y": 390.4478759765625,
            "normalizedX": 0.132,
            "normalizedY": 0.780895751953125,
            "t": 1652540428539,
            "normalizedT": 686
        },
        {
            "x": 69,
            "y": 390.4478759765625,
            "normalizedX": 0.138,
            "normalizedY": 0.780895751953125,
            "t": 1652540428556,
            "normalizedT": 703
        },
        {
            "x": 73,
            "y": 390.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.780895751953125,
            "t": 1652540428573,
            "normalizedT": 720
        },
        {
            "x": 76,
            "y": 390.4478759765625,
            "normalizedX": 0.152,
            "normalizedY": 0.780895751953125,
            "t": 1652540428589,
            "normalizedT": 736
        },
        {
            "x": 79,
            "y": 391.4478759765625,
            "normalizedX": 0.158,
            "normalizedY": 0.782895751953125,
            "t": 1652540428606,
            "normalizedT": 753
        },
        {
            "x": 82,
            "y": 393.4478759765625,
            "normalizedX": 0.164,
            "normalizedY": 0.786895751953125,
            "t": 1652540428623,
            "normalizedT": 770
        },
        {
            "x": 85,
            "y": 395.4478759765625,
            "normalizedX": 0.17,
            "normalizedY": 0.790895751953125,
            "t": 1652540428639,
            "normalizedT": 786
        },
        {
            "x": 86,
            "y": 397.4478759765625,
            "normalizedX": 0.172,
            "normalizedY": 0.794895751953125,
            "t": 1652540428656,
            "normalizedT": 803
        },
        {
            "x": 87,
            "y": 398.4478759765625,
            "normalizedX": 0.174,
            "normalizedY": 0.796895751953125,
            "t": 1652540428673,
            "normalizedT": 820
        },
        {
            "x": 88,
            "y": 399.4478759765625,
            "normalizedX": 0.176,
            "normalizedY": 0.798895751953125,
            "t": 1652540428689,
            "normalizedT": 836
        },
        {
            "x": 89,
            "y": 401.4478759765625,
            "normalizedX": 0.178,
            "normalizedY": 0.802895751953125,
            "t": 1652540428706,
            "normalizedT": 853
        },
        {
            "x": 90,
            "y": 403.4478759765625,
            "normalizedX": 0.18,
            "normalizedY": 0.806895751953125,
            "t": 1652540428723,
            "normalizedT": 870
        },
        {
            "x": 90,
            "y": 404.4478759765625,
            "normalizedX": 0.18,
            "normalizedY": 0.808895751953125,
            "t": 1652540428739,
            "normalizedT": 886
        },
        {
            "x": 90,
            "y": 406.4478759765625,
            "normalizedX": 0.18,
            "normalizedY": 0.812895751953125,
            "t": 1652540428756,
            "normalizedT": 903
        },
        {
            "x": 90,
            "y": 407.4478759765625,
            "normalizedX": 0.18,
            "normalizedY": 0.814895751953125,
            "t": 1652540428773,
            "normalizedT": 920
        },
        {
            "x": 90,
            "y": 408.4478759765625,
            "normalizedX": 0.18,
            "normalizedY": 0.816895751953125,
            "t": 1652540428789,
            "normalizedT": 936
        },
        {
            "x": 89,
            "y": 409.4478759765625,
            "normalizedX": 0.178,
            "normalizedY": 0.818895751953125,
            "t": 1652540428806,
            "normalizedT": 953
        },
        {
            "x": 87,
            "y": 410.4478759765625,
            "normalizedX": 0.174,
            "normalizedY": 0.820895751953125,
            "t": 1652540428822,
            "normalizedT": 969
        },
        {
            "x": 86,
            "y": 411.4478759765625,
            "normalizedX": 0.172,
            "normalizedY": 0.822895751953125,
            "t": 1652540428839,
            "normalizedT": 986
        },
        {
            "x": 83,
            "y": 411.4478759765625,
            "normalizedX": 0.166,
            "normalizedY": 0.822895751953125,
            "t": 1652540428856,
            "normalizedT": 1003
        },
        {
            "x": 80,
            "y": 411.4478759765625,
            "normalizedX": 0.16,
            "normalizedY": 0.822895751953125,
            "t": 1652540428872,
            "normalizedT": 1019
        },
        {
            "x": 77,
            "y": 411.4478759765625,
            "normalizedX": 0.154,
            "normalizedY": 0.822895751953125,
            "t": 1652540428889,
            "normalizedT": 1036
        },
        {
            "x": 74,
            "y": 411.4478759765625,
            "normalizedX": 0.148,
            "normalizedY": 0.822895751953125,
            "t": 1652540428906,
            "normalizedT": 1053
        },
        {
            "x": 72,
            "y": 411.4478759765625,
            "normalizedX": 0.144,
            "normalizedY": 0.822895751953125,
            "t": 1652540428923,
            "normalizedT": 1070
        },
        {
            "x": 69,
            "y": 407.4478759765625,
            "normalizedX": 0.138,
            "normalizedY": 0.814895751953125,
            "t": 1652540428939,
            "normalizedT": 1086
        },
        {
            "x": 68,
            "y": 403.4478759765625,
            "normalizedX": 0.136,
            "normalizedY": 0.806895751953125,
            "t": 1652540428956,
            "normalizedT": 1103
        },
        {
            "x": 66,
            "y": 399.4478759765625,
            "normalizedX": 0.132,
            "normalizedY": 0.798895751953125,
            "t": 1652540428973,
            "normalizedT": 1120
        },
        {
            "x": 66,
            "y": 393.4478759765625,
            "normalizedX": 0.132,
            "normalizedY": 0.786895751953125,
            "t": 1652540428989,
            "normalizedT": 1136
        },
        {
            "x": 66,
            "y": 389.4478759765625,
            "normalizedX": 0.132,
            "normalizedY": 0.778895751953125,
            "t": 1652540429006,
            "normalizedT": 1153
        },
        {
            "x": 67,
            "y": 385.4478759765625,
            "normalizedX": 0.134,
            "normalizedY": 0.770895751953125,
            "t": 1652540429023,
            "normalizedT": 1170
        },
        {
            "x": 70,
            "y": 376.4478759765625,
            "normalizedX": 0.14,
            "normalizedY": 0.752895751953125,
            "t": 1652540429039,
            "normalizedT": 1186
        },
        {
            "x": 73,
            "y": 370.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.740895751953125,
            "t": 1652540429056,
            "normalizedT": 1203
        },
        {
            "x": 76,
            "y": 363.4478759765625,
            "normalizedX": 0.152,
            "normalizedY": 0.726895751953125,
            "t": 1652540429073,
            "normalizedT": 1220
        },
        {
            "x": 80,
            "y": 355.4478759765625,
            "normalizedX": 0.16,
            "normalizedY": 0.710895751953125,
            "t": 1652540429089,
            "normalizedT": 1236
        },
        {
            "x": 86,
            "y": 345.4478759765625,
            "normalizedX": 0.172,
            "normalizedY": 0.690895751953125,
            "t": 1652540429106,
            "normalizedT": 1253
        },
        {
            "x": 90,
            "y": 341.4478759765625,
            "normalizedX": 0.18,
            "normalizedY": 0.682895751953125,
            "t": 1652540429123,
            "normalizedT": 1270
        },
        {
            "x": 93,
            "y": 337.4478759765625,
            "normalizedX": 0.186,
            "normalizedY": 0.674895751953125,
            "t": 1652540429139,
            "normalizedT": 1286
        },
        {
            "x": 96,
            "y": 335.4478759765625,
            "normalizedX": 0.192,
            "normalizedY": 0.670895751953125,
            "t": 1652540429156,
            "normalizedT": 1303
        },
        {
            "x": 98,
            "y": 333.4478759765625,
            "normalizedX": 0.196,
            "normalizedY": 0.666895751953125,
            "t": 1652540429172,
            "normalizedT": 1319
        },
        {
            "x": 100,
            "y": 333.4478759765625,
            "normalizedX": 0.2,
            "normalizedY": 0.666895751953125,
            "t": 1652540429189,
            "normalizedT": 1336
        },
        {
            "x": 101,
            "y": 332.4478759765625,
            "normalizedX": 0.202,
            "normalizedY": 0.664895751953125,
            "t": 1652540429206,
            "normalizedT": 1353
        },
        {
            "x": 102,
            "y": 332.4478759765625,
            "normalizedX": 0.204,
            "normalizedY": 0.664895751953125,
            "t": 1652540429223,
            "normalizedT": 1370
        },
        {
            "x": 103,
            "y": 332.4478759765625,
            "normalizedX": 0.206,
            "normalizedY": 0.664895751953125,
            "t": 1652540429239,
            "normalizedT": 1386
        },
        {
            "x": 105,
            "y": 332.4478759765625,
            "normalizedX": 0.21,
            "normalizedY": 0.664895751953125,
            "t": 1652540429257,
            "normalizedT": 1404
        },
        {
            "x": 108,
            "y": 333.4478759765625,
            "normalizedX": 0.216,
            "normalizedY": 0.666895751953125,
            "t": 1652540429273,
            "normalizedT": 1420
        },
        {
            "x": 110,
            "y": 335.4478759765625,
            "normalizedX": 0.22,
            "normalizedY": 0.670895751953125,
            "t": 1652540429290,
            "normalizedT": 1437
        },
        {
            "x": 113,
            "y": 337.4478759765625,
            "normalizedX": 0.226,
            "normalizedY": 0.674895751953125,
            "t": 1652540429306,
            "normalizedT": 1453
        },
        {
            "x": 115,
            "y": 339.4478759765625,
            "normalizedX": 0.23,
            "normalizedY": 0.678895751953125,
            "t": 1652540429323,
            "normalizedT": 1470
        },
        {
            "x": 118,
            "y": 341.4478759765625,
            "normalizedX": 0.236,
            "normalizedY": 0.682895751953125,
            "t": 1652540429339,
            "normalizedT": 1486
        },
        {
            "x": 119,
            "y": 343.4478759765625,
            "normalizedX": 0.238,
            "normalizedY": 0.686895751953125,
            "t": 1652540429356,
            "normalizedT": 1503
        },
        {
            "x": 120,
            "y": 344.4478759765625,
            "normalizedX": 0.24,
            "normalizedY": 0.688895751953125,
            "t": 1652540429372,
            "normalizedT": 1519
        },
        {
            "x": 120,
            "y": 345.4478759765625,
            "normalizedX": 0.24,
            "normalizedY": 0.690895751953125,
            "t": 1652540429389,
            "normalizedT": 1536
        },
        {
            "x": 120,
            "y": 347.4478759765625,
            "normalizedX": 0.24,
            "normalizedY": 0.694895751953125,
            "t": 1652540429406,
            "normalizedT": 1553
        },
        {
            "x": 120,
            "y": 347.4478759765625,
            "normalizedX": 0.24,
            "normalizedY": 0.694895751953125,
            "t": 1652540429423,
            "normalizedT": 1570
        },
        {
            "x": 120,
            "y": 348.4478759765625,
            "normalizedX": 0.24,
            "normalizedY": 0.696895751953125,
            "t": 1652540429439,
            "normalizedT": 1586
        },
        {
            "x": 120,
            "y": 350.4478759765625,
            "normalizedX": 0.24,
            "normalizedY": 0.700895751953125,
            "t": 1652540429456,
            "normalizedT": 1603
        },
        {
            "x": 119,
            "y": 351.4478759765625,
            "normalizedX": 0.238,
            "normalizedY": 0.702895751953125,
            "t": 1652540429473,
            "normalizedT": 1620
        },
        {
            "x": 118,
            "y": 352.4478759765625,
            "normalizedX": 0.236,
            "normalizedY": 0.704895751953125,
            "t": 1652540429489,
            "normalizedT": 1636
        },
        {
            "x": 115,
            "y": 353.4478759765625,
            "normalizedX": 0.23,
            "normalizedY": 0.706895751953125,
            "t": 1652540429506,
            "normalizedT": 1653
        },
        {
            "x": 113,
            "y": 353.4478759765625,
            "normalizedX": 0.226,
            "normalizedY": 0.706895751953125,
            "t": 1652540429522,
            "normalizedT": 1669
        },
        {
            "x": 112,
            "y": 353.4478759765625,
            "normalizedX": 0.224,
            "normalizedY": 0.706895751953125,
            "t": 1652540429539,
            "normalizedT": 1686
        },
        {
            "x": 108,
            "y": 352.4478759765625,
            "normalizedX": 0.216,
            "normalizedY": 0.704895751953125,
            "t": 1652540429556,
            "normalizedT": 1703
        },
        {
            "x": 104,
            "y": 350.4478759765625,
            "normalizedX": 0.208,
            "normalizedY": 0.700895751953125,
            "t": 1652540429573,
            "normalizedT": 1720
        },
        {
            "x": 100,
            "y": 347.4478759765625,
            "normalizedX": 0.2,
            "normalizedY": 0.694895751953125,
            "t": 1652540429589,
            "normalizedT": 1736
        },
        {
            "x": 98,
            "y": 343.4478759765625,
            "normalizedX": 0.196,
            "normalizedY": 0.686895751953125,
            "t": 1652540429606,
            "normalizedT": 1753
        },
        {
            "x": 96,
            "y": 340.4478759765625,
            "normalizedX": 0.192,
            "normalizedY": 0.680895751953125,
            "t": 1652540429623,
            "normalizedT": 1770
        },
        {
            "x": 96,
            "y": 335.4478759765625,
            "normalizedX": 0.192,
            "normalizedY": 0.670895751953125,
            "t": 1652540429639,
            "normalizedT": 1786
        },
        {
            "x": 96,
            "y": 329.4478759765625,
            "normalizedX": 0.192,
            "normalizedY": 0.658895751953125,
            "t": 1652540429656,
            "normalizedT": 1803
        },
        {
            "x": 96,
            "y": 327.4478759765625,
            "normalizedX": 0.192,
            "normalizedY": 0.654895751953125,
            "t": 1652540429673,
            "normalizedT": 1820
        },
        {
            "x": 97,
            "y": 321.4478759765625,
            "normalizedX": 0.194,
            "normalizedY": 0.642895751953125,
            "t": 1652540429689,
            "normalizedT": 1836
        },
        {
            "x": 100,
            "y": 315.4478759765625,
            "normalizedX": 0.2,
            "normalizedY": 0.630895751953125,
            "t": 1652540429706,
            "normalizedT": 1853
        },
        {
            "x": 103,
            "y": 310.4478759765625,
            "normalizedX": 0.206,
            "normalizedY": 0.620895751953125,
            "t": 1652540429723,
            "normalizedT": 1870
        },
        {
            "x": 106,
            "y": 305.4478759765625,
            "normalizedX": 0.212,
            "normalizedY": 0.610895751953125,
            "t": 1652540429739,
            "normalizedT": 1886
        },
        {
            "x": 109,
            "y": 302.4478759765625,
            "normalizedX": 0.218,
            "normalizedY": 0.604895751953125,
            "t": 1652540429756,
            "normalizedT": 1903
        },
        {
            "x": 113,
            "y": 297.4478759765625,
            "normalizedX": 0.226,
            "normalizedY": 0.594895751953125,
            "t": 1652540429773,
            "normalizedT": 1920
        },
        {
            "x": 116,
            "y": 295.4478759765625,
            "normalizedX": 0.232,
            "normalizedY": 0.590895751953125,
            "t": 1652540429789,
            "normalizedT": 1936
        },
        {
            "x": 120,
            "y": 291.4478759765625,
            "normalizedX": 0.24,
            "normalizedY": 0.582895751953125,
            "t": 1652540429806,
            "normalizedT": 1953
        },
        {
            "x": 123,
            "y": 289.4478759765625,
            "normalizedX": 0.246,
            "normalizedY": 0.578895751953125,
            "t": 1652540429823,
            "normalizedT": 1970
        },
        {
            "x": 128,
            "y": 285.4478759765625,
            "normalizedX": 0.256,
            "normalizedY": 0.570895751953125,
            "t": 1652540429839,
            "normalizedT": 1986
        },
        {
            "x": 132,
            "y": 284.4478759765625,
            "normalizedX": 0.264,
            "normalizedY": 0.568895751953125,
            "t": 1652540429856,
            "normalizedT": 2003
        },
        {
            "x": 134,
            "y": 283.4478759765625,
            "normalizedX": 0.268,
            "normalizedY": 0.566895751953125,
            "t": 1652540429873,
            "normalizedT": 2020
        },
        {
            "x": 137,
            "y": 283.4478759765625,
            "normalizedX": 0.274,
            "normalizedY": 0.566895751953125,
            "t": 1652540429889,
            "normalizedT": 2036
        },
        {
            "x": 138,
            "y": 283.4478759765625,
            "normalizedX": 0.276,
            "normalizedY": 0.566895751953125,
            "t": 1652540429906,
            "normalizedT": 2053
        },
        {
            "x": 138,
            "y": 283.4478759765625,
            "normalizedX": 0.276,
            "normalizedY": 0.566895751953125,
            "t": 1652540429923,
            "normalizedT": 2070
        },
        {
            "x": 140,
            "y": 284.4478759765625,
            "normalizedX": 0.28,
            "normalizedY": 0.568895751953125,
            "t": 1652540429939,
            "normalizedT": 2086
        },
        {
            "x": 141,
            "y": 286.4478759765625,
            "normalizedX": 0.282,
            "normalizedY": 0.572895751953125,
            "t": 1652540429956,
            "normalizedT": 2103
        },
        {
            "x": 143,
            "y": 289.4478759765625,
            "normalizedX": 0.286,
            "normalizedY": 0.578895751953125,
            "t": 1652540429972,
            "normalizedT": 2119
        },
        {
            "x": 144,
            "y": 292.4478759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.584895751953125,
            "t": 1652540429989,
            "normalizedT": 2136
        },
        {
            "x": 144,
            "y": 295.4478759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.590895751953125,
            "t": 1652540430006,
            "normalizedT": 2153
        },
        {
            "x": 144,
            "y": 296.4478759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.592895751953125,
            "t": 1652540430023,
            "normalizedT": 2170
        },
        {
            "x": 144,
            "y": 297.4478759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.594895751953125,
            "t": 1652540430039,
            "normalizedT": 2186
        },
        {
            "x": 144,
            "y": 298.4478759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.596895751953125,
            "t": 1652540430056,
            "normalizedT": 2203
        },
        {
            "x": 144,
            "y": 299.4478759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.598895751953125,
            "t": 1652540430073,
            "normalizedT": 2220
        },
        {
            "x": 142,
            "y": 301.4478759765625,
            "normalizedX": 0.284,
            "normalizedY": 0.602895751953125,
            "t": 1652540430089,
            "normalizedT": 2236
        },
        {
            "x": 139,
            "y": 302.4478759765625,
            "normalizedX": 0.278,
            "normalizedY": 0.604895751953125,
            "t": 1652540430106,
            "normalizedT": 2253
        },
        {
            "x": 135,
            "y": 303.4478759765625,
            "normalizedX": 0.27,
            "normalizedY": 0.606895751953125,
            "t": 1652540430123,
            "normalizedT": 2270
        },
        {
            "x": 132,
            "y": 303.4478759765625,
            "normalizedX": 0.264,
            "normalizedY": 0.606895751953125,
            "t": 1652540430140,
            "normalizedT": 2287
        },
        {
            "x": 132,
            "y": 303.4478759765625,
            "normalizedX": 0.264,
            "normalizedY": 0.606895751953125,
            "t": 1652540430156,
            "normalizedT": 2303
        },
        {
            "x": 131,
            "y": 303.4478759765625,
            "normalizedX": 0.262,
            "normalizedY": 0.606895751953125,
            "t": 1652540430173,
            "normalizedT": 2320
        },
        {
            "x": 130,
            "y": 303.4478759765625,
            "normalizedX": 0.26,
            "normalizedY": 0.606895751953125,
            "t": 1652540430189,
            "normalizedT": 2336
        },
        {
            "x": 128,
            "y": 303.4478759765625,
            "normalizedX": 0.256,
            "normalizedY": 0.606895751953125,
            "t": 1652540430206,
            "normalizedT": 2353
        },
        {
            "x": 126,
            "y": 298.4478759765625,
            "normalizedX": 0.252,
            "normalizedY": 0.596895751953125,
            "t": 1652540430223,
            "normalizedT": 2370
        },
        {
            "x": 124,
            "y": 293.4478759765625,
            "normalizedX": 0.248,
            "normalizedY": 0.586895751953125,
            "t": 1652540430239,
            "normalizedT": 2386
        },
        {
            "x": 124,
            "y": 287.4478759765625,
            "normalizedX": 0.248,
            "normalizedY": 0.574895751953125,
            "t": 1652540430257,
            "normalizedT": 2404
        },
        {
            "x": 124,
            "y": 279.4478759765625,
            "normalizedX": 0.248,
            "normalizedY": 0.558895751953125,
            "t": 1652540430273,
            "normalizedT": 2420
        },
        {
            "x": 125,
            "y": 271.4478759765625,
            "normalizedX": 0.25,
            "normalizedY": 0.542895751953125,
            "t": 1652540430290,
            "normalizedT": 2437
        },
        {
            "x": 128,
            "y": 261.4478759765625,
            "normalizedX": 0.256,
            "normalizedY": 0.522895751953125,
            "t": 1652540430306,
            "normalizedT": 2453
        },
        {
            "x": 131,
            "y": 255.4478759765625,
            "normalizedX": 0.262,
            "normalizedY": 0.510895751953125,
            "t": 1652540430323,
            "normalizedT": 2470
        },
        {
            "x": 133,
            "y": 251.4478759765625,
            "normalizedX": 0.266,
            "normalizedY": 0.502895751953125,
            "t": 1652540430340,
            "normalizedT": 2487
        },
        {
            "x": 135,
            "y": 248.4478759765625,
            "normalizedX": 0.27,
            "normalizedY": 0.496895751953125,
            "t": 1652540430356,
            "normalizedT": 2503
        },
        {
            "x": 139,
            "y": 244.4478759765625,
            "normalizedX": 0.278,
            "normalizedY": 0.488895751953125,
            "t": 1652540430373,
            "normalizedT": 2520
        },
        {
            "x": 143,
            "y": 240.4478759765625,
            "normalizedX": 0.286,
            "normalizedY": 0.480895751953125,
            "t": 1652540430389,
            "normalizedT": 2536
        },
        {
            "x": 146,
            "y": 238.4478759765625,
            "normalizedX": 0.292,
            "normalizedY": 0.476895751953125,
            "t": 1652540430406,
            "normalizedT": 2553
        },
        {
            "x": 150,
            "y": 237.4478759765625,
            "normalizedX": 0.3,
            "normalizedY": 0.474895751953125,
            "t": 1652540430423,
            "normalizedT": 2570
        },
        {
            "x": 156,
            "y": 236.4478759765625,
            "normalizedX": 0.312,
            "normalizedY": 0.472895751953125,
            "t": 1652540430439,
            "normalizedT": 2586
        },
        {
            "x": 160,
            "y": 235.4478759765625,
            "normalizedX": 0.32,
            "normalizedY": 0.470895751953125,
            "t": 1652540430456,
            "normalizedT": 2603
        },
        {
            "x": 166,
            "y": 235.4478759765625,
            "normalizedX": 0.332,
            "normalizedY": 0.470895751953125,
            "t": 1652540430473,
            "normalizedT": 2620
        },
        {
            "x": 169,
            "y": 235.4478759765625,
            "normalizedX": 0.338,
            "normalizedY": 0.470895751953125,
            "t": 1652540430489,
            "normalizedT": 2636
        },
        {
            "x": 172,
            "y": 235.4478759765625,
            "normalizedX": 0.344,
            "normalizedY": 0.470895751953125,
            "t": 1652540430506,
            "normalizedT": 2653
        },
        {
            "x": 174,
            "y": 237.4478759765625,
            "normalizedX": 0.348,
            "normalizedY": 0.474895751953125,
            "t": 1652540430523,
            "normalizedT": 2670
        },
        {
            "x": 175,
            "y": 239.4478759765625,
            "normalizedX": 0.35,
            "normalizedY": 0.478895751953125,
            "t": 1652540430540,
            "normalizedT": 2687
        },
        {
            "x": 176,
            "y": 240.4478759765625,
            "normalizedX": 0.352,
            "normalizedY": 0.480895751953125,
            "t": 1652540430557,
            "normalizedT": 2704
        },
        {
            "x": 179,
            "y": 245.4478759765625,
            "normalizedX": 0.358,
            "normalizedY": 0.490895751953125,
            "t": 1652540430573,
            "normalizedT": 2720
        },
        {
            "x": 180,
            "y": 247.4478759765625,
            "normalizedX": 0.36,
            "normalizedY": 0.494895751953125,
            "t": 1652540430590,
            "normalizedT": 2737
        },
        {
            "x": 180,
            "y": 249.4478759765625,
            "normalizedX": 0.36,
            "normalizedY": 0.498895751953125,
            "t": 1652540430606,
            "normalizedT": 2753
        },
        {
            "x": 181,
            "y": 251.4478759765625,
            "normalizedX": 0.362,
            "normalizedY": 0.502895751953125,
            "t": 1652540430623,
            "normalizedT": 2770
        },
        {
            "x": 181,
            "y": 252.4478759765625,
            "normalizedX": 0.362,
            "normalizedY": 0.504895751953125,
            "t": 1652540430639,
            "normalizedT": 2786
        },
        {
            "x": 181,
            "y": 253.4478759765625,
            "normalizedX": 0.362,
            "normalizedY": 0.506895751953125,
            "t": 1652540430656,
            "normalizedT": 2803
        },
        {
            "x": 181,
            "y": 253.4478759765625,
            "normalizedX": 0.362,
            "normalizedY": 0.506895751953125,
            "t": 1652540430673,
            "normalizedT": 2820
        },
        {
            "x": 180,
            "y": 253.4478759765625,
            "normalizedX": 0.36,
            "normalizedY": 0.506895751953125,
            "t": 1652540430689,
            "normalizedT": 2836
        },
        {
            "x": 179,
            "y": 254.4478759765625,
            "normalizedX": 0.358,
            "normalizedY": 0.508895751953125,
            "t": 1652540430706,
            "normalizedT": 2853
        },
        {
            "x": 178,
            "y": 254.4478759765625,
            "normalizedX": 0.356,
            "normalizedY": 0.508895751953125,
            "t": 1652540430723,
            "normalizedT": 2870
        },
        {
            "x": 175,
            "y": 254.4478759765625,
            "normalizedX": 0.35,
            "normalizedY": 0.508895751953125,
            "t": 1652540430739,
            "normalizedT": 2886
        },
        {
            "x": 172,
            "y": 254.4478759765625,
            "normalizedX": 0.344,
            "normalizedY": 0.508895751953125,
            "t": 1652540430756,
            "normalizedT": 2903
        },
        {
            "x": 170,
            "y": 254.4478759765625,
            "normalizedX": 0.34,
            "normalizedY": 0.508895751953125,
            "t": 1652540430773,
            "normalizedT": 2920
        },
        {
            "x": 168,
            "y": 253.4478759765625,
            "normalizedX": 0.336,
            "normalizedY": 0.506895751953125,
            "t": 1652540430789,
            "normalizedT": 2936
        },
        {
            "x": 167,
            "y": 252.4478759765625,
            "normalizedX": 0.334,
            "normalizedY": 0.504895751953125,
            "t": 1652540430806,
            "normalizedT": 2953
        },
        {
            "x": 165,
            "y": 249.4478759765625,
            "normalizedX": 0.33,
            "normalizedY": 0.498895751953125,
            "t": 1652540430823,
            "normalizedT": 2970
        },
        {
            "x": 164,
            "y": 244.4478759765625,
            "normalizedX": 0.328,
            "normalizedY": 0.488895751953125,
            "t": 1652540430839,
            "normalizedT": 2986
        },
        {
            "x": 163,
            "y": 239.4478759765625,
            "normalizedX": 0.326,
            "normalizedY": 0.478895751953125,
            "t": 1652540430856,
            "normalizedT": 3003
        },
        {
            "x": 163,
            "y": 235.4478759765625,
            "normalizedX": 0.326,
            "normalizedY": 0.470895751953125,
            "t": 1652540430873,
            "normalizedT": 3020
        },
        {
            "x": 165,
            "y": 231.4478759765625,
            "normalizedX": 0.33,
            "normalizedY": 0.462895751953125,
            "t": 1652540430889,
            "normalizedT": 3036
        },
        {
            "x": 168,
            "y": 225.4478759765625,
            "normalizedX": 0.336,
            "normalizedY": 0.450895751953125,
            "t": 1652540430906,
            "normalizedT": 3053
        },
        {
            "x": 171,
            "y": 221.4478759765625,
            "normalizedX": 0.342,
            "normalizedY": 0.442895751953125,
            "t": 1652540430923,
            "normalizedT": 3070
        },
        {
            "x": 177,
            "y": 211.4478759765625,
            "normalizedX": 0.354,
            "normalizedY": 0.422895751953125,
            "t": 1652540430939,
            "normalizedT": 3086
        },
        {
            "x": 181,
            "y": 203.4478759765625,
            "normalizedX": 0.362,
            "normalizedY": 0.406895751953125,
            "t": 1652540430956,
            "normalizedT": 3103
        },
        {
            "x": 186,
            "y": 197.4478759765625,
            "normalizedX": 0.372,
            "normalizedY": 0.394895751953125,
            "t": 1652540430973,
            "normalizedT": 3120
        },
        {
            "x": 191,
            "y": 191.4478759765625,
            "normalizedX": 0.382,
            "normalizedY": 0.382895751953125,
            "t": 1652540430989,
            "normalizedT": 3136
        },
        {
            "x": 197,
            "y": 188.4478759765625,
            "normalizedX": 0.394,
            "normalizedY": 0.376895751953125,
            "t": 1652540431006,
            "normalizedT": 3153
        },
        {
            "x": 202,
            "y": 185.4478759765625,
            "normalizedX": 0.404,
            "normalizedY": 0.370895751953125,
            "t": 1652540431023,
            "normalizedT": 3170
        },
        {
            "x": 205,
            "y": 185.4478759765625,
            "normalizedX": 0.41,
            "normalizedY": 0.370895751953125,
            "t": 1652540431040,
            "normalizedT": 3187
        },
        {
            "x": 208,
            "y": 185.4478759765625,
            "normalizedX": 0.416,
            "normalizedY": 0.370895751953125,
            "t": 1652540431056,
            "normalizedT": 3203
        },
        {
            "x": 210,
            "y": 185.4478759765625,
            "normalizedX": 0.42,
            "normalizedY": 0.370895751953125,
            "t": 1652540431073,
            "normalizedT": 3220
        },
        {
            "x": 212,
            "y": 185.4478759765625,
            "normalizedX": 0.424,
            "normalizedY": 0.370895751953125,
            "t": 1652540431090,
            "normalizedT": 3237
        },
        {
            "x": 216,
            "y": 187.4478759765625,
            "normalizedX": 0.432,
            "normalizedY": 0.374895751953125,
            "t": 1652540431106,
            "normalizedT": 3253
        },
        {
            "x": 220,
            "y": 190.4478759765625,
            "normalizedX": 0.44,
            "normalizedY": 0.380895751953125,
            "t": 1652540431123,
            "normalizedT": 3270
        },
        {
            "x": 227,
            "y": 197.4478759765625,
            "normalizedX": 0.454,
            "normalizedY": 0.394895751953125,
            "t": 1652540431139,
            "normalizedT": 3286
        },
        {
            "x": 231,
            "y": 201.4478759765625,
            "normalizedX": 0.462,
            "normalizedY": 0.402895751953125,
            "t": 1652540431156,
            "normalizedT": 3303
        },
        {
            "x": 232,
            "y": 205.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.410895751953125,
            "t": 1652540431173,
            "normalizedT": 3320
        },
        {
            "x": 232,
            "y": 207.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.414895751953125,
            "t": 1652540431189,
            "normalizedT": 3336
        },
        {
            "x": 233,
            "y": 209.4478759765625,
            "normalizedX": 0.466,
            "normalizedY": 0.418895751953125,
            "t": 1652540431206,
            "normalizedT": 3353
        },
        {
            "x": 233,
            "y": 211.4478759765625,
            "normalizedX": 0.466,
            "normalizedY": 0.422895751953125,
            "t": 1652540431223,
            "normalizedT": 3370
        },
        {
            "x": 232,
            "y": 212.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.424895751953125,
            "t": 1652540431239,
            "normalizedT": 3386
        },
        {
            "x": 231,
            "y": 213.4478759765625,
            "normalizedX": 0.462,
            "normalizedY": 0.426895751953125,
            "t": 1652540431258,
            "normalizedT": 3405
        },
        {
            "x": 230,
            "y": 214.4478759765625,
            "normalizedX": 0.46,
            "normalizedY": 0.428895751953125,
            "t": 1652540431273,
            "normalizedT": 3420
        },
        {
            "x": 228,
            "y": 215.4478759765625,
            "normalizedX": 0.456,
            "normalizedY": 0.430895751953125,
            "t": 1652540431290,
            "normalizedT": 3437
        },
        {
            "x": 226,
            "y": 215.4478759765625,
            "normalizedX": 0.452,
            "normalizedY": 0.430895751953125,
            "t": 1652540431306,
            "normalizedT": 3453
        },
        {
            "x": 224,
            "y": 215.4478759765625,
            "normalizedX": 0.448,
            "normalizedY": 0.430895751953125,
            "t": 1652540431323,
            "normalizedT": 3470
        },
        {
            "x": 221,
            "y": 216.4478759765625,
            "normalizedX": 0.442,
            "normalizedY": 0.432895751953125,
            "t": 1652540431340,
            "normalizedT": 3487
        },
        {
            "x": 217,
            "y": 216.4478759765625,
            "normalizedX": 0.434,
            "normalizedY": 0.432895751953125,
            "t": 1652540431356,
            "normalizedT": 3503
        },
        {
            "x": 214,
            "y": 215.4478759765625,
            "normalizedX": 0.428,
            "normalizedY": 0.430895751953125,
            "t": 1652540431373,
            "normalizedT": 3520
        },
        {
            "x": 209,
            "y": 210.4478759765625,
            "normalizedX": 0.418,
            "normalizedY": 0.420895751953125,
            "t": 1652540431389,
            "normalizedT": 3536
        },
        {
            "x": 207,
            "y": 207.4478759765625,
            "normalizedX": 0.414,
            "normalizedY": 0.414895751953125,
            "t": 1652540431406,
            "normalizedT": 3553
        },
        {
            "x": 206,
            "y": 202.4478759765625,
            "normalizedX": 0.412,
            "normalizedY": 0.404895751953125,
            "t": 1652540431423,
            "normalizedT": 3570
        },
        {
            "x": 206,
            "y": 199.4478759765625,
            "normalizedX": 0.412,
            "normalizedY": 0.398895751953125,
            "t": 1652540431440,
            "normalizedT": 3587
        },
        {
            "x": 206,
            "y": 194.4478759765625,
            "normalizedX": 0.412,
            "normalizedY": 0.388895751953125,
            "t": 1652540431456,
            "normalizedT": 3603
        },
        {
            "x": 206,
            "y": 186.4478759765625,
            "normalizedX": 0.412,
            "normalizedY": 0.372895751953125,
            "t": 1652540431473,
            "normalizedT": 3620
        },
        {
            "x": 208,
            "y": 181.4478759765625,
            "normalizedX": 0.416,
            "normalizedY": 0.362895751953125,
            "t": 1652540431490,
            "normalizedT": 3637
        },
        {
            "x": 209,
            "y": 175.4478759765625,
            "normalizedX": 0.418,
            "normalizedY": 0.350895751953125,
            "t": 1652540431506,
            "normalizedT": 3653
        },
        {
            "x": 214,
            "y": 158.4478759765625,
            "normalizedX": 0.428,
            "normalizedY": 0.316895751953125,
            "t": 1652540431523,
            "normalizedT": 3670
        },
        {
            "x": 218,
            "y": 151.4478759765625,
            "normalizedX": 0.436,
            "normalizedY": 0.302895751953125,
            "t": 1652540431540,
            "normalizedT": 3687
        },
        {
            "x": 222,
            "y": 147.4478759765625,
            "normalizedX": 0.444,
            "normalizedY": 0.294895751953125,
            "t": 1652540431556,
            "normalizedT": 3703
        },
        {
            "x": 226,
            "y": 142.4478759765625,
            "normalizedX": 0.452,
            "normalizedY": 0.284895751953125,
            "t": 1652540431573,
            "normalizedT": 3720
        },
        {
            "x": 234,
            "y": 138.4478759765625,
            "normalizedX": 0.468,
            "normalizedY": 0.276895751953125,
            "t": 1652540431589,
            "normalizedT": 3736
        },
        {
            "x": 240,
            "y": 135.4478759765625,
            "normalizedX": 0.48,
            "normalizedY": 0.270895751953125,
            "t": 1652540431606,
            "normalizedT": 3753
        },
        {
            "x": 245,
            "y": 135.4478759765625,
            "normalizedX": 0.49,
            "normalizedY": 0.270895751953125,
            "t": 1652540431623,
            "normalizedT": 3770
        },
        {
            "x": 252,
            "y": 135.4478759765625,
            "normalizedX": 0.504,
            "normalizedY": 0.270895751953125,
            "t": 1652540431640,
            "normalizedT": 3787
        },
        {
            "x": 258,
            "y": 135.4478759765625,
            "normalizedX": 0.516,
            "normalizedY": 0.270895751953125,
            "t": 1652540431656,
            "normalizedT": 3803
        },
        {
            "x": 263,
            "y": 135.4478759765625,
            "normalizedX": 0.526,
            "normalizedY": 0.270895751953125,
            "t": 1652540431673,
            "normalizedT": 3820
        },
        {
            "x": 268,
            "y": 135.4478759765625,
            "normalizedX": 0.536,
            "normalizedY": 0.270895751953125,
            "t": 1652540431689,
            "normalizedT": 3836
        },
        {
            "x": 271,
            "y": 137.4478759765625,
            "normalizedX": 0.542,
            "normalizedY": 0.274895751953125,
            "t": 1652540431706,
            "normalizedT": 3853
        },
        {
            "x": 274,
            "y": 138.4478759765625,
            "normalizedX": 0.548,
            "normalizedY": 0.276895751953125,
            "t": 1652540431723,
            "normalizedT": 3870
        },
        {
            "x": 276,
            "y": 140.4478759765625,
            "normalizedX": 0.552,
            "normalizedY": 0.280895751953125,
            "t": 1652540431739,
            "normalizedT": 3886
        },
        {
            "x": 278,
            "y": 142.4478759765625,
            "normalizedX": 0.556,
            "normalizedY": 0.284895751953125,
            "t": 1652540431756,
            "normalizedT": 3903
        },
        {
            "x": 280,
            "y": 144.4478759765625,
            "normalizedX": 0.56,
            "normalizedY": 0.288895751953125,
            "t": 1652540431773,
            "normalizedT": 3920
        },
        {
            "x": 282,
            "y": 147.4478759765625,
            "normalizedX": 0.564,
            "normalizedY": 0.294895751953125,
            "t": 1652540431789,
            "normalizedT": 3936
        },
        {
            "x": 282,
            "y": 148.4478759765625,
            "normalizedX": 0.564,
            "normalizedY": 0.296895751953125,
            "t": 1652540431806,
            "normalizedT": 3953
        },
        {
            "x": 283,
            "y": 149.4478759765625,
            "normalizedX": 0.566,
            "normalizedY": 0.298895751953125,
            "t": 1652540431823,
            "normalizedT": 3970
        },
        {
            "x": 283,
            "y": 152.4478759765625,
            "normalizedX": 0.566,
            "normalizedY": 0.304895751953125,
            "t": 1652540431839,
            "normalizedT": 3986
        },
        {
            "x": 283,
            "y": 153.4478759765625,
            "normalizedX": 0.566,
            "normalizedY": 0.306895751953125,
            "t": 1652540431856,
            "normalizedT": 4003
        },
        {
            "x": 282,
            "y": 154.4478759765625,
            "normalizedX": 0.564,
            "normalizedY": 0.308895751953125,
            "t": 1652540431873,
            "normalizedT": 4020
        },
        {
            "x": 280,
            "y": 155.4478759765625,
            "normalizedX": 0.56,
            "normalizedY": 0.310895751953125,
            "t": 1652540431889,
            "normalizedT": 4036
        },
        {
            "x": 278,
            "y": 157.4478759765625,
            "normalizedX": 0.556,
            "normalizedY": 0.314895751953125,
            "t": 1652540431906,
            "normalizedT": 4053
        },
        {
            "x": 275,
            "y": 158.4478759765625,
            "normalizedX": 0.55,
            "normalizedY": 0.316895751953125,
            "t": 1652540431923,
            "normalizedT": 4070
        },
        {
            "x": 273,
            "y": 158.4478759765625,
            "normalizedX": 0.546,
            "normalizedY": 0.316895751953125,
            "t": 1652540431939,
            "normalizedT": 4086
        },
        {
            "x": 270,
            "y": 158.4478759765625,
            "normalizedX": 0.54,
            "normalizedY": 0.316895751953125,
            "t": 1652540431956,
            "normalizedT": 4103
        },
        {
            "x": 268,
            "y": 157.4478759765625,
            "normalizedX": 0.536,
            "normalizedY": 0.314895751953125,
            "t": 1652540431973,
            "normalizedT": 4120
        },
        {
            "x": 266,
            "y": 155.4478759765625,
            "normalizedX": 0.532,
            "normalizedY": 0.310895751953125,
            "t": 1652540431989,
            "normalizedT": 4136
        },
        {
            "x": 264,
            "y": 152.4478759765625,
            "normalizedX": 0.528,
            "normalizedY": 0.304895751953125,
            "t": 1652540432006,
            "normalizedT": 4153
        },
        {
            "x": 261,
            "y": 146.4478759765625,
            "normalizedX": 0.522,
            "normalizedY": 0.292895751953125,
            "t": 1652540432023,
            "normalizedT": 4170
        },
        {
            "x": 260,
            "y": 143.4478759765625,
            "normalizedX": 0.52,
            "normalizedY": 0.286895751953125,
            "t": 1652540432039,
            "normalizedT": 4186
        },
        {
            "x": 260,
            "y": 139.4478759765625,
            "normalizedX": 0.52,
            "normalizedY": 0.278895751953125,
            "t": 1652540432056,
            "normalizedT": 4203
        },
        {
            "x": 260,
            "y": 134.4478759765625,
            "normalizedX": 0.52,
            "normalizedY": 0.268895751953125,
            "t": 1652540432073,
            "normalizedT": 4220
        },
        {
            "x": 262,
            "y": 129.4478759765625,
            "normalizedX": 0.524,
            "normalizedY": 0.258895751953125,
            "t": 1652540432089,
            "normalizedT": 4236
        },
        {
            "x": 266,
            "y": 122.4478759765625,
            "normalizedX": 0.532,
            "normalizedY": 0.244895751953125,
            "t": 1652540432106,
            "normalizedT": 4253
        },
        {
            "x": 269,
            "y": 119.4478759765625,
            "normalizedX": 0.538,
            "normalizedY": 0.238895751953125,
            "t": 1652540432123,
            "normalizedT": 4270
        },
        {
            "x": 274,
            "y": 113.4478759765625,
            "normalizedX": 0.548,
            "normalizedY": 0.226895751953125,
            "t": 1652540432139,
            "normalizedT": 4286
        },
        {
            "x": 278,
            "y": 109.4478759765625,
            "normalizedX": 0.556,
            "normalizedY": 0.218895751953125,
            "t": 1652540432156,
            "normalizedT": 4303
        },
        {
            "x": 282,
            "y": 106.4478759765625,
            "normalizedX": 0.564,
            "normalizedY": 0.212895751953125,
            "t": 1652540432173,
            "normalizedT": 4320
        },
        {
            "x": 289,
            "y": 103.4478759765625,
            "normalizedX": 0.578,
            "normalizedY": 0.206895751953125,
            "t": 1652540432189,
            "normalizedT": 4336
        },
        {
            "x": 292,
            "y": 102.4478759765625,
            "normalizedX": 0.584,
            "normalizedY": 0.204895751953125,
            "t": 1652540432206,
            "normalizedT": 4353
        },
        {
            "x": 296,
            "y": 101.4478759765625,
            "normalizedX": 0.592,
            "normalizedY": 0.202895751953125,
            "t": 1652540432223,
            "normalizedT": 4370
        },
        {
            "x": 301,
            "y": 101.4478759765625,
            "normalizedX": 0.602,
            "normalizedY": 0.202895751953125,
            "t": 1652540432239,
            "normalizedT": 4386
        },
        {
            "x": 304,
            "y": 101.4478759765625,
            "normalizedX": 0.608,
            "normalizedY": 0.202895751953125,
            "t": 1652540432257,
            "normalizedT": 4404
        },
        {
            "x": 311,
            "y": 103.4478759765625,
            "normalizedX": 0.622,
            "normalizedY": 0.206895751953125,
            "t": 1652540432274,
            "normalizedT": 4421
        },
        {
            "x": 315,
            "y": 105.4478759765625,
            "normalizedX": 0.63,
            "normalizedY": 0.210895751953125,
            "t": 1652540432290,
            "normalizedT": 4437
        },
        {
            "x": 319,
            "y": 107.4478759765625,
            "normalizedX": 0.638,
            "normalizedY": 0.214895751953125,
            "t": 1652540432306,
            "normalizedT": 4453
        },
        {
            "x": 324,
            "y": 111.4478759765625,
            "normalizedX": 0.648,
            "normalizedY": 0.222895751953125,
            "t": 1652540432323,
            "normalizedT": 4470
        },
        {
            "x": 330,
            "y": 115.4478759765625,
            "normalizedX": 0.66,
            "normalizedY": 0.230895751953125,
            "t": 1652540432340,
            "normalizedT": 4487
        },
        {
            "x": 334,
            "y": 118.4478759765625,
            "normalizedX": 0.668,
            "normalizedY": 0.236895751953125,
            "t": 1652540432356,
            "normalizedT": 4503
        },
        {
            "x": 336,
            "y": 120.4478759765625,
            "normalizedX": 0.672,
            "normalizedY": 0.240895751953125,
            "t": 1652540432373,
            "normalizedT": 4520
        },
        {
            "x": 336,
            "y": 121.4478759765625,
            "normalizedX": 0.672,
            "normalizedY": 0.242895751953125,
            "t": 1652540432390,
            "normalizedT": 4537
        },
        {
            "x": 337,
            "y": 123.4478759765625,
            "normalizedX": 0.674,
            "normalizedY": 0.246895751953125,
            "t": 1652540432406,
            "normalizedT": 4553
        },
        {
            "x": 337,
            "y": 123.4478759765625,
            "normalizedX": 0.674,
            "normalizedY": 0.246895751953125,
            "t": 1652540432435,
            "normalizedT": 4582
        },
        {
            "x": 337,
            "y": 124.4478759765625,
            "normalizedX": 0.674,
            "normalizedY": 0.248895751953125,
            "t": 1652540432443,
            "normalizedT": 4590
        },
        {
            "x": 336,
            "y": 125.4478759765625,
            "normalizedX": 0.672,
            "normalizedY": 0.250895751953125,
            "t": 1652540432461,
            "normalizedT": 4608
        },
        {
            "x": 334,
            "y": 125.4478759765625,
            "normalizedX": 0.668,
            "normalizedY": 0.250895751953125,
            "t": 1652540432473,
            "normalizedT": 4620
        },
        {
            "x": 330,
            "y": 127.4478759765625,
            "normalizedX": 0.66,
            "normalizedY": 0.254895751953125,
            "t": 1652540432489,
            "normalizedT": 4636
        },
        {
            "x": 326,
            "y": 127.4478759765625,
            "normalizedX": 0.652,
            "normalizedY": 0.254895751953125,
            "t": 1652540432506,
            "normalizedT": 4653
        },
        {
            "x": 323,
            "y": 127.4478759765625,
            "normalizedX": 0.646,
            "normalizedY": 0.254895751953125,
            "t": 1652540432523,
            "normalizedT": 4670
        },
        {
            "x": 320,
            "y": 126.4478759765625,
            "normalizedX": 0.64,
            "normalizedY": 0.252895751953125,
            "t": 1652540432539,
            "normalizedT": 4686
        },
        {
            "x": 317,
            "y": 124.4478759765625,
            "normalizedX": 0.634,
            "normalizedY": 0.248895751953125,
            "t": 1652540432556,
            "normalizedT": 4703
        },
        {
            "x": 314,
            "y": 122.4478759765625,
            "normalizedX": 0.628,
            "normalizedY": 0.244895751953125,
            "t": 1652540432573,
            "normalizedT": 4720
        },
        {
            "x": 310,
            "y": 117.4478759765625,
            "normalizedX": 0.62,
            "normalizedY": 0.234895751953125,
            "t": 1652540432589,
            "normalizedT": 4736
        },
        {
            "x": 309,
            "y": 114.4478759765625,
            "normalizedX": 0.618,
            "normalizedY": 0.228895751953125,
            "t": 1652540432606,
            "normalizedT": 4753
        },
        {
            "x": 309,
            "y": 113.4478759765625,
            "normalizedX": 0.618,
            "normalizedY": 0.226895751953125,
            "t": 1652540432623,
            "normalizedT": 4770
        },
        {
            "x": 309,
            "y": 111.4478759765625,
            "normalizedX": 0.618,
            "normalizedY": 0.222895751953125,
            "t": 1652540432639,
            "normalizedT": 4786
        },
        {
            "x": 309,
            "y": 109.4478759765625,
            "normalizedX": 0.618,
            "normalizedY": 0.218895751953125,
            "t": 1652540432656,
            "normalizedT": 4803
        },
        {
            "x": 310,
            "y": 109.4478759765625,
            "normalizedX": 0.62,
            "normalizedY": 0.218895751953125,
            "t": 1652540432673,
            "normalizedT": 4820
        },
        {
            "x": 312,
            "y": 107.4478759765625,
            "normalizedX": 0.624,
            "normalizedY": 0.214895751953125,
            "t": 1652540432690,
            "normalizedT": 4837
        },
        {
            "x": 317,
            "y": 104.4478759765625,
            "normalizedX": 0.634,
            "normalizedY": 0.208895751953125,
            "t": 1652540432706,
            "normalizedT": 4853
        },
        {
            "x": 324,
            "y": 102.4478759765625,
            "normalizedX": 0.648,
            "normalizedY": 0.204895751953125,
            "t": 1652540432723,
            "normalizedT": 4870
        },
        {
            "x": 332,
            "y": 100.4478759765625,
            "normalizedX": 0.664,
            "normalizedY": 0.200895751953125,
            "t": 1652540432739,
            "normalizedT": 4886
        },
        {
            "x": 342,
            "y": 98.4478759765625,
            "normalizedX": 0.684,
            "normalizedY": 0.196895751953125,
            "t": 1652540432756,
            "normalizedT": 4903
        },
        {
            "x": 352,
            "y": 95.4478759765625,
            "normalizedX": 0.704,
            "normalizedY": 0.190895751953125,
            "t": 1652540432773,
            "normalizedT": 4920
        },
        {
            "x": 364,
            "y": 91.4478759765625,
            "normalizedX": 0.728,
            "normalizedY": 0.182895751953125,
            "t": 1652540432790,
            "normalizedT": 4937
        },
        {
            "x": 370,
            "y": 89.4478759765625,
            "normalizedX": 0.74,
            "normalizedY": 0.178895751953125,
            "t": 1652540432806,
            "normalizedT": 4953
        },
        {
            "x": 382,
            "y": 85.4478759765625,
            "normalizedX": 0.764,
            "normalizedY": 0.170895751953125,
            "t": 1652540432823,
            "normalizedT": 4970
        },
        {
            "x": 397,
            "y": 79.4478759765625,
            "normalizedX": 0.794,
            "normalizedY": 0.158895751953125,
            "t": 1652540432839,
            "normalizedT": 4986
        },
        {
            "x": 407,
            "y": 74.4478759765625,
            "normalizedX": 0.814,
            "normalizedY": 0.148895751953125,
            "t": 1652540432856,
            "normalizedT": 5003
        },
        {
            "x": 412,
            "y": 72.4478759765625,
            "normalizedX": 0.824,
            "normalizedY": 0.144895751953125,
            "t": 1652540432873,
            "normalizedT": 5020
        },
        {
            "x": 418,
            "y": 69.4478759765625,
            "normalizedX": 0.836,
            "normalizedY": 0.138895751953125,
            "t": 1652540432889,
            "normalizedT": 5036
        },
        {
            "x": 421,
            "y": 66.4478759765625,
            "normalizedX": 0.842,
            "normalizedY": 0.132895751953125,
            "t": 1652540432906,
            "normalizedT": 5053
        },
        {
            "x": 426,
            "y": 61.4478759765625,
            "normalizedX": 0.852,
            "normalizedY": 0.122895751953125,
            "t": 1652540432923,
            "normalizedT": 5070
        },
        {
            "x": 427,
            "y": 58.4478759765625,
            "normalizedX": 0.854,
            "normalizedY": 0.116895751953125,
            "t": 1652540432940,
            "normalizedT": 5087
        },
        {
            "x": 430,
            "y": 55.4478759765625,
            "normalizedX": 0.86,
            "normalizedY": 0.110895751953125,
            "t": 1652540432956,
            "normalizedT": 5103
        },
        {
            "x": 431,
            "y": 53.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.106895751953125,
            "t": 1652540432973,
            "normalizedT": 5120
        },
        {
            "x": 431,
            "y": 51.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.102895751953125,
            "t": 1652540432989,
            "normalizedT": 5136
        },
        {
            "x": 431,
            "y": 51.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.102895751953125,
            "t": 1652540433006,
            "normalizedT": 5153
        },
        {
            "x": 431,
            "y": 50.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.100895751953125,
            "t": 1652540433023,
            "normalizedT": 5170
        },
        {
            "x": 431,
            "y": 49.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.098895751953125,
            "t": 1652540433041,
            "normalizedT": 5188
        },
        {
            "x": 431,
            "y": 49.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.098895751953125,
            "t": 1652540433056,
            "normalizedT": 5203
        },
        {
            "x": 431,
            "y": 48.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.096895751953125,
            "t": 1652540433073,
            "normalizedT": 5220
        },
        {
            "x": 431,
            "y": 47.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.094895751953125,
            "t": 1652540433090,
            "normalizedT": 5237
        },
        {
            "x": 431,
            "y": 47.4478759765625,
            "normalizedX": 0.862,
            "normalizedY": 0.094895751953125,
            "t": 1652540433106,
            "normalizedT": 5253
        }
    ],
    [
        {
            "x": 446,
            "y": 33.4478759765625,
            "normalizedX": 0.892,
            "normalizedY": 0.066895751953125,
            "t": 1652540433595,
            "normalizedT": 0
        },
        {
            "x": 446,
            "y": 33.4478759765625,
            "normalizedX": 0.892,
            "normalizedY": 0.066895751953125,
            "t": 1652540433609,
            "normalizedT": 14
        },
        {
            "x": 447,
            "y": 35.4478759765625,
            "normalizedX": 0.894,
            "normalizedY": 0.070895751953125,
            "t": 1652540433623,
            "normalizedT": 28
        },
        {
            "x": 450,
            "y": 40.4478759765625,
            "normalizedX": 0.9,
            "normalizedY": 0.080895751953125,
            "t": 1652540433640,
            "normalizedT": 45
        },
        {
            "x": 452,
            "y": 43.4478759765625,
            "normalizedX": 0.904,
            "normalizedY": 0.086895751953125,
            "t": 1652540433656,
            "normalizedT": 61
        },
        {
            "x": 454,
            "y": 49.4478759765625,
            "normalizedX": 0.908,
            "normalizedY": 0.098895751953125,
            "t": 1652540433673,
            "normalizedT": 78
        },
        {
            "x": 456,
            "y": 55.4478759765625,
            "normalizedX": 0.912,
            "normalizedY": 0.110895751953125,
            "t": 1652540433690,
            "normalizedT": 95
        },
        {
            "x": 456,
            "y": 60.4478759765625,
            "normalizedX": 0.912,
            "normalizedY": 0.120895751953125,
            "t": 1652540433706,
            "normalizedT": 111
        },
        {
            "x": 457,
            "y": 65.4478759765625,
            "normalizedX": 0.914,
            "normalizedY": 0.130895751953125,
            "t": 1652540433723,
            "normalizedT": 128
        },
        {
            "x": 457,
            "y": 70.4478759765625,
            "normalizedX": 0.914,
            "normalizedY": 0.140895751953125,
            "t": 1652540433740,
            "normalizedT": 145
        },
        {
            "x": 457,
            "y": 76.4478759765625,
            "normalizedX": 0.914,
            "normalizedY": 0.152895751953125,
            "t": 1652540433756,
            "normalizedT": 161
        },
        {
            "x": 457,
            "y": 80.4478759765625,
            "normalizedX": 0.914,
            "normalizedY": 0.160895751953125,
            "t": 1652540433773,
            "normalizedT": 178
        },
        {
            "x": 457,
            "y": 84.4478759765625,
            "normalizedX": 0.914,
            "normalizedY": 0.168895751953125,
            "t": 1652540433789,
            "normalizedT": 194
        },
        {
            "x": 456,
            "y": 88.4478759765625,
            "normalizedX": 0.912,
            "normalizedY": 0.176895751953125,
            "t": 1652540433806,
            "normalizedT": 211
        },
        {
            "x": 455,
            "y": 91.4478759765625,
            "normalizedX": 0.91,
            "normalizedY": 0.182895751953125,
            "t": 1652540433823,
            "normalizedT": 228
        },
        {
            "x": 454,
            "y": 95.4478759765625,
            "normalizedX": 0.908,
            "normalizedY": 0.190895751953125,
            "t": 1652540433840,
            "normalizedT": 245
        },
        {
            "x": 451,
            "y": 100.4478759765625,
            "normalizedX": 0.902,
            "normalizedY": 0.200895751953125,
            "t": 1652540433856,
            "normalizedT": 261
        },
        {
            "x": 447,
            "y": 105.4478759765625,
            "normalizedX": 0.894,
            "normalizedY": 0.210895751953125,
            "t": 1652540433873,
            "normalizedT": 278
        },
        {
            "x": 444,
            "y": 110.4478759765625,
            "normalizedX": 0.888,
            "normalizedY": 0.220895751953125,
            "t": 1652540433890,
            "normalizedT": 295
        },
        {
            "x": 438,
            "y": 116.4478759765625,
            "normalizedX": 0.876,
            "normalizedY": 0.232895751953125,
            "t": 1652540433906,
            "normalizedT": 311
        },
        {
            "x": 436,
            "y": 118.4478759765625,
            "normalizedX": 0.872,
            "normalizedY": 0.236895751953125,
            "t": 1652540433923,
            "normalizedT": 328
        },
        {
            "x": 432,
            "y": 124.4478759765625,
            "normalizedX": 0.864,
            "normalizedY": 0.248895751953125,
            "t": 1652540433940,
            "normalizedT": 345
        },
        {
            "x": 428,
            "y": 127.4478759765625,
            "normalizedX": 0.856,
            "normalizedY": 0.254895751953125,
            "t": 1652540433956,
            "normalizedT": 361
        },
        {
            "x": 424,
            "y": 132.4478759765625,
            "normalizedX": 0.848,
            "normalizedY": 0.264895751953125,
            "t": 1652540433973,
            "normalizedT": 378
        },
        {
            "x": 419,
            "y": 135.4478759765625,
            "normalizedX": 0.838,
            "normalizedY": 0.270895751953125,
            "t": 1652540433989,
            "normalizedT": 394
        },
        {
            "x": 414,
            "y": 138.4478759765625,
            "normalizedX": 0.828,
            "normalizedY": 0.276895751953125,
            "t": 1652540434006,
            "normalizedT": 411
        },
        {
            "x": 412,
            "y": 139.4478759765625,
            "normalizedX": 0.824,
            "normalizedY": 0.278895751953125,
            "t": 1652540434023,
            "normalizedT": 428
        },
        {
            "x": 408,
            "y": 141.4478759765625,
            "normalizedX": 0.816,
            "normalizedY": 0.282895751953125,
            "t": 1652540434039,
            "normalizedT": 444
        },
        {
            "x": 402,
            "y": 144.4478759765625,
            "normalizedX": 0.804,
            "normalizedY": 0.288895751953125,
            "t": 1652540434056,
            "normalizedT": 461
        },
        {
            "x": 398,
            "y": 146.4478759765625,
            "normalizedX": 0.796,
            "normalizedY": 0.292895751953125,
            "t": 1652540434073,
            "normalizedT": 478
        },
        {
            "x": 394,
            "y": 147.4478759765625,
            "normalizedX": 0.788,
            "normalizedY": 0.294895751953125,
            "t": 1652540434090,
            "normalizedT": 495
        },
        {
            "x": 387,
            "y": 149.4478759765625,
            "normalizedX": 0.774,
            "normalizedY": 0.298895751953125,
            "t": 1652540434106,
            "normalizedT": 511
        },
        {
            "x": 381,
            "y": 150.4478759765625,
            "normalizedX": 0.762,
            "normalizedY": 0.300895751953125,
            "t": 1652540434123,
            "normalizedT": 528
        },
        {
            "x": 370,
            "y": 152.4478759765625,
            "normalizedX": 0.74,
            "normalizedY": 0.304895751953125,
            "t": 1652540434140,
            "normalizedT": 545
        },
        {
            "x": 360,
            "y": 154.4478759765625,
            "normalizedX": 0.72,
            "normalizedY": 0.308895751953125,
            "t": 1652540434156,
            "normalizedT": 561
        },
        {
            "x": 354,
            "y": 155.4478759765625,
            "normalizedX": 0.708,
            "normalizedY": 0.310895751953125,
            "t": 1652540434173,
            "normalizedT": 578
        },
        {
            "x": 348,
            "y": 156.4478759765625,
            "normalizedX": 0.696,
            "normalizedY": 0.312895751953125,
            "t": 1652540434190,
            "normalizedT": 595
        },
        {
            "x": 342,
            "y": 160.4478759765625,
            "normalizedX": 0.684,
            "normalizedY": 0.320895751953125,
            "t": 1652540434206,
            "normalizedT": 611
        },
        {
            "x": 338,
            "y": 162.4478759765625,
            "normalizedX": 0.676,
            "normalizedY": 0.324895751953125,
            "t": 1652540434223,
            "normalizedT": 628
        },
        {
            "x": 334,
            "y": 163.4478759765625,
            "normalizedX": 0.668,
            "normalizedY": 0.326895751953125,
            "t": 1652540434240,
            "normalizedT": 645
        },
        {
            "x": 328,
            "y": 167.4478759765625,
            "normalizedX": 0.656,
            "normalizedY": 0.334895751953125,
            "t": 1652540434257,
            "normalizedT": 662
        },
        {
            "x": 324,
            "y": 170.4478759765625,
            "normalizedX": 0.648,
            "normalizedY": 0.340895751953125,
            "t": 1652540434274,
            "normalizedT": 679
        },
        {
            "x": 320,
            "y": 173.4478759765625,
            "normalizedX": 0.64,
            "normalizedY": 0.346895751953125,
            "t": 1652540434290,
            "normalizedT": 695
        },
        {
            "x": 316,
            "y": 175.4478759765625,
            "normalizedX": 0.632,
            "normalizedY": 0.350895751953125,
            "t": 1652540434306,
            "normalizedT": 711
        },
        {
            "x": 311,
            "y": 181.4478759765625,
            "normalizedX": 0.622,
            "normalizedY": 0.362895751953125,
            "t": 1652540434323,
            "normalizedT": 728
        },
        {
            "x": 308,
            "y": 183.4478759765625,
            "normalizedX": 0.616,
            "normalizedY": 0.366895751953125,
            "t": 1652540434340,
            "normalizedT": 745
        },
        {
            "x": 306,
            "y": 186.4478759765625,
            "normalizedX": 0.612,
            "normalizedY": 0.372895751953125,
            "t": 1652540434356,
            "normalizedT": 761
        },
        {
            "x": 303,
            "y": 190.4478759765625,
            "normalizedX": 0.606,
            "normalizedY": 0.380895751953125,
            "t": 1652540434373,
            "normalizedT": 778
        },
        {
            "x": 300,
            "y": 195.4478759765625,
            "normalizedX": 0.6,
            "normalizedY": 0.390895751953125,
            "t": 1652540434389,
            "normalizedT": 794
        },
        {
            "x": 299,
            "y": 197.4478759765625,
            "normalizedX": 0.598,
            "normalizedY": 0.394895751953125,
            "t": 1652540434406,
            "normalizedT": 811
        },
        {
            "x": 298,
            "y": 200.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.400895751953125,
            "t": 1652540434423,
            "normalizedT": 828
        },
        {
            "x": 298,
            "y": 203.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.406895751953125,
            "t": 1652540434440,
            "normalizedT": 845
        },
        {
            "x": 298,
            "y": 205.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.410895751953125,
            "t": 1652540434456,
            "normalizedT": 861
        },
        {
            "x": 298,
            "y": 207.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.414895751953125,
            "t": 1652540434473,
            "normalizedT": 878
        },
        {
            "x": 298,
            "y": 209.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.418895751953125,
            "t": 1652540434490,
            "normalizedT": 895
        },
        {
            "x": 298,
            "y": 211.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.422895751953125,
            "t": 1652540434506,
            "normalizedT": 911
        },
        {
            "x": 298,
            "y": 213.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.426895751953125,
            "t": 1652540434523,
            "normalizedT": 928
        },
        {
            "x": 298,
            "y": 215.4478759765625,
            "normalizedX": 0.596,
            "normalizedY": 0.430895751953125,
            "t": 1652540434540,
            "normalizedT": 945
        },
        {
            "x": 300,
            "y": 217.4478759765625,
            "normalizedX": 0.6,
            "normalizedY": 0.434895751953125,
            "t": 1652540434556,
            "normalizedT": 961
        },
        {
            "x": 301,
            "y": 219.4478759765625,
            "normalizedX": 0.602,
            "normalizedY": 0.438895751953125,
            "t": 1652540434573,
            "normalizedT": 978
        },
        {
            "x": 302,
            "y": 221.4478759765625,
            "normalizedX": 0.604,
            "normalizedY": 0.442895751953125,
            "t": 1652540434590,
            "normalizedT": 995
        },
        {
            "x": 303,
            "y": 223.4478759765625,
            "normalizedX": 0.606,
            "normalizedY": 0.446895751953125,
            "t": 1652540434606,
            "normalizedT": 1011
        },
        {
            "x": 306,
            "y": 226.4478759765625,
            "normalizedX": 0.612,
            "normalizedY": 0.452895751953125,
            "t": 1652540434623,
            "normalizedT": 1028
        },
        {
            "x": 309,
            "y": 231.4478759765625,
            "normalizedX": 0.618,
            "normalizedY": 0.462895751953125,
            "t": 1652540434639,
            "normalizedT": 1044
        },
        {
            "x": 311,
            "y": 233.4478759765625,
            "normalizedX": 0.622,
            "normalizedY": 0.466895751953125,
            "t": 1652540434656,
            "normalizedT": 1061
        },
        {
            "x": 312,
            "y": 235.4478759765625,
            "normalizedX": 0.624,
            "normalizedY": 0.470895751953125,
            "t": 1652540434673,
            "normalizedT": 1078
        },
        {
            "x": 314,
            "y": 237.4478759765625,
            "normalizedX": 0.628,
            "normalizedY": 0.474895751953125,
            "t": 1652540434690,
            "normalizedT": 1095
        },
        {
            "x": 316,
            "y": 239.4478759765625,
            "normalizedX": 0.632,
            "normalizedY": 0.478895751953125,
            "t": 1652540434706,
            "normalizedT": 1111
        },
        {
            "x": 318,
            "y": 241.4478759765625,
            "normalizedX": 0.636,
            "normalizedY": 0.482895751953125,
            "t": 1652540434723,
            "normalizedT": 1128
        },
        {
            "x": 319,
            "y": 242.4478759765625,
            "normalizedX": 0.638,
            "normalizedY": 0.484895751953125,
            "t": 1652540434740,
            "normalizedT": 1145
        },
        {
            "x": 321,
            "y": 245.4478759765625,
            "normalizedX": 0.642,
            "normalizedY": 0.490895751953125,
            "t": 1652540434756,
            "normalizedT": 1161
        },
        {
            "x": 322,
            "y": 247.4478759765625,
            "normalizedX": 0.644,
            "normalizedY": 0.494895751953125,
            "t": 1652540434773,
            "normalizedT": 1178
        },
        {
            "x": 322,
            "y": 248.4478759765625,
            "normalizedX": 0.644,
            "normalizedY": 0.496895751953125,
            "t": 1652540434789,
            "normalizedT": 1194
        },
        {
            "x": 322,
            "y": 249.4478759765625,
            "normalizedX": 0.644,
            "normalizedY": 0.498895751953125,
            "t": 1652540434806,
            "normalizedT": 1211
        },
        {
            "x": 323,
            "y": 251.4478759765625,
            "normalizedX": 0.646,
            "normalizedY": 0.502895751953125,
            "t": 1652540434823,
            "normalizedT": 1228
        },
        {
            "x": 323,
            "y": 253.4478759765625,
            "normalizedX": 0.646,
            "normalizedY": 0.506895751953125,
            "t": 1652540434840,
            "normalizedT": 1245
        },
        {
            "x": 323,
            "y": 255.4478759765625,
            "normalizedX": 0.646,
            "normalizedY": 0.510895751953125,
            "t": 1652540434856,
            "normalizedT": 1261
        },
        {
            "x": 323,
            "y": 258.4478759765625,
            "normalizedX": 0.646,
            "normalizedY": 0.516895751953125,
            "t": 1652540434873,
            "normalizedT": 1278
        },
        {
            "x": 322,
            "y": 261.4478759765625,
            "normalizedX": 0.644,
            "normalizedY": 0.522895751953125,
            "t": 1652540434889,
            "normalizedT": 1294
        },
        {
            "x": 321,
            "y": 263.4478759765625,
            "normalizedX": 0.642,
            "normalizedY": 0.526895751953125,
            "t": 1652540434906,
            "normalizedT": 1311
        },
        {
            "x": 320,
            "y": 265.4478759765625,
            "normalizedX": 0.64,
            "normalizedY": 0.530895751953125,
            "t": 1652540434923,
            "normalizedT": 1328
        },
        {
            "x": 319,
            "y": 267.4478759765625,
            "normalizedX": 0.638,
            "normalizedY": 0.534895751953125,
            "t": 1652540434939,
            "normalizedT": 1344
        },
        {
            "x": 318,
            "y": 269.4478759765625,
            "normalizedX": 0.636,
            "normalizedY": 0.538895751953125,
            "t": 1652540434957,
            "normalizedT": 1362
        },
        {
            "x": 317,
            "y": 271.4478759765625,
            "normalizedX": 0.634,
            "normalizedY": 0.542895751953125,
            "t": 1652540434973,
            "normalizedT": 1378
        },
        {
            "x": 316,
            "y": 272.4478759765625,
            "normalizedX": 0.632,
            "normalizedY": 0.544895751953125,
            "t": 1652540434990,
            "normalizedT": 1395
        },
        {
            "x": 313,
            "y": 274.4478759765625,
            "normalizedX": 0.626,
            "normalizedY": 0.548895751953125,
            "t": 1652540435006,
            "normalizedT": 1411
        },
        {
            "x": 312,
            "y": 275.4478759765625,
            "normalizedX": 0.624,
            "normalizedY": 0.550895751953125,
            "t": 1652540435023,
            "normalizedT": 1428
        },
        {
            "x": 308,
            "y": 279.4478759765625,
            "normalizedX": 0.616,
            "normalizedY": 0.558895751953125,
            "t": 1652540435040,
            "normalizedT": 1445
        },
        {
            "x": 303,
            "y": 281.4478759765625,
            "normalizedX": 0.606,
            "normalizedY": 0.562895751953125,
            "t": 1652540435056,
            "normalizedT": 1461
        },
        {
            "x": 301,
            "y": 281.4478759765625,
            "normalizedX": 0.602,
            "normalizedY": 0.562895751953125,
            "t": 1652540435073,
            "normalizedT": 1478
        },
        {
            "x": 295,
            "y": 283.4478759765625,
            "normalizedX": 0.59,
            "normalizedY": 0.566895751953125,
            "t": 1652540435090,
            "normalizedT": 1495
        },
        {
            "x": 292,
            "y": 283.4478759765625,
            "normalizedX": 0.584,
            "normalizedY": 0.566895751953125,
            "t": 1652540435106,
            "normalizedT": 1511
        },
        {
            "x": 288,
            "y": 285.4478759765625,
            "normalizedX": 0.576,
            "normalizedY": 0.570895751953125,
            "t": 1652540435123,
            "normalizedT": 1528
        },
        {
            "x": 276,
            "y": 288.4478759765625,
            "normalizedX": 0.552,
            "normalizedY": 0.576895751953125,
            "t": 1652540435140,
            "normalizedT": 1545
        },
        {
            "x": 272,
            "y": 288.4478759765625,
            "normalizedX": 0.544,
            "normalizedY": 0.576895751953125,
            "t": 1652540435156,
            "normalizedT": 1561
        },
        {
            "x": 262,
            "y": 290.4478759765625,
            "normalizedX": 0.524,
            "normalizedY": 0.580895751953125,
            "t": 1652540435173,
            "normalizedT": 1578
        },
        {
            "x": 258,
            "y": 290.4478759765625,
            "normalizedX": 0.516,
            "normalizedY": 0.580895751953125,
            "t": 1652540435190,
            "normalizedT": 1595
        },
        {
            "x": 251,
            "y": 291.4478759765625,
            "normalizedX": 0.502,
            "normalizedY": 0.582895751953125,
            "t": 1652540435206,
            "normalizedT": 1611
        },
        {
            "x": 244,
            "y": 292.4478759765625,
            "normalizedX": 0.488,
            "normalizedY": 0.584895751953125,
            "t": 1652540435223,
            "normalizedT": 1628
        },
        {
            "x": 236,
            "y": 294.4478759765625,
            "normalizedX": 0.472,
            "normalizedY": 0.588895751953125,
            "t": 1652540435240,
            "normalizedT": 1645
        },
        {
            "x": 234,
            "y": 295.4478759765625,
            "normalizedX": 0.468,
            "normalizedY": 0.590895751953125,
            "t": 1652540435257,
            "normalizedT": 1662
        },
        {
            "x": 226,
            "y": 296.4478759765625,
            "normalizedX": 0.452,
            "normalizedY": 0.592895751953125,
            "t": 1652540435274,
            "normalizedT": 1679
        },
        {
            "x": 222,
            "y": 299.4478759765625,
            "normalizedX": 0.444,
            "normalizedY": 0.598895751953125,
            "t": 1652540435290,
            "normalizedT": 1695
        },
        {
            "x": 218,
            "y": 301.4478759765625,
            "normalizedX": 0.436,
            "normalizedY": 0.602895751953125,
            "t": 1652540435306,
            "normalizedT": 1711
        },
        {
            "x": 215,
            "y": 303.4478759765625,
            "normalizedX": 0.43,
            "normalizedY": 0.606895751953125,
            "t": 1652540435323,
            "normalizedT": 1728
        },
        {
            "x": 212,
            "y": 307.4478759765625,
            "normalizedX": 0.424,
            "normalizedY": 0.614895751953125,
            "t": 1652540435340,
            "normalizedT": 1745
        },
        {
            "x": 210,
            "y": 311.4478759765625,
            "normalizedX": 0.42,
            "normalizedY": 0.622895751953125,
            "t": 1652540435356,
            "normalizedT": 1761
        },
        {
            "x": 206,
            "y": 313.4478759765625,
            "normalizedX": 0.412,
            "normalizedY": 0.626895751953125,
            "t": 1652540435373,
            "normalizedT": 1778
        },
        {
            "x": 203,
            "y": 320.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.640895751953125,
            "t": 1652540435390,
            "normalizedT": 1795
        },
        {
            "x": 203,
            "y": 323.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.646895751953125,
            "t": 1652540435406,
            "normalizedT": 1811
        },
        {
            "x": 203,
            "y": 325.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.650895751953125,
            "t": 1652540435423,
            "normalizedT": 1828
        },
        {
            "x": 203,
            "y": 328.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.656895751953125,
            "t": 1652540435440,
            "normalizedT": 1845
        },
        {
            "x": 203,
            "y": 331.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.662895751953125,
            "t": 1652540435456,
            "normalizedT": 1861
        },
        {
            "x": 203,
            "y": 333.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.666895751953125,
            "t": 1652540435473,
            "normalizedT": 1878
        },
        {
            "x": 203,
            "y": 336.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.672895751953125,
            "t": 1652540435489,
            "normalizedT": 1894
        },
        {
            "x": 203,
            "y": 337.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.674895751953125,
            "t": 1652540435506,
            "normalizedT": 1911
        },
        {
            "x": 203,
            "y": 340.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.680895751953125,
            "t": 1652540435523,
            "normalizedT": 1928
        },
        {
            "x": 203,
            "y": 341.4478759765625,
            "normalizedX": 0.406,
            "normalizedY": 0.682895751953125,
            "t": 1652540435540,
            "normalizedT": 1945
        },
        {
            "x": 204,
            "y": 343.4478759765625,
            "normalizedX": 0.408,
            "normalizedY": 0.686895751953125,
            "t": 1652540435556,
            "normalizedT": 1961
        },
        {
            "x": 205,
            "y": 343.4478759765625,
            "normalizedX": 0.41,
            "normalizedY": 0.686895751953125,
            "t": 1652540435573,
            "normalizedT": 1978
        },
        {
            "x": 208,
            "y": 346.4478759765625,
            "normalizedX": 0.416,
            "normalizedY": 0.692895751953125,
            "t": 1652540435590,
            "normalizedT": 1995
        },
        {
            "x": 210,
            "y": 347.4478759765625,
            "normalizedX": 0.42,
            "normalizedY": 0.694895751953125,
            "t": 1652540435607,
            "normalizedT": 2012
        },
        {
            "x": 210,
            "y": 349.4478759765625,
            "normalizedX": 0.42,
            "normalizedY": 0.698895751953125,
            "t": 1652540435623,
            "normalizedT": 2028
        },
        {
            "x": 214,
            "y": 351.4478759765625,
            "normalizedX": 0.428,
            "normalizedY": 0.702895751953125,
            "t": 1652540435640,
            "normalizedT": 2045
        },
        {
            "x": 217,
            "y": 353.4478759765625,
            "normalizedX": 0.434,
            "normalizedY": 0.706895751953125,
            "t": 1652540435656,
            "normalizedT": 2061
        },
        {
            "x": 220,
            "y": 354.4478759765625,
            "normalizedX": 0.44,
            "normalizedY": 0.708895751953125,
            "t": 1652540435673,
            "normalizedT": 2078
        },
        {
            "x": 222,
            "y": 355.4478759765625,
            "normalizedX": 0.444,
            "normalizedY": 0.710895751953125,
            "t": 1652540435689,
            "normalizedT": 2094
        },
        {
            "x": 225,
            "y": 358.4478759765625,
            "normalizedX": 0.45,
            "normalizedY": 0.716895751953125,
            "t": 1652540435707,
            "normalizedT": 2112
        },
        {
            "x": 228,
            "y": 360.4478759765625,
            "normalizedX": 0.456,
            "normalizedY": 0.720895751953125,
            "t": 1652540435723,
            "normalizedT": 2128
        },
        {
            "x": 230,
            "y": 361.4478759765625,
            "normalizedX": 0.46,
            "normalizedY": 0.722895751953125,
            "t": 1652540435740,
            "normalizedT": 2145
        },
        {
            "x": 232,
            "y": 363.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.726895751953125,
            "t": 1652540435757,
            "normalizedT": 2162
        },
        {
            "x": 232,
            "y": 365.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.730895751953125,
            "t": 1652540435773,
            "normalizedT": 2178
        },
        {
            "x": 232,
            "y": 365.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.730895751953125,
            "t": 1652540435790,
            "normalizedT": 2195
        },
        {
            "x": 233,
            "y": 367.4478759765625,
            "normalizedX": 0.466,
            "normalizedY": 0.734895751953125,
            "t": 1652540435806,
            "normalizedT": 2211
        },
        {
            "x": 234,
            "y": 369.4478759765625,
            "normalizedX": 0.468,
            "normalizedY": 0.738895751953125,
            "t": 1652540435823,
            "normalizedT": 2228
        },
        {
            "x": 234,
            "y": 371.4478759765625,
            "normalizedX": 0.468,
            "normalizedY": 0.742895751953125,
            "t": 1652540435840,
            "normalizedT": 2245
        },
        {
            "x": 234,
            "y": 373.4478759765625,
            "normalizedX": 0.468,
            "normalizedY": 0.746895751953125,
            "t": 1652540435856,
            "normalizedT": 2261
        },
        {
            "x": 234,
            "y": 376.4478759765625,
            "normalizedX": 0.468,
            "normalizedY": 0.752895751953125,
            "t": 1652540435873,
            "normalizedT": 2278
        },
        {
            "x": 234,
            "y": 377.4478759765625,
            "normalizedX": 0.468,
            "normalizedY": 0.754895751953125,
            "t": 1652540435890,
            "normalizedT": 2295
        },
        {
            "x": 233,
            "y": 377.4478759765625,
            "normalizedX": 0.466,
            "normalizedY": 0.754895751953125,
            "t": 1652540435906,
            "normalizedT": 2311
        },
        {
            "x": 232,
            "y": 378.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.756895751953125,
            "t": 1652540435923,
            "normalizedT": 2328
        },
        {
            "x": 232,
            "y": 379.4478759765625,
            "normalizedX": 0.464,
            "normalizedY": 0.758895751953125,
            "t": 1652540435940,
            "normalizedT": 2345
        },
        {
            "x": 231,
            "y": 381.4478759765625,
            "normalizedX": 0.462,
            "normalizedY": 0.762895751953125,
            "t": 1652540435956,
            "normalizedT": 2361
        },
        {
            "x": 228,
            "y": 383.4478759765625,
            "normalizedX": 0.456,
            "normalizedY": 0.766895751953125,
            "t": 1652540435973,
            "normalizedT": 2378
        },
        {
            "x": 224,
            "y": 385.4478759765625,
            "normalizedX": 0.448,
            "normalizedY": 0.770895751953125,
            "t": 1652540435989,
            "normalizedT": 2394
        },
        {
            "x": 223,
            "y": 387.4478759765625,
            "normalizedX": 0.446,
            "normalizedY": 0.774895751953125,
            "t": 1652540436006,
            "normalizedT": 2411
        },
        {
            "x": 220,
            "y": 388.4478759765625,
            "normalizedX": 0.44,
            "normalizedY": 0.776895751953125,
            "t": 1652540436023,
            "normalizedT": 2428
        },
        {
            "x": 217,
            "y": 389.4478759765625,
            "normalizedX": 0.434,
            "normalizedY": 0.778895751953125,
            "t": 1652540436040,
            "normalizedT": 2445
        },
        {
            "x": 214,
            "y": 391.4478759765625,
            "normalizedX": 0.428,
            "normalizedY": 0.782895751953125,
            "t": 1652540436056,
            "normalizedT": 2461
        },
        {
            "x": 209,
            "y": 393.4478759765625,
            "normalizedX": 0.418,
            "normalizedY": 0.786895751953125,
            "t": 1652540436073,
            "normalizedT": 2478
        },
        {
            "x": 202,
            "y": 395.4478759765625,
            "normalizedX": 0.404,
            "normalizedY": 0.790895751953125,
            "t": 1652540436089,
            "normalizedT": 2494
        },
        {
            "x": 198,
            "y": 397.4478759765625,
            "normalizedX": 0.396,
            "normalizedY": 0.794895751953125,
            "t": 1652540436106,
            "normalizedT": 2511
        },
        {
            "x": 192,
            "y": 398.4478759765625,
            "normalizedX": 0.384,
            "normalizedY": 0.796895751953125,
            "t": 1652540436123,
            "normalizedT": 2528
        },
        {
            "x": 188,
            "y": 399.4478759765625,
            "normalizedX": 0.376,
            "normalizedY": 0.798895751953125,
            "t": 1652540436139,
            "normalizedT": 2544
        },
        {
            "x": 184,
            "y": 401.4478759765625,
            "normalizedX": 0.368,
            "normalizedY": 0.802895751953125,
            "t": 1652540436157,
            "normalizedT": 2562
        },
        {
            "x": 180,
            "y": 403.4478759765625,
            "normalizedX": 0.36,
            "normalizedY": 0.806895751953125,
            "t": 1652540436173,
            "normalizedT": 2578
        },
        {
            "x": 177,
            "y": 403.4478759765625,
            "normalizedX": 0.354,
            "normalizedY": 0.806895751953125,
            "t": 1652540436190,
            "normalizedT": 2595
        },
        {
            "x": 174,
            "y": 404.4478759765625,
            "normalizedX": 0.348,
            "normalizedY": 0.808895751953125,
            "t": 1652540436206,
            "normalizedT": 2611
        },
        {
            "x": 172,
            "y": 405.4478759765625,
            "normalizedX": 0.344,
            "normalizedY": 0.810895751953125,
            "t": 1652540436223,
            "normalizedT": 2628
        },
        {
            "x": 168,
            "y": 407.4478759765625,
            "normalizedX": 0.336,
            "normalizedY": 0.814895751953125,
            "t": 1652540436240,
            "normalizedT": 2645
        },
        {
            "x": 164,
            "y": 410.4478759765625,
            "normalizedX": 0.328,
            "normalizedY": 0.820895751953125,
            "t": 1652540436257,
            "normalizedT": 2662
        },
        {
            "x": 162,
            "y": 411.4478759765625,
            "normalizedX": 0.324,
            "normalizedY": 0.822895751953125,
            "t": 1652540436274,
            "normalizedT": 2679
        },
        {
            "x": 160,
            "y": 414.4478759765625,
            "normalizedX": 0.32,
            "normalizedY": 0.828895751953125,
            "t": 1652540436290,
            "normalizedT": 2695
        },
        {
            "x": 158,
            "y": 417.4478759765625,
            "normalizedX": 0.316,
            "normalizedY": 0.834895751953125,
            "t": 1652540436306,
            "normalizedT": 2711
        },
        {
            "x": 157,
            "y": 422.4478759765625,
            "normalizedX": 0.314,
            "normalizedY": 0.844895751953125,
            "t": 1652540436323,
            "normalizedT": 2728
        },
        {
            "x": 156,
            "y": 432.4478759765625,
            "normalizedX": 0.312,
            "normalizedY": 0.864895751953125,
            "t": 1652540436340,
            "normalizedT": 2745
        },
        {
            "x": 157,
            "y": 437.4478759765625,
            "normalizedX": 0.314,
            "normalizedY": 0.874895751953125,
            "t": 1652540436356,
            "normalizedT": 2761
        },
        {
            "x": 161,
            "y": 445.4478759765625,
            "normalizedX": 0.322,
            "normalizedY": 0.890895751953125,
            "t": 1652540436373,
            "normalizedT": 2778
        },
        {
            "x": 164,
            "y": 450.4478759765625,
            "normalizedX": 0.328,
            "normalizedY": 0.900895751953125,
            "t": 1652540436390,
            "normalizedT": 2795
        },
        {
            "x": 165,
            "y": 453.4478759765625,
            "normalizedX": 0.33,
            "normalizedY": 0.906895751953125,
            "t": 1652540436406,
            "normalizedT": 2811
        },
        {
            "x": 166,
            "y": 455.4478759765625,
            "normalizedX": 0.332,
            "normalizedY": 0.910895751953125,
            "t": 1652540436423,
            "normalizedT": 2828
        },
        {
            "x": 166,
            "y": 456.4478759765625,
            "normalizedX": 0.332,
            "normalizedY": 0.912895751953125,
            "t": 1652540436440,
            "normalizedT": 2845
        },
        {
            "x": 166,
            "y": 457.4478759765625,
            "normalizedX": 0.332,
            "normalizedY": 0.914895751953125,
            "t": 1652540436456,
            "normalizedT": 2861
        },
        {
            "x": 167,
            "y": 457.4478759765625,
            "normalizedX": 0.334,
            "normalizedY": 0.914895751953125,
            "t": 1652540436473,
            "normalizedT": 2878
        },
        {
            "x": 168,
            "y": 457.4478759765625,
            "normalizedX": 0.336,
            "normalizedY": 0.914895751953125,
            "t": 1652540436490,
            "normalizedT": 2895
        },
        {
            "x": 172,
            "y": 457.4478759765625,
            "normalizedX": 0.344,
            "normalizedY": 0.914895751953125,
            "t": 1652540436493,
            "normalizedT": 2898
        }
    ],
    [
        {
            "x": 270,
            "y": 468.4478759765625,
            "normalizedX": 0.54,
            "normalizedY": 0.936895751953125,
            "t": 1652540436925,
            "normalizedT": 0
        },
        {
            "x": 271,
            "y": 468.4478759765625,
            "normalizedX": 0.542,
            "normalizedY": 0.936895751953125,
            "t": 1652540436956,
            "normalizedT": 31
        },
        {
            "x": 291,
            "y": 457.4478759765625,
            "normalizedX": 0.582,
            "normalizedY": 0.914895751953125,
            "t": 1652540436993,
            "normalizedT": 68
        },
        {
            "x": 308,
            "y": 447.4478759765625,
            "normalizedX": 0.616,
            "normalizedY": 0.894895751953125,
            "t": 1652540437006,
            "normalizedT": 81
        },
        {
            "x": 330,
            "y": 428.4478759765625,
            "normalizedX": 0.66,
            "normalizedY": 0.856895751953125,
            "t": 1652540437023,
            "normalizedT": 98
        },
        {
            "x": 354,
            "y": 403.4478759765625,
            "normalizedX": 0.708,
            "normalizedY": 0.806895751953125,
            "t": 1652540437040,
            "normalizedT": 115
        },
        {
            "x": 373,
            "y": 383.4478759765625,
            "normalizedX": 0.746,
            "normalizedY": 0.766895751953125,
            "t": 1652540437056,
            "normalizedT": 131
        },
        {
            "x": 408,
            "y": 348.4478759765625,
            "normalizedX": 0.816,
            "normalizedY": 0.696895751953125,
            "t": 1652540437073,
            "normalizedT": 148
        },
        {
            "x": 433,
            "y": 324.4478759765625,
            "normalizedX": 0.866,
            "normalizedY": 0.648895751953125,
            "t": 1652540437090,
            "normalizedT": 165
        },
        {
            "x": 464,
            "y": 293.4478759765625,
            "normalizedX": 0.928,
            "normalizedY": 0.586895751953125,
            "t": 1652540437106,
            "normalizedT": 181
        },
        {
            "x": 474,
            "y": 276.4478759765625,
            "normalizedX": 0.948,
            "normalizedY": 0.552895751953125,
            "t": 1652540437123,
            "normalizedT": 198
        },
        {
            "x": 480,
            "y": 261.4478759765625,
            "normalizedX": 0.96,
            "normalizedY": 0.522895751953125,
            "t": 1652540437140,
            "normalizedT": 215
        },
        {
            "x": 480,
            "y": 248.4478759765625,
            "normalizedX": 0.96,
            "normalizedY": 0.496895751953125,
            "t": 1652540437150,
            "normalizedT": 225
        }
    ],
    [
        {
            "x": 212,
            "y": 61.4478759765625,
            "normalizedX": 0.424,
            "normalizedY": 0.122895751953125,
            "t": 1652540438504,
            "normalizedT": 0
        },
        {
            "x": 212,
            "y": 61.4478759765625,
            "normalizedX": 0.424,
            "normalizedY": 0.122895751953125,
            "t": 1652540438535,
            "normalizedT": 31
        },
        {
            "x": 211,
            "y": 62.4478759765625,
            "normalizedX": 0.422,
            "normalizedY": 0.124895751953125,
            "t": 1652540438544,
            "normalizedT": 40
        },
        {
            "x": 210,
            "y": 62.4478759765625,
            "normalizedX": 0.42,
            "normalizedY": 0.124895751953125,
            "t": 1652540438556,
            "normalizedT": 52
        },
        {
            "x": 206,
            "y": 65.4478759765625,
            "normalizedX": 0.412,
            "normalizedY": 0.130895751953125,
            "t": 1652540438573,
            "normalizedT": 69
        },
        {
            "x": 200,
            "y": 68.4478759765625,
            "normalizedX": 0.4,
            "normalizedY": 0.136895751953125,
            "t": 1652540438590,
            "normalizedT": 86
        },
        {
            "x": 192,
            "y": 73.4478759765625,
            "normalizedX": 0.384,
            "normalizedY": 0.146895751953125,
            "t": 1652540438606,
            "normalizedT": 102
        },
        {
            "x": 178,
            "y": 81.4478759765625,
            "normalizedX": 0.356,
            "normalizedY": 0.162895751953125,
            "t": 1652540438623,
            "normalizedT": 119
        },
        {
            "x": 154,
            "y": 98.4478759765625,
            "normalizedX": 0.308,
            "normalizedY": 0.196895751953125,
            "t": 1652540438640,
            "normalizedT": 136
        },
        {
            "x": 144,
            "y": 107.4478759765625,
            "normalizedX": 0.288,
            "normalizedY": 0.214895751953125,
            "t": 1652540438656,
            "normalizedT": 152
        },
        {
            "x": 132,
            "y": 121.4478759765625,
            "normalizedX": 0.264,
            "normalizedY": 0.242895751953125,
            "t": 1652540438673,
            "normalizedT": 169
        },
        {
            "x": 126,
            "y": 133.4478759765625,
            "normalizedX": 0.252,
            "normalizedY": 0.266895751953125,
            "t": 1652540438690,
            "normalizedT": 186
        },
        {
            "x": 119,
            "y": 142.4478759765625,
            "normalizedX": 0.238,
            "normalizedY": 0.284895751953125,
            "t": 1652540438706,
            "normalizedT": 202
        },
        {
            "x": 110,
            "y": 156.4478759765625,
            "normalizedX": 0.22,
            "normalizedY": 0.312895751953125,
            "t": 1652540438723,
            "normalizedT": 219
        },
        {
            "x": 104,
            "y": 167.4478759765625,
            "normalizedX": 0.208,
            "normalizedY": 0.334895751953125,
            "t": 1652540438740,
            "normalizedT": 236
        },
        {
            "x": 98,
            "y": 177.4478759765625,
            "normalizedX": 0.196,
            "normalizedY": 0.354895751953125,
            "t": 1652540438756,
            "normalizedT": 252
        },
        {
            "x": 92,
            "y": 191.4478759765625,
            "normalizedX": 0.184,
            "normalizedY": 0.382895751953125,
            "t": 1652540438773,
            "normalizedT": 269
        },
        {
            "x": 87,
            "y": 202.4478759765625,
            "normalizedX": 0.174,
            "normalizedY": 0.404895751953125,
            "t": 1652540438790,
            "normalizedT": 286
        },
        {
            "x": 81,
            "y": 214.4478759765625,
            "normalizedX": 0.162,
            "normalizedY": 0.428895751953125,
            "t": 1652540438806,
            "normalizedT": 302
        },
        {
            "x": 79,
            "y": 218.4478759765625,
            "normalizedX": 0.158,
            "normalizedY": 0.436895751953125,
            "t": 1652540438823,
            "normalizedT": 319
        },
        {
            "x": 76,
            "y": 225.4478759765625,
            "normalizedX": 0.152,
            "normalizedY": 0.450895751953125,
            "t": 1652540438840,
            "normalizedT": 336
        },
        {
            "x": 75,
            "y": 230.4478759765625,
            "normalizedX": 0.15,
            "normalizedY": 0.460895751953125,
            "t": 1652540438856,
            "normalizedT": 352
        },
        {
            "x": 74,
            "y": 235.4478759765625,
            "normalizedX": 0.148,
            "normalizedY": 0.470895751953125,
            "t": 1652540438873,
            "normalizedT": 369
        },
        {
            "x": 73,
            "y": 240.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.480895751953125,
            "t": 1652540438890,
            "normalizedT": 386
        },
        {
            "x": 73,
            "y": 242.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.484895751953125,
            "t": 1652540438906,
            "normalizedT": 402
        },
        {
            "x": 73,
            "y": 243.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.486895751953125,
            "t": 1652540438923,
            "normalizedT": 419
        },
        {
            "x": 73,
            "y": 244.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.488895751953125,
            "t": 1652540438940,
            "normalizedT": 436
        },
        {
            "x": 73,
            "y": 245.4478759765625,
            "normalizedX": 0.146,
            "normalizedY": 0.490895751953125,
            "t": 1652540438956,
            "normalizedT": 452
        },
        {
            "x": 72,
            "y": 245.4478759765625,
            "normalizedX": 0.144,
            "normalizedY": 0.490895751953125,
            "t": 1652540438973,
            "normalizedT": 469
        },
        {
            "x": 72,
            "y": 246.4478759765625,
            "normalizedX": 0.144,
            "normalizedY": 0.492895751953125,
            "t": 1652540439057,
            "normalizedT": 553
        }
    ]
];


export const GESTURE_LINES = [
    [
        {
            "x": 50,
            "y": 172.28125,
            "normalizedX": 0.1,
            "normalizedY": 0.3445625,
            "t": 1652540728597,
            "normalizedT": 0
        },
        {
            "x": 49,
            "y": 172.28125,
            "normalizedX": 0.098,
            "normalizedY": 0.3445625,
            "t": 1652540728612,
            "normalizedT": 15
        },
        {
            "x": 48,
            "y": 171.28125,
            "normalizedX": 0.096,
            "normalizedY": 0.3425625,
            "t": 1652540728620,
            "normalizedT": 23
        },
        {
            "x": 48,
            "y": 170.28125,
            "normalizedX": 0.096,
            "normalizedY": 0.3405625,
            "t": 1652540728628,
            "normalizedT": 31
        },
        {
            "x": 46,
            "y": 168.28125,
            "normalizedX": 0.092,
            "normalizedY": 0.3365625,
            "t": 1652540728636,
            "normalizedT": 39
        },
        {
            "x": 46,
            "y": 166.28125,
            "normalizedX": 0.092,
            "normalizedY": 0.3325625,
            "t": 1652540728644,
            "normalizedT": 47
        },
        {
            "x": 45,
            "y": 164.28125,
            "normalizedX": 0.09,
            "normalizedY": 0.3285625,
            "t": 1652540728652,
            "normalizedT": 55
        },
        {
            "x": 45,
            "y": 162.28125,
            "normalizedX": 0.09,
            "normalizedY": 0.3245625,
            "t": 1652540728660,
            "normalizedT": 63
        },
        {
            "x": 44,
            "y": 158.28125,
            "normalizedX": 0.088,
            "normalizedY": 0.3165625,
            "t": 1652540728668,
            "normalizedT": 71
        },
        {
            "x": 44,
            "y": 154.28125,
            "normalizedX": 0.088,
            "normalizedY": 0.3085625,
            "t": 1652540728676,
            "normalizedT": 79
        },
        {
            "x": 44,
            "y": 152.28125,
            "normalizedX": 0.088,
            "normalizedY": 0.3045625,
            "t": 1652540728684,
            "normalizedT": 87
        },
        {
            "x": 44,
            "y": 148.28125,
            "normalizedX": 0.088,
            "normalizedY": 0.2965625,
            "t": 1652540728692,
            "normalizedT": 95
        },
        {
            "x": 44,
            "y": 144.28125,
            "normalizedX": 0.088,
            "normalizedY": 0.2885625,
            "t": 1652540728700,
            "normalizedT": 103
        },
        {
            "x": 45,
            "y": 141.28125,
            "normalizedX": 0.09,
            "normalizedY": 0.2825625,
            "t": 1652540728708,
            "normalizedT": 111
        },
        {
            "x": 47,
            "y": 134.28125,
            "normalizedX": 0.094,
            "normalizedY": 0.2685625,
            "t": 1652540728716,
            "normalizedT": 119
        },
        {
            "x": 48,
            "y": 131.28125,
            "normalizedX": 0.096,
            "normalizedY": 0.2625625,
            "t": 1652540728724,
            "normalizedT": 127
        },
        {
            "x": 52,
            "y": 121.28125,
            "normalizedX": 0.104,
            "normalizedY": 0.2425625,
            "t": 1652540728732,
            "normalizedT": 135
        },
        {
            "x": 54,
            "y": 116.28125,
            "normalizedX": 0.108,
            "normalizedY": 0.2325625,
            "t": 1652540728740,
            "normalizedT": 143
        },
        {
            "x": 57,
            "y": 112.28125,
            "normalizedX": 0.114,
            "normalizedY": 0.2245625,
            "t": 1652540728748,
            "normalizedT": 151
        },
        {
            "x": 59,
            "y": 108.28125,
            "normalizedX": 0.118,
            "normalizedY": 0.2165625,
            "t": 1652540728756,
            "normalizedT": 159
        },
        {
            "x": 62,
            "y": 104.28125,
            "normalizedX": 0.124,
            "normalizedY": 0.2085625,
            "t": 1652540728764,
            "normalizedT": 167
        },
        {
            "x": 65,
            "y": 100.28125,
            "normalizedX": 0.13,
            "normalizedY": 0.2005625,
            "t": 1652540728772,
            "normalizedT": 175
        },
        {
            "x": 68,
            "y": 99.28125,
            "normalizedX": 0.136,
            "normalizedY": 0.1985625,
            "t": 1652540728780,
            "normalizedT": 183
        },
        {
            "x": 71,
            "y": 96.28125,
            "normalizedX": 0.142,
            "normalizedY": 0.1925625,
            "t": 1652540728790,
            "normalizedT": 193
        },
        {
            "x": 72,
            "y": 96.28125,
            "normalizedX": 0.144,
            "normalizedY": 0.1925625,
            "t": 1652540728796,
            "normalizedT": 199
        },
        {
            "x": 75,
            "y": 95.28125,
            "normalizedX": 0.15,
            "normalizedY": 0.1905625,
            "t": 1652540728804,
            "normalizedT": 207
        },
        {
            "x": 78,
            "y": 94.28125,
            "normalizedX": 0.156,
            "normalizedY": 0.1885625,
            "t": 1652540728814,
            "normalizedT": 217
        },
        {
            "x": 80,
            "y": 94.28125,
            "normalizedX": 0.16,
            "normalizedY": 0.1885625,
            "t": 1652540728822,
            "normalizedT": 225
        },
        {
            "x": 84,
            "y": 93.28125,
            "normalizedX": 0.168,
            "normalizedY": 0.1865625,
            "t": 1652540728830,
            "normalizedT": 233
        },
        {
            "x": 86,
            "y": 92.28125,
            "normalizedX": 0.172,
            "normalizedY": 0.1845625,
            "t": 1652540728838,
            "normalizedT": 241
        },
        {
            "x": 89,
            "y": 91.28125,
            "normalizedX": 0.178,
            "normalizedY": 0.1825625,
            "t": 1652540728846,
            "normalizedT": 249
        },
        {
            "x": 93,
            "y": 90.28125,
            "normalizedX": 0.186,
            "normalizedY": 0.1805625,
            "t": 1652540728854,
            "normalizedT": 257
        },
        {
            "x": 98,
            "y": 88.28125,
            "normalizedX": 0.196,
            "normalizedY": 0.1765625,
            "t": 1652540728862,
            "normalizedT": 265
        },
        {
            "x": 104,
            "y": 85.28125,
            "normalizedX": 0.208,
            "normalizedY": 0.1705625,
            "t": 1652540728870,
            "normalizedT": 273
        },
        {
            "x": 108,
            "y": 81.28125,
            "normalizedX": 0.216,
            "normalizedY": 0.1625625,
            "t": 1652540728878,
            "normalizedT": 281
        },
        {
            "x": 112,
            "y": 79.28125,
            "normalizedX": 0.224,
            "normalizedY": 0.1585625,
            "t": 1652540728886,
            "normalizedT": 289
        },
        {
            "x": 116,
            "y": 76.28125,
            "normalizedX": 0.232,
            "normalizedY": 0.1525625,
            "t": 1652540728894,
            "normalizedT": 297
        },
        {
            "x": 120,
            "y": 73.28125,
            "normalizedX": 0.24,
            "normalizedY": 0.1465625,
            "t": 1652540728902,
            "normalizedT": 305
        },
        {
            "x": 125,
            "y": 68.28125,
            "normalizedX": 0.25,
            "normalizedY": 0.1365625,
            "t": 1652540728910,
            "normalizedT": 313
        },
        {
            "x": 128,
            "y": 64.28125,
            "normalizedX": 0.256,
            "normalizedY": 0.1285625,
            "t": 1652540728918,
            "normalizedT": 321
        },
        {
            "x": 132,
            "y": 60.28125,
            "normalizedX": 0.264,
            "normalizedY": 0.1205625,
            "t": 1652540728927,
            "normalizedT": 330
        },
        {
            "x": 140,
            "y": 50.28125,
            "normalizedX": 0.28,
            "normalizedY": 0.1005625,
            "t": 1652540728934,
            "normalizedT": 337
        },
        {
            "x": 145,
            "y": 42.28125,
            "normalizedX": 0.29,
            "normalizedY": 0.0845625,
            "t": 1652540728942,
            "normalizedT": 345
        },
        {
            "x": 150,
            "y": 34.28125,
            "normalizedX": 0.3,
            "normalizedY": 0.0685625,
            "t": 1652540728950,
            "normalizedT": 353
        },
        {
            "x": 154,
            "y": 26.28125,
            "normalizedX": 0.308,
            "normalizedY": 0.0525625,
            "t": 1652540728958,
            "normalizedT": 361
        },
        {
            "x": 156,
            "y": 20.28125,
            "normalizedX": 0.312,
            "normalizedY": 0.0405625,
            "t": 1652540728966,
            "normalizedT": 369
        },
        {
            "x": 156,
            "y": 16.28125,
            "normalizedX": 0.312,
            "normalizedY": 0.0325625,
            "t": 1652540728974,
            "normalizedT": 377
        },
        {
            "x": 156,
            "y": 14.28125,
            "normalizedX": 0.312,
            "normalizedY": 0.0285625,
            "t": 1652540728982,
            "normalizedT": 385
        }
    ],
    [
        {
            "x": 230,
            "y": 14.28125,
            "normalizedX": 0.46,
            "normalizedY": 0.0285625,
            "t": 1652540730325,
            "normalizedT": 0
        },
        {
            "x": 229,
            "y": 14.28125,
            "normalizedX": 0.458,
            "normalizedY": 0.0285625,
            "t": 1652540730476,
            "normalizedT": 151
        },
        {
            "x": 228,
            "y": 14.28125,
            "normalizedX": 0.456,
            "normalizedY": 0.0285625,
            "t": 1652540730492,
            "normalizedT": 167
        },
        {
            "x": 227,
            "y": 14.28125,
            "normalizedX": 0.454,
            "normalizedY": 0.0285625,
            "t": 1652540730500,
            "normalizedT": 175
        },
        {
            "x": 226,
            "y": 15.28125,
            "normalizedX": 0.452,
            "normalizedY": 0.0305625,
            "t": 1652540730508,
            "normalizedT": 183
        },
        {
            "x": 225,
            "y": 16.28125,
            "normalizedX": 0.45,
            "normalizedY": 0.0325625,
            "t": 1652540730516,
            "normalizedT": 191
        },
        {
            "x": 224,
            "y": 16.28125,
            "normalizedX": 0.448,
            "normalizedY": 0.0325625,
            "t": 1652540730524,
            "normalizedT": 199
        },
        {
            "x": 223,
            "y": 17.28125,
            "normalizedX": 0.446,
            "normalizedY": 0.0345625,
            "t": 1652540730532,
            "normalizedT": 207
        },
        {
            "x": 222,
            "y": 18.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.0365625,
            "t": 1652540730540,
            "normalizedT": 215
        },
        {
            "x": 222,
            "y": 18.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.0365625,
            "t": 1652540730556,
            "normalizedT": 231
        },
        {
            "x": 221,
            "y": 18.28125,
            "normalizedX": 0.442,
            "normalizedY": 0.0365625,
            "t": 1652540730564,
            "normalizedT": 239
        },
        {
            "x": 220,
            "y": 18.28125,
            "normalizedX": 0.44,
            "normalizedY": 0.0365625,
            "t": 1652540730580,
            "normalizedT": 255
        },
        {
            "x": 220,
            "y": 19.28125,
            "normalizedX": 0.44,
            "normalizedY": 0.0385625,
            "t": 1652540730596,
            "normalizedT": 271
        },
        {
            "x": 220,
            "y": 19.28125,
            "normalizedX": 0.44,
            "normalizedY": 0.0385625,
            "t": 1652540730606,
            "normalizedT": 281
        },
        {
            "x": 219,
            "y": 19.28125,
            "normalizedX": 0.438,
            "normalizedY": 0.0385625,
            "t": 1652540730638,
            "normalizedT": 313
        },
        {
            "x": 218,
            "y": 19.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.0385625,
            "t": 1652540730662,
            "normalizedT": 337
        },
        {
            "x": 218,
            "y": 20.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.0405625,
            "t": 1652540730670,
            "normalizedT": 345
        },
        {
            "x": 218,
            "y": 20.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.0405625,
            "t": 1652540730678,
            "normalizedT": 353
        },
        {
            "x": 218,
            "y": 20.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.0405625,
            "t": 1652540730686,
            "normalizedT": 361
        },
        {
            "x": 218,
            "y": 21.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.0425625,
            "t": 1652540730694,
            "normalizedT": 369
        },
        {
            "x": 217,
            "y": 21.28125,
            "normalizedX": 0.434,
            "normalizedY": 0.0425625,
            "t": 1652540730702,
            "normalizedT": 377
        },
        {
            "x": 216,
            "y": 22.28125,
            "normalizedX": 0.432,
            "normalizedY": 0.0445625,
            "t": 1652540730710,
            "normalizedT": 385
        },
        {
            "x": 216,
            "y": 22.28125,
            "normalizedX": 0.432,
            "normalizedY": 0.0445625,
            "t": 1652540730718,
            "normalizedT": 393
        },
        {
            "x": 216,
            "y": 22.28125,
            "normalizedX": 0.432,
            "normalizedY": 0.0445625,
            "t": 1652540730726,
            "normalizedT": 401
        },
        {
            "x": 215,
            "y": 23.28125,
            "normalizedX": 0.43,
            "normalizedY": 0.0465625,
            "t": 1652540730734,
            "normalizedT": 409
        },
        {
            "x": 214,
            "y": 23.28125,
            "normalizedX": 0.428,
            "normalizedY": 0.0465625,
            "t": 1652540730742,
            "normalizedT": 417
        },
        {
            "x": 214,
            "y": 24.28125,
            "normalizedX": 0.428,
            "normalizedY": 0.0485625,
            "t": 1652540730750,
            "normalizedT": 425
        },
        {
            "x": 214,
            "y": 24.28125,
            "normalizedX": 0.428,
            "normalizedY": 0.0485625,
            "t": 1652540730758,
            "normalizedT": 433
        },
        {
            "x": 213,
            "y": 25.28125,
            "normalizedX": 0.426,
            "normalizedY": 0.0505625,
            "t": 1652540730766,
            "normalizedT": 441
        },
        {
            "x": 212,
            "y": 26.28125,
            "normalizedX": 0.424,
            "normalizedY": 0.0525625,
            "t": 1652540730774,
            "normalizedT": 449
        },
        {
            "x": 212,
            "y": 26.28125,
            "normalizedX": 0.424,
            "normalizedY": 0.0525625,
            "t": 1652540730782,
            "normalizedT": 457
        },
        {
            "x": 212,
            "y": 26.28125,
            "normalizedX": 0.424,
            "normalizedY": 0.0525625,
            "t": 1652540730790,
            "normalizedT": 465
        },
        {
            "x": 210,
            "y": 27.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.0545625,
            "t": 1652540730798,
            "normalizedT": 473
        },
        {
            "x": 210,
            "y": 27.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.0545625,
            "t": 1652540730806,
            "normalizedT": 481
        },
        {
            "x": 210,
            "y": 28.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.0565625,
            "t": 1652540730814,
            "normalizedT": 489
        },
        {
            "x": 210,
            "y": 28.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.0565625,
            "t": 1652540730822,
            "normalizedT": 497
        },
        {
            "x": 209,
            "y": 29.28125,
            "normalizedX": 0.418,
            "normalizedY": 0.0585625,
            "t": 1652540730830,
            "normalizedT": 505
        },
        {
            "x": 208,
            "y": 29.28125,
            "normalizedX": 0.416,
            "normalizedY": 0.0585625,
            "t": 1652540730838,
            "normalizedT": 513
        },
        {
            "x": 208,
            "y": 30.28125,
            "normalizedX": 0.416,
            "normalizedY": 0.0605625,
            "t": 1652540730846,
            "normalizedT": 521
        },
        {
            "x": 207,
            "y": 30.28125,
            "normalizedX": 0.414,
            "normalizedY": 0.0605625,
            "t": 1652540730854,
            "normalizedT": 529
        },
        {
            "x": 207,
            "y": 31.28125,
            "normalizedX": 0.414,
            "normalizedY": 0.0625625,
            "t": 1652540730862,
            "normalizedT": 537
        },
        {
            "x": 206,
            "y": 31.28125,
            "normalizedX": 0.412,
            "normalizedY": 0.0625625,
            "t": 1652540730870,
            "normalizedT": 545
        },
        {
            "x": 206,
            "y": 32.28125,
            "normalizedX": 0.412,
            "normalizedY": 0.0645625,
            "t": 1652540730886,
            "normalizedT": 561
        },
        {
            "x": 205,
            "y": 32.28125,
            "normalizedX": 0.41,
            "normalizedY": 0.0645625,
            "t": 1652540730904,
            "normalizedT": 579
        },
        {
            "x": 204,
            "y": 33.28125,
            "normalizedX": 0.408,
            "normalizedY": 0.0665625,
            "t": 1652540730912,
            "normalizedT": 587
        },
        {
            "x": 204,
            "y": 34.28125,
            "normalizedX": 0.408,
            "normalizedY": 0.0685625,
            "t": 1652540730920,
            "normalizedT": 595
        },
        {
            "x": 204,
            "y": 34.28125,
            "normalizedX": 0.408,
            "normalizedY": 0.0685625,
            "t": 1652540730928,
            "normalizedT": 603
        },
        {
            "x": 204,
            "y": 34.28125,
            "normalizedX": 0.408,
            "normalizedY": 0.0685625,
            "t": 1652540730936,
            "normalizedT": 611
        },
        {
            "x": 203,
            "y": 35.28125,
            "normalizedX": 0.406,
            "normalizedY": 0.0705625,
            "t": 1652540730944,
            "normalizedT": 619
        },
        {
            "x": 202,
            "y": 35.28125,
            "normalizedX": 0.404,
            "normalizedY": 0.0705625,
            "t": 1652540730952,
            "normalizedT": 627
        },
        {
            "x": 202,
            "y": 36.28125,
            "normalizedX": 0.404,
            "normalizedY": 0.0725625,
            "t": 1652540730960,
            "normalizedT": 635
        },
        {
            "x": 202,
            "y": 36.28125,
            "normalizedX": 0.404,
            "normalizedY": 0.0725625,
            "t": 1652540730968,
            "normalizedT": 643
        },
        {
            "x": 201,
            "y": 37.28125,
            "normalizedX": 0.402,
            "normalizedY": 0.0745625,
            "t": 1652540730976,
            "normalizedT": 651
        },
        {
            "x": 200,
            "y": 38.28125,
            "normalizedX": 0.4,
            "normalizedY": 0.0765625,
            "t": 1652540730984,
            "normalizedT": 659
        },
        {
            "x": 199,
            "y": 39.28125,
            "normalizedX": 0.398,
            "normalizedY": 0.0785625,
            "t": 1652540730992,
            "normalizedT": 667
        },
        {
            "x": 198,
            "y": 40.28125,
            "normalizedX": 0.396,
            "normalizedY": 0.0805625,
            "t": 1652540731000,
            "normalizedT": 675
        },
        {
            "x": 198,
            "y": 40.28125,
            "normalizedX": 0.396,
            "normalizedY": 0.0805625,
            "t": 1652540731008,
            "normalizedT": 683
        },
        {
            "x": 197,
            "y": 41.28125,
            "normalizedX": 0.394,
            "normalizedY": 0.0825625,
            "t": 1652540731016,
            "normalizedT": 691
        },
        {
            "x": 196,
            "y": 42.28125,
            "normalizedX": 0.392,
            "normalizedY": 0.0845625,
            "t": 1652540731024,
            "normalizedT": 699
        },
        {
            "x": 196,
            "y": 42.28125,
            "normalizedX": 0.392,
            "normalizedY": 0.0845625,
            "t": 1652540731032,
            "normalizedT": 707
        },
        {
            "x": 195,
            "y": 44.28125,
            "normalizedX": 0.39,
            "normalizedY": 0.0885625,
            "t": 1652540731040,
            "normalizedT": 715
        },
        {
            "x": 194,
            "y": 45.28125,
            "normalizedX": 0.388,
            "normalizedY": 0.0905625,
            "t": 1652540731049,
            "normalizedT": 724
        },
        {
            "x": 194,
            "y": 46.28125,
            "normalizedX": 0.388,
            "normalizedY": 0.0925625,
            "t": 1652540731057,
            "normalizedT": 732
        },
        {
            "x": 193,
            "y": 47.28125,
            "normalizedX": 0.386,
            "normalizedY": 0.0945625,
            "t": 1652540731064,
            "normalizedT": 739
        },
        {
            "x": 192,
            "y": 48.28125,
            "normalizedX": 0.384,
            "normalizedY": 0.0965625,
            "t": 1652540731072,
            "normalizedT": 747
        },
        {
            "x": 191,
            "y": 49.28125,
            "normalizedX": 0.382,
            "normalizedY": 0.0985625,
            "t": 1652540731080,
            "normalizedT": 755
        },
        {
            "x": 190,
            "y": 50.28125,
            "normalizedX": 0.38,
            "normalizedY": 0.1005625,
            "t": 1652540731088,
            "normalizedT": 763
        },
        {
            "x": 190,
            "y": 50.28125,
            "normalizedX": 0.38,
            "normalizedY": 0.1005625,
            "t": 1652540731096,
            "normalizedT": 771
        },
        {
            "x": 190,
            "y": 50.28125,
            "normalizedX": 0.38,
            "normalizedY": 0.1005625,
            "t": 1652540731104,
            "normalizedT": 779
        },
        {
            "x": 189,
            "y": 52.28125,
            "normalizedX": 0.378,
            "normalizedY": 0.1045625,
            "t": 1652540731112,
            "normalizedT": 787
        },
        {
            "x": 188,
            "y": 52.28125,
            "normalizedX": 0.376,
            "normalizedY": 0.1045625,
            "t": 1652540731128,
            "normalizedT": 803
        },
        {
            "x": 188,
            "y": 53.28125,
            "normalizedX": 0.376,
            "normalizedY": 0.1065625,
            "t": 1652540731136,
            "normalizedT": 811
        },
        {
            "x": 188,
            "y": 54.28125,
            "normalizedX": 0.376,
            "normalizedY": 0.1085625,
            "t": 1652540731154,
            "normalizedT": 829
        },
        {
            "x": 188,
            "y": 54.28125,
            "normalizedX": 0.376,
            "normalizedY": 0.1085625,
            "t": 1652540731162,
            "normalizedT": 837
        },
        {
            "x": 187,
            "y": 55.28125,
            "normalizedX": 0.374,
            "normalizedY": 0.1105625,
            "t": 1652540731178,
            "normalizedT": 853
        },
        {
            "x": 186,
            "y": 56.28125,
            "normalizedX": 0.372,
            "normalizedY": 0.1125625,
            "t": 1652540731186,
            "normalizedT": 861
        },
        {
            "x": 186,
            "y": 56.28125,
            "normalizedX": 0.372,
            "normalizedY": 0.1125625,
            "t": 1652540731194,
            "normalizedT": 869
        },
        {
            "x": 186,
            "y": 56.28125,
            "normalizedX": 0.372,
            "normalizedY": 0.1125625,
            "t": 1652540731202,
            "normalizedT": 877
        },
        {
            "x": 186,
            "y": 57.28125,
            "normalizedX": 0.372,
            "normalizedY": 0.1145625,
            "t": 1652540731210,
            "normalizedT": 885
        },
        {
            "x": 185,
            "y": 58.28125,
            "normalizedX": 0.37,
            "normalizedY": 0.1165625,
            "t": 1652540731218,
            "normalizedT": 893
        },
        {
            "x": 185,
            "y": 58.28125,
            "normalizedX": 0.37,
            "normalizedY": 0.1165625,
            "t": 1652540731226,
            "normalizedT": 901
        },
        {
            "x": 184,
            "y": 59.28125,
            "normalizedX": 0.368,
            "normalizedY": 0.1185625,
            "t": 1652540731242,
            "normalizedT": 917
        },
        {
            "x": 184,
            "y": 60.28125,
            "normalizedX": 0.368,
            "normalizedY": 0.1205625,
            "t": 1652540731250,
            "normalizedT": 925
        },
        {
            "x": 184,
            "y": 60.28125,
            "normalizedX": 0.368,
            "normalizedY": 0.1205625,
            "t": 1652540731258,
            "normalizedT": 933
        },
        {
            "x": 184,
            "y": 61.28125,
            "normalizedX": 0.368,
            "normalizedY": 0.1225625,
            "t": 1652540731266,
            "normalizedT": 941
        },
        {
            "x": 184,
            "y": 62.28125,
            "normalizedX": 0.368,
            "normalizedY": 0.1245625,
            "t": 1652540731275,
            "normalizedT": 950
        },
        {
            "x": 184,
            "y": 62.28125,
            "normalizedX": 0.368,
            "normalizedY": 0.1245625,
            "t": 1652540731282,
            "normalizedT": 957
        },
        {
            "x": 183,
            "y": 63.28125,
            "normalizedX": 0.366,
            "normalizedY": 0.1265625,
            "t": 1652540731290,
            "normalizedT": 965
        },
        {
            "x": 183,
            "y": 64.28125,
            "normalizedX": 0.366,
            "normalizedY": 0.1285625,
            "t": 1652540731298,
            "normalizedT": 973
        },
        {
            "x": 182,
            "y": 64.28125,
            "normalizedX": 0.364,
            "normalizedY": 0.1285625,
            "t": 1652540731306,
            "normalizedT": 981
        },
        {
            "x": 182,
            "y": 65.28125,
            "normalizedX": 0.364,
            "normalizedY": 0.1305625,
            "t": 1652540731314,
            "normalizedT": 989
        },
        {
            "x": 182,
            "y": 66.28125,
            "normalizedX": 0.364,
            "normalizedY": 0.1325625,
            "t": 1652540731322,
            "normalizedT": 997
        },
        {
            "x": 181,
            "y": 66.28125,
            "normalizedX": 0.362,
            "normalizedY": 0.1325625,
            "t": 1652540731330,
            "normalizedT": 1005
        },
        {
            "x": 181,
            "y": 68.28125,
            "normalizedX": 0.362,
            "normalizedY": 0.1365625,
            "t": 1652540731338,
            "normalizedT": 1013
        },
        {
            "x": 180,
            "y": 68.28125,
            "normalizedX": 0.36,
            "normalizedY": 0.1365625,
            "t": 1652540731346,
            "normalizedT": 1021
        },
        {
            "x": 180,
            "y": 68.28125,
            "normalizedX": 0.36,
            "normalizedY": 0.1365625,
            "t": 1652540731354,
            "normalizedT": 1029
        },
        {
            "x": 180,
            "y": 69.28125,
            "normalizedX": 0.36,
            "normalizedY": 0.1385625,
            "t": 1652540731362,
            "normalizedT": 1037
        },
        {
            "x": 180,
            "y": 70.28125,
            "normalizedX": 0.36,
            "normalizedY": 0.1405625,
            "t": 1652540731370,
            "normalizedT": 1045
        },
        {
            "x": 179,
            "y": 71.28125,
            "normalizedX": 0.358,
            "normalizedY": 0.1425625,
            "t": 1652540731378,
            "normalizedT": 1053
        },
        {
            "x": 179,
            "y": 72.28125,
            "normalizedX": 0.358,
            "normalizedY": 0.1445625,
            "t": 1652540731386,
            "normalizedT": 1061
        },
        {
            "x": 178,
            "y": 72.28125,
            "normalizedX": 0.356,
            "normalizedY": 0.1445625,
            "t": 1652540731394,
            "normalizedT": 1069
        },
        {
            "x": 178,
            "y": 74.28125,
            "normalizedX": 0.356,
            "normalizedY": 0.1485625,
            "t": 1652540731402,
            "normalizedT": 1077
        },
        {
            "x": 177,
            "y": 75.28125,
            "normalizedX": 0.354,
            "normalizedY": 0.1505625,
            "t": 1652540731410,
            "normalizedT": 1085
        },
        {
            "x": 177,
            "y": 76.28125,
            "normalizedX": 0.354,
            "normalizedY": 0.1525625,
            "t": 1652540731418,
            "normalizedT": 1093
        },
        {
            "x": 176,
            "y": 78.28125,
            "normalizedX": 0.352,
            "normalizedY": 0.1565625,
            "t": 1652540731426,
            "normalizedT": 1101
        },
        {
            "x": 176,
            "y": 78.28125,
            "normalizedX": 0.352,
            "normalizedY": 0.1565625,
            "t": 1652540731434,
            "normalizedT": 1109
        },
        {
            "x": 175,
            "y": 80.28125,
            "normalizedX": 0.35,
            "normalizedY": 0.1605625,
            "t": 1652540731442,
            "normalizedT": 1117
        },
        {
            "x": 175,
            "y": 81.28125,
            "normalizedX": 0.35,
            "normalizedY": 0.1625625,
            "t": 1652540731452,
            "normalizedT": 1127
        },
        {
            "x": 174,
            "y": 82.28125,
            "normalizedX": 0.348,
            "normalizedY": 0.1645625,
            "t": 1652540731460,
            "normalizedT": 1135
        },
        {
            "x": 174,
            "y": 83.28125,
            "normalizedX": 0.348,
            "normalizedY": 0.1665625,
            "t": 1652540731468,
            "normalizedT": 1143
        },
        {
            "x": 174,
            "y": 84.28125,
            "normalizedX": 0.348,
            "normalizedY": 0.1685625,
            "t": 1652540731476,
            "normalizedT": 1151
        },
        {
            "x": 173,
            "y": 85.28125,
            "normalizedX": 0.346,
            "normalizedY": 0.1705625,
            "t": 1652540731484,
            "normalizedT": 1159
        },
        {
            "x": 172,
            "y": 86.28125,
            "normalizedX": 0.344,
            "normalizedY": 0.1725625,
            "t": 1652540731508,
            "normalizedT": 1183
        },
        {
            "x": 172,
            "y": 87.28125,
            "normalizedX": 0.344,
            "normalizedY": 0.1745625,
            "t": 1652540731516,
            "normalizedT": 1191
        },
        {
            "x": 172,
            "y": 88.28125,
            "normalizedX": 0.344,
            "normalizedY": 0.1765625,
            "t": 1652540731524,
            "normalizedT": 1199
        },
        {
            "x": 172,
            "y": 89.28125,
            "normalizedX": 0.344,
            "normalizedY": 0.1785625,
            "t": 1652540731532,
            "normalizedT": 1207
        },
        {
            "x": 172,
            "y": 90.28125,
            "normalizedX": 0.344,
            "normalizedY": 0.1805625,
            "t": 1652540731540,
            "normalizedT": 1215
        },
        {
            "x": 171,
            "y": 91.28125,
            "normalizedX": 0.342,
            "normalizedY": 0.1825625,
            "t": 1652540731548,
            "normalizedT": 1223
        },
        {
            "x": 171,
            "y": 92.28125,
            "normalizedX": 0.342,
            "normalizedY": 0.1845625,
            "t": 1652540731556,
            "normalizedT": 1231
        },
        {
            "x": 170,
            "y": 92.28125,
            "normalizedX": 0.34,
            "normalizedY": 0.1845625,
            "t": 1652540731564,
            "normalizedT": 1239
        },
        {
            "x": 170,
            "y": 94.28125,
            "normalizedX": 0.34,
            "normalizedY": 0.1885625,
            "t": 1652540731572,
            "normalizedT": 1247
        },
        {
            "x": 170,
            "y": 95.28125,
            "normalizedX": 0.34,
            "normalizedY": 0.1905625,
            "t": 1652540731588,
            "normalizedT": 1263
        },
        {
            "x": 170,
            "y": 96.28125,
            "normalizedX": 0.34,
            "normalizedY": 0.1925625,
            "t": 1652540731596,
            "normalizedT": 1271
        },
        {
            "x": 169,
            "y": 96.28125,
            "normalizedX": 0.338,
            "normalizedY": 0.1925625,
            "t": 1652540731605,
            "normalizedT": 1280
        },
        {
            "x": 169,
            "y": 98.28125,
            "normalizedX": 0.338,
            "normalizedY": 0.1965625,
            "t": 1652540731612,
            "normalizedT": 1287
        },
        {
            "x": 168,
            "y": 98.28125,
            "normalizedX": 0.336,
            "normalizedY": 0.1965625,
            "t": 1652540731620,
            "normalizedT": 1295
        },
        {
            "x": 168,
            "y": 98.28125,
            "normalizedX": 0.336,
            "normalizedY": 0.1965625,
            "t": 1652540731628,
            "normalizedT": 1303
        },
        {
            "x": 168,
            "y": 100.28125,
            "normalizedX": 0.336,
            "normalizedY": 0.2005625,
            "t": 1652540731636,
            "normalizedT": 1311
        },
        {
            "x": 168,
            "y": 100.28125,
            "normalizedX": 0.336,
            "normalizedY": 0.2005625,
            "t": 1652540731652,
            "normalizedT": 1327
        },
        {
            "x": 168,
            "y": 102.28125,
            "normalizedX": 0.336,
            "normalizedY": 0.2045625,
            "t": 1652540731660,
            "normalizedT": 1335
        },
        {
            "x": 167,
            "y": 102.28125,
            "normalizedX": 0.334,
            "normalizedY": 0.2045625,
            "t": 1652540731668,
            "normalizedT": 1343
        },
        {
            "x": 167,
            "y": 103.28125,
            "normalizedX": 0.334,
            "normalizedY": 0.2065625,
            "t": 1652540731676,
            "normalizedT": 1351
        },
        {
            "x": 167,
            "y": 104.28125,
            "normalizedX": 0.334,
            "normalizedY": 0.2085625,
            "t": 1652540731684,
            "normalizedT": 1359
        },
        {
            "x": 167,
            "y": 104.28125,
            "normalizedX": 0.334,
            "normalizedY": 0.2085625,
            "t": 1652540731700,
            "normalizedT": 1375
        },
        {
            "x": 166,
            "y": 105.28125,
            "normalizedX": 0.332,
            "normalizedY": 0.2105625,
            "t": 1652540731708,
            "normalizedT": 1383
        },
        {
            "x": 166,
            "y": 106.28125,
            "normalizedX": 0.332,
            "normalizedY": 0.2125625,
            "t": 1652540731718,
            "normalizedT": 1393
        },
        {
            "x": 166,
            "y": 107.28125,
            "normalizedX": 0.332,
            "normalizedY": 0.2145625,
            "t": 1652540731724,
            "normalizedT": 1399
        },
        {
            "x": 166,
            "y": 108.28125,
            "normalizedX": 0.332,
            "normalizedY": 0.2165625,
            "t": 1652540731732,
            "normalizedT": 1407
        },
        {
            "x": 165,
            "y": 108.28125,
            "normalizedX": 0.33,
            "normalizedY": 0.2165625,
            "t": 1652540731750,
            "normalizedT": 1425
        },
        {
            "x": 164,
            "y": 109.28125,
            "normalizedX": 0.328,
            "normalizedY": 0.2185625,
            "t": 1652540731758,
            "normalizedT": 1433
        },
        {
            "x": 164,
            "y": 110.28125,
            "normalizedX": 0.328,
            "normalizedY": 0.2205625,
            "t": 1652540731766,
            "normalizedT": 1441
        },
        {
            "x": 164,
            "y": 111.28125,
            "normalizedX": 0.328,
            "normalizedY": 0.2225625,
            "t": 1652540731774,
            "normalizedT": 1449
        },
        {
            "x": 163,
            "y": 112.28125,
            "normalizedX": 0.326,
            "normalizedY": 0.2245625,
            "t": 1652540731782,
            "normalizedT": 1457
        },
        {
            "x": 162,
            "y": 113.28125,
            "normalizedX": 0.324,
            "normalizedY": 0.2265625,
            "t": 1652540731798,
            "normalizedT": 1473
        },
        {
            "x": 162,
            "y": 114.28125,
            "normalizedX": 0.324,
            "normalizedY": 0.2285625,
            "t": 1652540731806,
            "normalizedT": 1481
        },
        {
            "x": 162,
            "y": 114.28125,
            "normalizedX": 0.324,
            "normalizedY": 0.2285625,
            "t": 1652540731814,
            "normalizedT": 1489
        },
        {
            "x": 161,
            "y": 115.28125,
            "normalizedX": 0.322,
            "normalizedY": 0.2305625,
            "t": 1652540731822,
            "normalizedT": 1497
        },
        {
            "x": 161,
            "y": 116.28125,
            "normalizedX": 0.322,
            "normalizedY": 0.2325625,
            "t": 1652540731846,
            "normalizedT": 1521
        },
        {
            "x": 161,
            "y": 116.28125,
            "normalizedX": 0.322,
            "normalizedY": 0.2325625,
            "t": 1652540731854,
            "normalizedT": 1529
        },
        {
            "x": 160,
            "y": 117.28125,
            "normalizedX": 0.32,
            "normalizedY": 0.2345625,
            "t": 1652540731870,
            "normalizedT": 1545
        },
        {
            "x": 160,
            "y": 118.28125,
            "normalizedX": 0.32,
            "normalizedY": 0.2365625,
            "t": 1652540731886,
            "normalizedT": 1561
        },
        {
            "x": 160,
            "y": 118.28125,
            "normalizedX": 0.32,
            "normalizedY": 0.2365625,
            "t": 1652540731894,
            "normalizedT": 1569
        },
        {
            "x": 159,
            "y": 118.28125,
            "normalizedX": 0.318,
            "normalizedY": 0.2365625,
            "t": 1652540731910,
            "normalizedT": 1585
        },
        {
            "x": 158,
            "y": 119.28125,
            "normalizedX": 0.316,
            "normalizedY": 0.2385625,
            "t": 1652540731918,
            "normalizedT": 1593
        },
        {
            "x": 158,
            "y": 120.28125,
            "normalizedX": 0.316,
            "normalizedY": 0.2405625,
            "t": 1652540731942,
            "normalizedT": 1617
        },
        {
            "x": 157,
            "y": 120.28125,
            "normalizedX": 0.314,
            "normalizedY": 0.2405625,
            "t": 1652540731950,
            "normalizedT": 1625
        },
        {
            "x": 157,
            "y": 120.28125,
            "normalizedX": 0.314,
            "normalizedY": 0.2405625,
            "t": 1652540731958,
            "normalizedT": 1633
        },
        {
            "x": 157,
            "y": 121.28125,
            "normalizedX": 0.314,
            "normalizedY": 0.2425625,
            "t": 1652540731974,
            "normalizedT": 1649
        },
        {
            "x": 156,
            "y": 121.28125,
            "normalizedX": 0.312,
            "normalizedY": 0.2425625,
            "t": 1652540731982,
            "normalizedT": 1657
        },
        {
            "x": 156,
            "y": 122.28125,
            "normalizedX": 0.312,
            "normalizedY": 0.2445625,
            "t": 1652540731990,
            "normalizedT": 1665
        },
        {
            "x": 155,
            "y": 122.28125,
            "normalizedX": 0.31,
            "normalizedY": 0.2445625,
            "t": 1652540732008,
            "normalizedT": 1683
        },
        {
            "x": 154,
            "y": 123.28125,
            "normalizedX": 0.308,
            "normalizedY": 0.2465625,
            "t": 1652540732014,
            "normalizedT": 1689
        },
        {
            "x": 153,
            "y": 123.28125,
            "normalizedX": 0.306,
            "normalizedY": 0.2465625,
            "t": 1652540732024,
            "normalizedT": 1699
        },
        {
            "x": 152,
            "y": 124.28125,
            "normalizedX": 0.304,
            "normalizedY": 0.2485625,
            "t": 1652540732040,
            "normalizedT": 1715
        },
        {
            "x": 150,
            "y": 125.28125,
            "normalizedX": 0.3,
            "normalizedY": 0.2505625,
            "t": 1652540732048,
            "normalizedT": 1723
        },
        {
            "x": 148,
            "y": 126.28125,
            "normalizedX": 0.296,
            "normalizedY": 0.2525625,
            "t": 1652540732056,
            "normalizedT": 1731
        },
        {
            "x": 146,
            "y": 127.28125,
            "normalizedX": 0.292,
            "normalizedY": 0.2545625,
            "t": 1652540732072,
            "normalizedT": 1747
        },
        {
            "x": 144,
            "y": 128.28125,
            "normalizedX": 0.288,
            "normalizedY": 0.2565625,
            "t": 1652540732080,
            "normalizedT": 1755
        },
        {
            "x": 142,
            "y": 129.28125,
            "normalizedX": 0.284,
            "normalizedY": 0.2585625,
            "t": 1652540732088,
            "normalizedT": 1763
        },
        {
            "x": 140,
            "y": 130.28125,
            "normalizedX": 0.28,
            "normalizedY": 0.2605625,
            "t": 1652540732104,
            "normalizedT": 1779
        },
        {
            "x": 138,
            "y": 131.28125,
            "normalizedX": 0.276,
            "normalizedY": 0.2625625,
            "t": 1652540732112,
            "normalizedT": 1787
        },
        {
            "x": 136,
            "y": 133.28125,
            "normalizedX": 0.272,
            "normalizedY": 0.2665625,
            "t": 1652540732128,
            "normalizedT": 1803
        },
        {
            "x": 135,
            "y": 134.28125,
            "normalizedX": 0.27,
            "normalizedY": 0.2685625,
            "t": 1652540732136,
            "normalizedT": 1811
        },
        {
            "x": 133,
            "y": 134.28125,
            "normalizedX": 0.266,
            "normalizedY": 0.2685625,
            "t": 1652540732144,
            "normalizedT": 1819
        },
        {
            "x": 132,
            "y": 136.28125,
            "normalizedX": 0.264,
            "normalizedY": 0.2725625,
            "t": 1652540732160,
            "normalizedT": 1835
        },
        {
            "x": 130,
            "y": 137.28125,
            "normalizedX": 0.26,
            "normalizedY": 0.2745625,
            "t": 1652540732168,
            "normalizedT": 1843
        },
        {
            "x": 129,
            "y": 138.28125,
            "normalizedX": 0.258,
            "normalizedY": 0.2765625,
            "t": 1652540732184,
            "normalizedT": 1859
        },
        {
            "x": 127,
            "y": 139.28125,
            "normalizedX": 0.254,
            "normalizedY": 0.2785625,
            "t": 1652540732192,
            "normalizedT": 1867
        },
        {
            "x": 126,
            "y": 140.28125,
            "normalizedX": 0.252,
            "normalizedY": 0.2805625,
            "t": 1652540732200,
            "normalizedT": 1875
        },
        {
            "x": 124,
            "y": 142.28125,
            "normalizedX": 0.248,
            "normalizedY": 0.2845625,
            "t": 1652540732216,
            "normalizedT": 1891
        },
        {
            "x": 122,
            "y": 144.28125,
            "normalizedX": 0.244,
            "normalizedY": 0.2885625,
            "t": 1652540732224,
            "normalizedT": 1899
        },
        {
            "x": 121,
            "y": 145.28125,
            "normalizedX": 0.242,
            "normalizedY": 0.2905625,
            "t": 1652540732240,
            "normalizedT": 1915
        },
        {
            "x": 119,
            "y": 147.28125,
            "normalizedX": 0.238,
            "normalizedY": 0.2945625,
            "t": 1652540732248,
            "normalizedT": 1923
        },
        {
            "x": 118,
            "y": 148.28125,
            "normalizedX": 0.236,
            "normalizedY": 0.2965625,
            "t": 1652540732264,
            "normalizedT": 1939
        },
        {
            "x": 116,
            "y": 150.28125,
            "normalizedX": 0.232,
            "normalizedY": 0.3005625,
            "t": 1652540732272,
            "normalizedT": 1947
        },
        {
            "x": 115,
            "y": 152.28125,
            "normalizedX": 0.23,
            "normalizedY": 0.3045625,
            "t": 1652540732280,
            "normalizedT": 1955
        },
        {
            "x": 114,
            "y": 153.28125,
            "normalizedX": 0.228,
            "normalizedY": 0.3065625,
            "t": 1652540732298,
            "normalizedT": 1973
        },
        {
            "x": 113,
            "y": 154.28125,
            "normalizedX": 0.226,
            "normalizedY": 0.3085625,
            "t": 1652540732306,
            "normalizedT": 1981
        },
        {
            "x": 112,
            "y": 156.28125,
            "normalizedX": 0.224,
            "normalizedY": 0.3125625,
            "t": 1652540732322,
            "normalizedT": 1997
        },
        {
            "x": 112,
            "y": 157.28125,
            "normalizedX": 0.224,
            "normalizedY": 0.3145625,
            "t": 1652540732330,
            "normalizedT": 2005
        },
        {
            "x": 111,
            "y": 159.28125,
            "normalizedX": 0.222,
            "normalizedY": 0.3185625,
            "t": 1652540732338,
            "normalizedT": 2013
        },
        {
            "x": 110,
            "y": 160.28125,
            "normalizedX": 0.22,
            "normalizedY": 0.3205625,
            "t": 1652540732354,
            "normalizedT": 2029
        },
        {
            "x": 109,
            "y": 163.28125,
            "normalizedX": 0.218,
            "normalizedY": 0.3265625,
            "t": 1652540732362,
            "normalizedT": 2037
        },
        {
            "x": 108,
            "y": 165.28125,
            "normalizedX": 0.216,
            "normalizedY": 0.3305625,
            "t": 1652540732378,
            "normalizedT": 2053
        },
        {
            "x": 106,
            "y": 167.28125,
            "normalizedX": 0.212,
            "normalizedY": 0.3345625,
            "t": 1652540732386,
            "normalizedT": 2061
        },
        {
            "x": 106,
            "y": 170.28125,
            "normalizedX": 0.212,
            "normalizedY": 0.3405625,
            "t": 1652540732394,
            "normalizedT": 2069
        },
        {
            "x": 104,
            "y": 172.28125,
            "normalizedX": 0.208,
            "normalizedY": 0.3445625,
            "t": 1652540732410,
            "normalizedT": 2085
        },
        {
            "x": 102,
            "y": 176.28125,
            "normalizedX": 0.204,
            "normalizedY": 0.3525625,
            "t": 1652540732418,
            "normalizedT": 2093
        },
        {
            "x": 101,
            "y": 178.28125,
            "normalizedX": 0.202,
            "normalizedY": 0.3565625,
            "t": 1652540732434,
            "normalizedT": 2109
        },
        {
            "x": 100,
            "y": 181.28125,
            "normalizedX": 0.2,
            "normalizedY": 0.3625625,
            "t": 1652540732442,
            "normalizedT": 2117
        },
        {
            "x": 100,
            "y": 184.28125,
            "normalizedX": 0.2,
            "normalizedY": 0.3685625,
            "t": 1652540732450,
            "normalizedT": 2125
        },
        {
            "x": 98,
            "y": 186.28125,
            "normalizedX": 0.196,
            "normalizedY": 0.3725625,
            "t": 1652540732466,
            "normalizedT": 2141
        },
        {
            "x": 97,
            "y": 189.28125,
            "normalizedX": 0.194,
            "normalizedY": 0.3785625,
            "t": 1652540732474,
            "normalizedT": 2149
        },
        {
            "x": 97,
            "y": 190.28125,
            "normalizedX": 0.194,
            "normalizedY": 0.3805625,
            "t": 1652540732482,
            "normalizedT": 2157
        },
        {
            "x": 96,
            "y": 191.28125,
            "normalizedX": 0.192,
            "normalizedY": 0.3825625,
            "t": 1652540732490,
            "normalizedT": 2165
        },
        {
            "x": 96,
            "y": 193.28125,
            "normalizedX": 0.192,
            "normalizedY": 0.3865625,
            "t": 1652540732498,
            "normalizedT": 2173
        },
        {
            "x": 95,
            "y": 194.28125,
            "normalizedX": 0.19,
            "normalizedY": 0.3885625,
            "t": 1652540732506,
            "normalizedT": 2181
        },
        {
            "x": 94,
            "y": 196.28125,
            "normalizedX": 0.188,
            "normalizedY": 0.3925625,
            "t": 1652540732514,
            "normalizedT": 2189
        },
        {
            "x": 94,
            "y": 197.28125,
            "normalizedX": 0.188,
            "normalizedY": 0.3945625,
            "t": 1652540732530,
            "normalizedT": 2205
        },
        {
            "x": 93,
            "y": 198.28125,
            "normalizedX": 0.186,
            "normalizedY": 0.3965625,
            "t": 1652540732538,
            "normalizedT": 2213
        },
        {
            "x": 92,
            "y": 200.28125,
            "normalizedX": 0.184,
            "normalizedY": 0.4005625,
            "t": 1652540732546,
            "normalizedT": 2221
        },
        {
            "x": 92,
            "y": 202.28125,
            "normalizedX": 0.184,
            "normalizedY": 0.4045625,
            "t": 1652540732554,
            "normalizedT": 2229
        },
        {
            "x": 90,
            "y": 204.28125,
            "normalizedX": 0.18,
            "normalizedY": 0.4085625,
            "t": 1652540732562,
            "normalizedT": 2237
        },
        {
            "x": 90,
            "y": 205.28125,
            "normalizedX": 0.18,
            "normalizedY": 0.4105625,
            "t": 1652540732570,
            "normalizedT": 2245
        },
        {
            "x": 89,
            "y": 207.28125,
            "normalizedX": 0.178,
            "normalizedY": 0.4145625,
            "t": 1652540732580,
            "normalizedT": 2255
        },
        {
            "x": 88,
            "y": 209.28125,
            "normalizedX": 0.176,
            "normalizedY": 0.4185625,
            "t": 1652540732594,
            "normalizedT": 2269
        },
        {
            "x": 86,
            "y": 211.28125,
            "normalizedX": 0.172,
            "normalizedY": 0.4225625,
            "t": 1652540732602,
            "normalizedT": 2277
        },
        {
            "x": 86,
            "y": 213.28125,
            "normalizedX": 0.172,
            "normalizedY": 0.4265625,
            "t": 1652540732612,
            "normalizedT": 2287
        },
        {
            "x": 84,
            "y": 216.28125,
            "normalizedX": 0.168,
            "normalizedY": 0.4325625,
            "t": 1652540732620,
            "normalizedT": 2295
        },
        {
            "x": 84,
            "y": 217.28125,
            "normalizedX": 0.168,
            "normalizedY": 0.4345625,
            "t": 1652540732628,
            "normalizedT": 2303
        },
        {
            "x": 82,
            "y": 219.28125,
            "normalizedX": 0.164,
            "normalizedY": 0.4385625,
            "t": 1652540732636,
            "normalizedT": 2311
        },
        {
            "x": 82,
            "y": 220.28125,
            "normalizedX": 0.164,
            "normalizedY": 0.4405625,
            "t": 1652540732652,
            "normalizedT": 2327
        },
        {
            "x": 81,
            "y": 222.28125,
            "normalizedX": 0.162,
            "normalizedY": 0.4445625,
            "t": 1652540732660,
            "normalizedT": 2335
        },
        {
            "x": 80,
            "y": 223.28125,
            "normalizedX": 0.16,
            "normalizedY": 0.4465625,
            "t": 1652540732668,
            "normalizedT": 2343
        },
        {
            "x": 80,
            "y": 224.28125,
            "normalizedX": 0.16,
            "normalizedY": 0.4485625,
            "t": 1652540732676,
            "normalizedT": 2351
        },
        {
            "x": 79,
            "y": 225.28125,
            "normalizedX": 0.158,
            "normalizedY": 0.4505625,
            "t": 1652540732684,
            "normalizedT": 2359
        },
        {
            "x": 79,
            "y": 226.28125,
            "normalizedX": 0.158,
            "normalizedY": 0.4525625,
            "t": 1652540732692,
            "normalizedT": 2367
        },
        {
            "x": 78,
            "y": 226.28125,
            "normalizedX": 0.156,
            "normalizedY": 0.4525625,
            "t": 1652540732708,
            "normalizedT": 2383
        },
        {
            "x": 78,
            "y": 228.28125,
            "normalizedX": 0.156,
            "normalizedY": 0.4565625,
            "t": 1652540732716,
            "normalizedT": 2391
        },
        {
            "x": 78,
            "y": 228.28125,
            "normalizedX": 0.156,
            "normalizedY": 0.4565625,
            "t": 1652540732724,
            "normalizedT": 2399
        },
        {
            "x": 77,
            "y": 229.28125,
            "normalizedX": 0.154,
            "normalizedY": 0.4585625,
            "t": 1652540732732,
            "normalizedT": 2407
        },
        {
            "x": 76,
            "y": 229.28125,
            "normalizedX": 0.152,
            "normalizedY": 0.4585625,
            "t": 1652540732748,
            "normalizedT": 2423
        },
        {
            "x": 76,
            "y": 230.28125,
            "normalizedX": 0.152,
            "normalizedY": 0.4605625,
            "t": 1652540732756,
            "normalizedT": 2431
        },
        {
            "x": 76,
            "y": 230.28125,
            "normalizedX": 0.152,
            "normalizedY": 0.4605625,
            "t": 1652540732764,
            "normalizedT": 2439
        },
        {
            "x": 76,
            "y": 231.28125,
            "normalizedX": 0.152,
            "normalizedY": 0.4625625,
            "t": 1652540732772,
            "normalizedT": 2447
        },
        {
            "x": 75,
            "y": 232.28125,
            "normalizedX": 0.15,
            "normalizedY": 0.4645625,
            "t": 1652540732780,
            "normalizedT": 2455
        },
        {
            "x": 75,
            "y": 232.28125,
            "normalizedX": 0.15,
            "normalizedY": 0.4645625,
            "t": 1652540732796,
            "normalizedT": 2471
        },
        {
            "x": 74,
            "y": 233.28125,
            "normalizedX": 0.148,
            "normalizedY": 0.4665625,
            "t": 1652540732804,
            "normalizedT": 2479
        },
        {
            "x": 74,
            "y": 233.28125,
            "normalizedX": 0.148,
            "normalizedY": 0.4665625,
            "t": 1652540732812,
            "normalizedT": 2487
        },
        {
            "x": 74,
            "y": 234.28125,
            "normalizedX": 0.148,
            "normalizedY": 0.4685625,
            "t": 1652540732828,
            "normalizedT": 2503
        },
        {
            "x": 73,
            "y": 234.28125,
            "normalizedX": 0.146,
            "normalizedY": 0.4685625,
            "t": 1652540732836,
            "normalizedT": 2511
        },
        {
            "x": 72,
            "y": 234.28125,
            "normalizedX": 0.144,
            "normalizedY": 0.4685625,
            "t": 1652540732844,
            "normalizedT": 2519
        },
        {
            "x": 72,
            "y": 235.28125,
            "normalizedX": 0.144,
            "normalizedY": 0.4705625,
            "t": 1652540732852,
            "normalizedT": 2527
        },
        {
            "x": 72,
            "y": 236.28125,
            "normalizedX": 0.144,
            "normalizedY": 0.4725625,
            "t": 1652540732870,
            "normalizedT": 2545
        },
        {
            "x": 71,
            "y": 237.28125,
            "normalizedX": 0.142,
            "normalizedY": 0.4745625,
            "t": 1652540732876,
            "normalizedT": 2551
        },
        {
            "x": 70,
            "y": 238.28125,
            "normalizedX": 0.14,
            "normalizedY": 0.4765625,
            "t": 1652540732886,
            "normalizedT": 2561
        },
        {
            "x": 69,
            "y": 239.28125,
            "normalizedX": 0.138,
            "normalizedY": 0.4785625,
            "t": 1652540732902,
            "normalizedT": 2577
        },
        {
            "x": 68,
            "y": 239.28125,
            "normalizedX": 0.136,
            "normalizedY": 0.4785625,
            "t": 1652540732910,
            "normalizedT": 2585
        },
        {
            "x": 67,
            "y": 240.28125,
            "normalizedX": 0.134,
            "normalizedY": 0.4805625,
            "t": 1652540732918,
            "normalizedT": 2593
        },
        {
            "x": 66,
            "y": 242.28125,
            "normalizedX": 0.132,
            "normalizedY": 0.4845625,
            "t": 1652540732926,
            "normalizedT": 2601
        },
        {
            "x": 65,
            "y": 242.28125,
            "normalizedX": 0.13,
            "normalizedY": 0.4845625,
            "t": 1652540732942,
            "normalizedT": 2617
        },
        {
            "x": 64,
            "y": 244.28125,
            "normalizedX": 0.128,
            "normalizedY": 0.4885625,
            "t": 1652540732950,
            "normalizedT": 2625
        },
        {
            "x": 63,
            "y": 246.28125,
            "normalizedX": 0.126,
            "normalizedY": 0.4925625,
            "t": 1652540732958,
            "normalizedT": 2633
        },
        {
            "x": 62,
            "y": 246.28125,
            "normalizedX": 0.124,
            "normalizedY": 0.4925625,
            "t": 1652540732974,
            "normalizedT": 2649
        },
        {
            "x": 61,
            "y": 246.28125,
            "normalizedX": 0.122,
            "normalizedY": 0.4925625,
            "t": 1652540732982,
            "normalizedT": 2657
        },
        {
            "x": 60,
            "y": 248.28125,
            "normalizedX": 0.12,
            "normalizedY": 0.4965625,
            "t": 1652540732990,
            "normalizedT": 2665
        },
        {
            "x": 59,
            "y": 248.28125,
            "normalizedX": 0.118,
            "normalizedY": 0.4965625,
            "t": 1652540733006,
            "normalizedT": 2681
        },
        {
            "x": 58,
            "y": 249.28125,
            "normalizedX": 0.116,
            "normalizedY": 0.4985625,
            "t": 1652540733014,
            "normalizedT": 2689
        },
        {
            "x": 57,
            "y": 250.28125,
            "normalizedX": 0.114,
            "normalizedY": 0.5005625,
            "t": 1652540733030,
            "normalizedT": 2705
        },
        {
            "x": 56,
            "y": 251.28125,
            "normalizedX": 0.112,
            "normalizedY": 0.5025625,
            "t": 1652540733038,
            "normalizedT": 2713
        },
        {
            "x": 55,
            "y": 252.28125,
            "normalizedX": 0.11,
            "normalizedY": 0.5045625,
            "t": 1652540733046,
            "normalizedT": 2721
        },
        {
            "x": 54,
            "y": 253.28125,
            "normalizedX": 0.108,
            "normalizedY": 0.5065625,
            "t": 1652540733054,
            "normalizedT": 2729
        },
        {
            "x": 53,
            "y": 254.28125,
            "normalizedX": 0.106,
            "normalizedY": 0.5085625,
            "t": 1652540733062,
            "normalizedT": 2737
        },
        {
            "x": 52,
            "y": 255.28125,
            "normalizedX": 0.104,
            "normalizedY": 0.5105625,
            "t": 1652540733070,
            "normalizedT": 2745
        },
        {
            "x": 50,
            "y": 258.28125,
            "normalizedX": 0.1,
            "normalizedY": 0.5165625,
            "t": 1652540733078,
            "normalizedT": 2753
        },
        {
            "x": 49,
            "y": 258.28125,
            "normalizedX": 0.098,
            "normalizedY": 0.5165625,
            "t": 1652540733086,
            "normalizedT": 2761
        },
        {
            "x": 48,
            "y": 259.28125,
            "normalizedX": 0.096,
            "normalizedY": 0.5185625,
            "t": 1652540733094,
            "normalizedT": 2769
        },
        {
            "x": 47,
            "y": 260.28125,
            "normalizedX": 0.094,
            "normalizedY": 0.5205625,
            "t": 1652540733102,
            "normalizedT": 2777
        },
        {
            "x": 46,
            "y": 261.28125,
            "normalizedX": 0.092,
            "normalizedY": 0.5225625,
            "t": 1652540733110,
            "normalizedT": 2785
        },
        {
            "x": 45,
            "y": 262.28125,
            "normalizedX": 0.09,
            "normalizedY": 0.5245625,
            "t": 1652540733118,
            "normalizedT": 2793
        },
        {
            "x": 43,
            "y": 264.28125,
            "normalizedX": 0.086,
            "normalizedY": 0.5285625,
            "t": 1652540733126,
            "normalizedT": 2801
        },
        {
            "x": 43,
            "y": 264.28125,
            "normalizedX": 0.086,
            "normalizedY": 0.5285625,
            "t": 1652540733134,
            "normalizedT": 2809
        },
        {
            "x": 42,
            "y": 265.28125,
            "normalizedX": 0.084,
            "normalizedY": 0.5305625,
            "t": 1652540733142,
            "normalizedT": 2817
        },
        {
            "x": 42,
            "y": 266.28125,
            "normalizedX": 0.084,
            "normalizedY": 0.5325625,
            "t": 1652540733152,
            "normalizedT": 2827
        },
        {
            "x": 41,
            "y": 266.28125,
            "normalizedX": 0.082,
            "normalizedY": 0.5325625,
            "t": 1652540733160,
            "normalizedT": 2835
        },
        {
            "x": 40,
            "y": 266.28125,
            "normalizedX": 0.08,
            "normalizedY": 0.5325625,
            "t": 1652540733168,
            "normalizedT": 2843
        },
        {
            "x": 40,
            "y": 267.28125,
            "normalizedX": 0.08,
            "normalizedY": 0.5345625,
            "t": 1652540733176,
            "normalizedT": 2851
        },
        {
            "x": 38,
            "y": 269.28125,
            "normalizedX": 0.076,
            "normalizedY": 0.5385625,
            "t": 1652540733195,
            "normalizedT": 2870
        },
        {
            "x": 38,
            "y": 270.28125,
            "normalizedX": 0.076,
            "normalizedY": 0.5405625,
            "t": 1652540733200,
            "normalizedT": 2875
        },
        {
            "x": 36,
            "y": 271.28125,
            "normalizedX": 0.072,
            "normalizedY": 0.5425625,
            "t": 1652540733208,
            "normalizedT": 2883
        },
        {
            "x": 36,
            "y": 271.28125,
            "normalizedX": 0.072,
            "normalizedY": 0.5425625,
            "t": 1652540733216,
            "normalizedT": 2891
        },
        {
            "x": 35,
            "y": 272.28125,
            "normalizedX": 0.07,
            "normalizedY": 0.5445625,
            "t": 1652540733224,
            "normalizedT": 2899
        }
    ],
    [
        {
            "x": 31,
            "y": 381.28125,
            "normalizedX": 0.062,
            "normalizedY": 0.7625625,
            "t": 1652540733935,
            "normalizedT": 0
        },
        {
            "x": 30,
            "y": 381.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7625625,
            "t": 1652540734012,
            "normalizedT": 77
        },
        {
            "x": 30,
            "y": 380.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7605625,
            "t": 1652540734038,
            "normalizedT": 103
        },
        {
            "x": 30,
            "y": 380.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7605625,
            "t": 1652540734046,
            "normalizedT": 111
        },
        {
            "x": 30,
            "y": 379.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7585625,
            "t": 1652540734054,
            "normalizedT": 119
        },
        {
            "x": 30,
            "y": 378.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7565625,
            "t": 1652540734062,
            "normalizedT": 127
        },
        {
            "x": 30,
            "y": 377.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7545625,
            "t": 1652540734070,
            "normalizedT": 135
        },
        {
            "x": 30,
            "y": 375.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7505625,
            "t": 1652540734078,
            "normalizedT": 143
        },
        {
            "x": 30,
            "y": 374.28125,
            "normalizedX": 0.06,
            "normalizedY": 0.7485625,
            "t": 1652540734086,
            "normalizedT": 151
        },
        {
            "x": 31,
            "y": 371.28125,
            "normalizedX": 0.062,
            "normalizedY": 0.7425625,
            "t": 1652540734094,
            "normalizedT": 159
        },
        {
            "x": 32,
            "y": 370.28125,
            "normalizedX": 0.064,
            "normalizedY": 0.7405625,
            "t": 1652540734102,
            "normalizedT": 167
        },
        {
            "x": 32,
            "y": 368.28125,
            "normalizedX": 0.064,
            "normalizedY": 0.7365625,
            "t": 1652540734110,
            "normalizedT": 175
        },
        {
            "x": 34,
            "y": 364.28125,
            "normalizedX": 0.068,
            "normalizedY": 0.7285625,
            "t": 1652540734118,
            "normalizedT": 183
        },
        {
            "x": 35,
            "y": 363.28125,
            "normalizedX": 0.07,
            "normalizedY": 0.7265625,
            "t": 1652540734126,
            "normalizedT": 191
        },
        {
            "x": 35,
            "y": 362.28125,
            "normalizedX": 0.07,
            "normalizedY": 0.7245625,
            "t": 1652540734134,
            "normalizedT": 199
        },
        {
            "x": 36,
            "y": 362.28125,
            "normalizedX": 0.072,
            "normalizedY": 0.7245625,
            "t": 1652540734142,
            "normalizedT": 207
        },
        {
            "x": 36,
            "y": 360.28125,
            "normalizedX": 0.072,
            "normalizedY": 0.7205625,
            "t": 1652540734150,
            "normalizedT": 215
        },
        {
            "x": 37,
            "y": 360.28125,
            "normalizedX": 0.074,
            "normalizedY": 0.7205625,
            "t": 1652540734158,
            "normalizedT": 223
        },
        {
            "x": 38,
            "y": 358.28125,
            "normalizedX": 0.076,
            "normalizedY": 0.7165625,
            "t": 1652540734166,
            "normalizedT": 231
        },
        {
            "x": 39,
            "y": 356.28125,
            "normalizedX": 0.078,
            "normalizedY": 0.7125625,
            "t": 1652540734174,
            "normalizedT": 239
        },
        {
            "x": 40,
            "y": 354.28125,
            "normalizedX": 0.08,
            "normalizedY": 0.7085625,
            "t": 1652540734182,
            "normalizedT": 247
        },
        {
            "x": 42,
            "y": 352.28125,
            "normalizedX": 0.084,
            "normalizedY": 0.7045625,
            "t": 1652540734190,
            "normalizedT": 255
        },
        {
            "x": 44,
            "y": 351.28125,
            "normalizedX": 0.088,
            "normalizedY": 0.7025625,
            "t": 1652540734198,
            "normalizedT": 263
        },
        {
            "x": 46,
            "y": 348.28125,
            "normalizedX": 0.092,
            "normalizedY": 0.6965625,
            "t": 1652540734206,
            "normalizedT": 271
        },
        {
            "x": 47,
            "y": 347.28125,
            "normalizedX": 0.094,
            "normalizedY": 0.6945625,
            "t": 1652540734214,
            "normalizedT": 279
        },
        {
            "x": 49,
            "y": 346.28125,
            "normalizedX": 0.098,
            "normalizedY": 0.6925625,
            "t": 1652540734222,
            "normalizedT": 287
        },
        {
            "x": 51,
            "y": 344.28125,
            "normalizedX": 0.102,
            "normalizedY": 0.6885625,
            "t": 1652540734230,
            "normalizedT": 295
        },
        {
            "x": 52,
            "y": 344.28125,
            "normalizedX": 0.104,
            "normalizedY": 0.6885625,
            "t": 1652540734238,
            "normalizedT": 303
        },
        {
            "x": 54,
            "y": 342.28125,
            "normalizedX": 0.108,
            "normalizedY": 0.6845625,
            "t": 1652540734246,
            "normalizedT": 311
        },
        {
            "x": 56,
            "y": 340.28125,
            "normalizedX": 0.112,
            "normalizedY": 0.6805625,
            "t": 1652540734262,
            "normalizedT": 327
        },
        {
            "x": 58,
            "y": 338.28125,
            "normalizedX": 0.116,
            "normalizedY": 0.6765625,
            "t": 1652540734270,
            "normalizedT": 335
        },
        {
            "x": 60,
            "y": 337.28125,
            "normalizedX": 0.12,
            "normalizedY": 0.6745625,
            "t": 1652540734278,
            "normalizedT": 343
        },
        {
            "x": 62,
            "y": 334.28125,
            "normalizedX": 0.124,
            "normalizedY": 0.6685625,
            "t": 1652540734286,
            "normalizedT": 351
        },
        {
            "x": 64,
            "y": 333.28125,
            "normalizedX": 0.128,
            "normalizedY": 0.6665625,
            "t": 1652540734294,
            "normalizedT": 359
        },
        {
            "x": 66,
            "y": 331.28125,
            "normalizedX": 0.132,
            "normalizedY": 0.6625625,
            "t": 1652540734302,
            "normalizedT": 367
        },
        {
            "x": 68,
            "y": 330.28125,
            "normalizedX": 0.136,
            "normalizedY": 0.6605625,
            "t": 1652540734312,
            "normalizedT": 377
        },
        {
            "x": 70,
            "y": 328.28125,
            "normalizedX": 0.14,
            "normalizedY": 0.6565625,
            "t": 1652540734320,
            "normalizedT": 385
        },
        {
            "x": 72,
            "y": 326.28125,
            "normalizedX": 0.144,
            "normalizedY": 0.6525625,
            "t": 1652540734328,
            "normalizedT": 393
        },
        {
            "x": 73,
            "y": 325.28125,
            "normalizedX": 0.146,
            "normalizedY": 0.6505625,
            "t": 1652540734336,
            "normalizedT": 401
        },
        {
            "x": 74,
            "y": 324.28125,
            "normalizedX": 0.148,
            "normalizedY": 0.6485625,
            "t": 1652540734344,
            "normalizedT": 409
        },
        {
            "x": 76,
            "y": 324.28125,
            "normalizedX": 0.152,
            "normalizedY": 0.6485625,
            "t": 1652540734360,
            "normalizedT": 425
        },
        {
            "x": 78,
            "y": 322.28125,
            "normalizedX": 0.156,
            "normalizedY": 0.6445625,
            "t": 1652540734368,
            "normalizedT": 433
        },
        {
            "x": 80,
            "y": 322.28125,
            "normalizedX": 0.16,
            "normalizedY": 0.6445625,
            "t": 1652540734376,
            "normalizedT": 441
        },
        {
            "x": 80,
            "y": 320.28125,
            "normalizedX": 0.16,
            "normalizedY": 0.6405625,
            "t": 1652540734384,
            "normalizedT": 449
        },
        {
            "x": 82,
            "y": 320.28125,
            "normalizedX": 0.164,
            "normalizedY": 0.6405625,
            "t": 1652540734392,
            "normalizedT": 457
        },
        {
            "x": 83,
            "y": 319.28125,
            "normalizedX": 0.166,
            "normalizedY": 0.6385625,
            "t": 1652540734400,
            "normalizedT": 465
        },
        {
            "x": 84,
            "y": 318.28125,
            "normalizedX": 0.168,
            "normalizedY": 0.6365625,
            "t": 1652540734408,
            "normalizedT": 473
        },
        {
            "x": 86,
            "y": 318.28125,
            "normalizedX": 0.172,
            "normalizedY": 0.6365625,
            "t": 1652540734424,
            "normalizedT": 489
        },
        {
            "x": 87,
            "y": 317.28125,
            "normalizedX": 0.174,
            "normalizedY": 0.6345625,
            "t": 1652540734432,
            "normalizedT": 497
        },
        {
            "x": 88,
            "y": 316.28125,
            "normalizedX": 0.176,
            "normalizedY": 0.6325625,
            "t": 1652540734440,
            "normalizedT": 505
        },
        {
            "x": 90,
            "y": 315.28125,
            "normalizedX": 0.18,
            "normalizedY": 0.6305625,
            "t": 1652540734448,
            "normalizedT": 513
        },
        {
            "x": 93,
            "y": 314.28125,
            "normalizedX": 0.186,
            "normalizedY": 0.6285625,
            "t": 1652540734456,
            "normalizedT": 521
        },
        {
            "x": 94,
            "y": 313.28125,
            "normalizedX": 0.188,
            "normalizedY": 0.6265625,
            "t": 1652540734464,
            "normalizedT": 529
        },
        {
            "x": 96,
            "y": 312.28125,
            "normalizedX": 0.192,
            "normalizedY": 0.6245625,
            "t": 1652540734480,
            "normalizedT": 545
        },
        {
            "x": 98,
            "y": 312.28125,
            "normalizedX": 0.196,
            "normalizedY": 0.6245625,
            "t": 1652540734488,
            "normalizedT": 553
        },
        {
            "x": 100,
            "y": 311.28125,
            "normalizedX": 0.2,
            "normalizedY": 0.6225625,
            "t": 1652540734496,
            "normalizedT": 561
        },
        {
            "x": 102,
            "y": 310.28125,
            "normalizedX": 0.204,
            "normalizedY": 0.6205625,
            "t": 1652540734504,
            "normalizedT": 569
        },
        {
            "x": 104,
            "y": 309.28125,
            "normalizedX": 0.208,
            "normalizedY": 0.6185625,
            "t": 1652540734512,
            "normalizedT": 577
        },
        {
            "x": 106,
            "y": 308.28125,
            "normalizedX": 0.212,
            "normalizedY": 0.6165625,
            "t": 1652540734528,
            "normalizedT": 593
        },
        {
            "x": 107,
            "y": 308.28125,
            "normalizedX": 0.214,
            "normalizedY": 0.6165625,
            "t": 1652540734536,
            "normalizedT": 601
        },
        {
            "x": 109,
            "y": 306.28125,
            "normalizedX": 0.218,
            "normalizedY": 0.6125625,
            "t": 1652540734544,
            "normalizedT": 609
        },
        {
            "x": 112,
            "y": 305.28125,
            "normalizedX": 0.224,
            "normalizedY": 0.6105625,
            "t": 1652540734552,
            "normalizedT": 617
        },
        {
            "x": 113,
            "y": 304.28125,
            "normalizedX": 0.226,
            "normalizedY": 0.6085625,
            "t": 1652540734568,
            "normalizedT": 633
        },
        {
            "x": 115,
            "y": 302.28125,
            "normalizedX": 0.23,
            "normalizedY": 0.6045625,
            "t": 1652540734576,
            "normalizedT": 641
        },
        {
            "x": 118,
            "y": 300.28125,
            "normalizedX": 0.236,
            "normalizedY": 0.6005625,
            "t": 1652540734586,
            "normalizedT": 651
        },
        {
            "x": 121,
            "y": 298.28125,
            "normalizedX": 0.242,
            "normalizedY": 0.5965625,
            "t": 1652540734594,
            "normalizedT": 659
        },
        {
            "x": 123,
            "y": 297.28125,
            "normalizedX": 0.246,
            "normalizedY": 0.5945625,
            "t": 1652540734602,
            "normalizedT": 667
        },
        {
            "x": 124,
            "y": 296.28125,
            "normalizedX": 0.248,
            "normalizedY": 0.5925625,
            "t": 1652540734618,
            "normalizedT": 683
        },
        {
            "x": 126,
            "y": 294.28125,
            "normalizedX": 0.252,
            "normalizedY": 0.5885625,
            "t": 1652540734626,
            "normalizedT": 691
        },
        {
            "x": 128,
            "y": 292.28125,
            "normalizedX": 0.256,
            "normalizedY": 0.5845625,
            "t": 1652540734634,
            "normalizedT": 699
        },
        {
            "x": 130,
            "y": 290.28125,
            "normalizedX": 0.26,
            "normalizedY": 0.5805625,
            "t": 1652540734650,
            "normalizedT": 715
        },
        {
            "x": 132,
            "y": 289.28125,
            "normalizedX": 0.264,
            "normalizedY": 0.5785625,
            "t": 1652540734658,
            "normalizedT": 723
        },
        {
            "x": 133,
            "y": 287.28125,
            "normalizedX": 0.266,
            "normalizedY": 0.5745625,
            "t": 1652540734666,
            "normalizedT": 731
        },
        {
            "x": 134,
            "y": 286.28125,
            "normalizedX": 0.268,
            "normalizedY": 0.5725625,
            "t": 1652540734674,
            "normalizedT": 739
        },
        {
            "x": 136,
            "y": 284.28125,
            "normalizedX": 0.272,
            "normalizedY": 0.5685625,
            "t": 1652540734690,
            "normalizedT": 755
        },
        {
            "x": 138,
            "y": 282.28125,
            "normalizedX": 0.276,
            "normalizedY": 0.5645625,
            "t": 1652540734698,
            "normalizedT": 763
        },
        {
            "x": 140,
            "y": 280.28125,
            "normalizedX": 0.28,
            "normalizedY": 0.5605625,
            "t": 1652540734706,
            "normalizedT": 771
        },
        {
            "x": 142,
            "y": 276.28125,
            "normalizedX": 0.284,
            "normalizedY": 0.5525625,
            "t": 1652540734722,
            "normalizedT": 787
        },
        {
            "x": 144,
            "y": 274.28125,
            "normalizedX": 0.288,
            "normalizedY": 0.5485625,
            "t": 1652540734730,
            "normalizedT": 795
        },
        {
            "x": 146,
            "y": 272.28125,
            "normalizedX": 0.292,
            "normalizedY": 0.5445625,
            "t": 1652540734738,
            "normalizedT": 803
        },
        {
            "x": 148,
            "y": 270.28125,
            "normalizedX": 0.296,
            "normalizedY": 0.5405625,
            "t": 1652540734754,
            "normalizedT": 819
        },
        {
            "x": 148,
            "y": 268.28125,
            "normalizedX": 0.296,
            "normalizedY": 0.5365625,
            "t": 1652540734763,
            "normalizedT": 828
        },
        {
            "x": 150,
            "y": 266.28125,
            "normalizedX": 0.3,
            "normalizedY": 0.5325625,
            "t": 1652540734770,
            "normalizedT": 835
        },
        {
            "x": 151,
            "y": 263.28125,
            "normalizedX": 0.302,
            "normalizedY": 0.5265625,
            "t": 1652540734778,
            "normalizedT": 843
        },
        {
            "x": 153,
            "y": 260.28125,
            "normalizedX": 0.306,
            "normalizedY": 0.5205625,
            "t": 1652540734794,
            "normalizedT": 859
        },
        {
            "x": 154,
            "y": 256.28125,
            "normalizedX": 0.308,
            "normalizedY": 0.5125625,
            "t": 1652540734802,
            "normalizedT": 867
        },
        {
            "x": 156,
            "y": 252.28125,
            "normalizedX": 0.312,
            "normalizedY": 0.5045625,
            "t": 1652540734818,
            "normalizedT": 883
        },
        {
            "x": 159,
            "y": 248.28125,
            "normalizedX": 0.318,
            "normalizedY": 0.4965625,
            "t": 1652540734826,
            "normalizedT": 891
        },
        {
            "x": 162,
            "y": 243.28125,
            "normalizedX": 0.324,
            "normalizedY": 0.4865625,
            "t": 1652540734836,
            "normalizedT": 901
        },
        {
            "x": 165,
            "y": 238.28125,
            "normalizedX": 0.33,
            "normalizedY": 0.4765625,
            "t": 1652540734850,
            "normalizedT": 915
        },
        {
            "x": 166,
            "y": 234.28125,
            "normalizedX": 0.332,
            "normalizedY": 0.4685625,
            "t": 1652540734858,
            "normalizedT": 923
        },
        {
            "x": 168,
            "y": 229.28125,
            "normalizedX": 0.336,
            "normalizedY": 0.4585625,
            "t": 1652540734868,
            "normalizedT": 933
        },
        {
            "x": 170,
            "y": 226.28125,
            "normalizedX": 0.34,
            "normalizedY": 0.4525625,
            "t": 1652540734884,
            "normalizedT": 949
        },
        {
            "x": 172,
            "y": 222.28125,
            "normalizedX": 0.344,
            "normalizedY": 0.4445625,
            "t": 1652540734892,
            "normalizedT": 957
        },
        {
            "x": 174,
            "y": 219.28125,
            "normalizedX": 0.348,
            "normalizedY": 0.4385625,
            "t": 1652540734900,
            "normalizedT": 965
        },
        {
            "x": 175,
            "y": 214.28125,
            "normalizedX": 0.35,
            "normalizedY": 0.4285625,
            "t": 1652540734917,
            "normalizedT": 982
        },
        {
            "x": 176,
            "y": 212.28125,
            "normalizedX": 0.352,
            "normalizedY": 0.4245625,
            "t": 1652540734924,
            "normalizedT": 989
        },
        {
            "x": 178,
            "y": 208.28125,
            "normalizedX": 0.356,
            "normalizedY": 0.4165625,
            "t": 1652540734932,
            "normalizedT": 997
        },
        {
            "x": 178,
            "y": 205.28125,
            "normalizedX": 0.356,
            "normalizedY": 0.4105625,
            "t": 1652540734940,
            "normalizedT": 1005
        },
        {
            "x": 180,
            "y": 202.28125,
            "normalizedX": 0.36,
            "normalizedY": 0.4045625,
            "t": 1652540734948,
            "normalizedT": 1013
        },
        {
            "x": 181,
            "y": 199.28125,
            "normalizedX": 0.362,
            "normalizedY": 0.3985625,
            "t": 1652540734956,
            "normalizedT": 1021
        },
        {
            "x": 182,
            "y": 196.28125,
            "normalizedX": 0.364,
            "normalizedY": 0.3925625,
            "t": 1652540734964,
            "normalizedT": 1029
        },
        {
            "x": 183,
            "y": 191.28125,
            "normalizedX": 0.366,
            "normalizedY": 0.3825625,
            "t": 1652540734980,
            "normalizedT": 1045
        },
        {
            "x": 185,
            "y": 188.28125,
            "normalizedX": 0.37,
            "normalizedY": 0.3765625,
            "t": 1652540734988,
            "normalizedT": 1053
        },
        {
            "x": 186,
            "y": 185.28125,
            "normalizedX": 0.372,
            "normalizedY": 0.3705625,
            "t": 1652540734996,
            "normalizedT": 1061
        },
        {
            "x": 188,
            "y": 182.28125,
            "normalizedX": 0.376,
            "normalizedY": 0.3645625,
            "t": 1652540735004,
            "normalizedT": 1069
        },
        {
            "x": 189,
            "y": 177.28125,
            "normalizedX": 0.378,
            "normalizedY": 0.3545625,
            "t": 1652540735012,
            "normalizedT": 1077
        },
        {
            "x": 190,
            "y": 174.28125,
            "normalizedX": 0.38,
            "normalizedY": 0.3485625,
            "t": 1652540735028,
            "normalizedT": 1093
        },
        {
            "x": 192,
            "y": 170.28125,
            "normalizedX": 0.384,
            "normalizedY": 0.3405625,
            "t": 1652540735036,
            "normalizedT": 1101
        },
        {
            "x": 194,
            "y": 166.28125,
            "normalizedX": 0.388,
            "normalizedY": 0.3325625,
            "t": 1652540735044,
            "normalizedT": 1109
        },
        {
            "x": 195,
            "y": 162.28125,
            "normalizedX": 0.39,
            "normalizedY": 0.3245625,
            "t": 1652540735052,
            "normalizedT": 1117
        },
        {
            "x": 197,
            "y": 157.28125,
            "normalizedX": 0.394,
            "normalizedY": 0.3145625,
            "t": 1652540735060,
            "normalizedT": 1125
        },
        {
            "x": 199,
            "y": 152.28125,
            "normalizedX": 0.398,
            "normalizedY": 0.3045625,
            "t": 1652540735076,
            "normalizedT": 1141
        },
        {
            "x": 200,
            "y": 148.28125,
            "normalizedX": 0.4,
            "normalizedY": 0.2965625,
            "t": 1652540735084,
            "normalizedT": 1149
        },
        {
            "x": 202,
            "y": 144.28125,
            "normalizedX": 0.404,
            "normalizedY": 0.2885625,
            "t": 1652540735092,
            "normalizedT": 1157
        },
        {
            "x": 202,
            "y": 140.28125,
            "normalizedX": 0.404,
            "normalizedY": 0.2805625,
            "t": 1652540735100,
            "normalizedT": 1165
        },
        {
            "x": 204,
            "y": 136.28125,
            "normalizedX": 0.408,
            "normalizedY": 0.2725625,
            "t": 1652540735108,
            "normalizedT": 1173
        },
        {
            "x": 206,
            "y": 132.28125,
            "normalizedX": 0.412,
            "normalizedY": 0.2645625,
            "t": 1652540735124,
            "normalizedT": 1189
        },
        {
            "x": 206,
            "y": 130.28125,
            "normalizedX": 0.412,
            "normalizedY": 0.2605625,
            "t": 1652540735132,
            "normalizedT": 1197
        },
        {
            "x": 208,
            "y": 127.28125,
            "normalizedX": 0.416,
            "normalizedY": 0.2545625,
            "t": 1652540735140,
            "normalizedT": 1205
        },
        {
            "x": 209,
            "y": 125.28125,
            "normalizedX": 0.418,
            "normalizedY": 0.2505625,
            "t": 1652540735148,
            "normalizedT": 1213
        },
        {
            "x": 210,
            "y": 123.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.2465625,
            "t": 1652540735166,
            "normalizedT": 1231
        },
        {
            "x": 211,
            "y": 120.28125,
            "normalizedX": 0.422,
            "normalizedY": 0.2405625,
            "t": 1652540735172,
            "normalizedT": 1237
        },
        {
            "x": 212,
            "y": 118.28125,
            "normalizedX": 0.424,
            "normalizedY": 0.2365625,
            "t": 1652540735182,
            "normalizedT": 1247
        },
        {
            "x": 214,
            "y": 114.28125,
            "normalizedX": 0.428,
            "normalizedY": 0.2285625,
            "t": 1652540735190,
            "normalizedT": 1255
        },
        {
            "x": 215,
            "y": 113.28125,
            "normalizedX": 0.43,
            "normalizedY": 0.2265625,
            "t": 1652540735198,
            "normalizedT": 1263
        },
        {
            "x": 216,
            "y": 111.28125,
            "normalizedX": 0.432,
            "normalizedY": 0.2225625,
            "t": 1652540735206,
            "normalizedT": 1271
        },
        {
            "x": 217,
            "y": 110.28125,
            "normalizedX": 0.434,
            "normalizedY": 0.2205625,
            "t": 1652540735214,
            "normalizedT": 1279
        },
        {
            "x": 217,
            "y": 110.28125,
            "normalizedX": 0.434,
            "normalizedY": 0.2205625,
            "t": 1652540735222,
            "normalizedT": 1287
        },
        {
            "x": 218,
            "y": 109.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.2185625,
            "t": 1652540735230,
            "normalizedT": 1295
        },
        {
            "x": 218,
            "y": 108.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.2165625,
            "t": 1652540735238,
            "normalizedT": 1303
        },
        {
            "x": 218,
            "y": 108.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.2165625,
            "t": 1652540735246,
            "normalizedT": 1311
        },
        {
            "x": 218,
            "y": 108.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.2165625,
            "t": 1652540735254,
            "normalizedT": 1319
        },
        {
            "x": 218,
            "y": 107.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.2145625,
            "t": 1652540735262,
            "normalizedT": 1327
        },
        {
            "x": 219,
            "y": 106.28125,
            "normalizedX": 0.438,
            "normalizedY": 0.2125625,
            "t": 1652540735278,
            "normalizedT": 1343
        },
        {
            "x": 220,
            "y": 106.28125,
            "normalizedX": 0.44,
            "normalizedY": 0.2125625,
            "t": 1652540735286,
            "normalizedT": 1351
        },
        {
            "x": 220,
            "y": 105.28125,
            "normalizedX": 0.44,
            "normalizedY": 0.2105625,
            "t": 1652540735294,
            "normalizedT": 1359
        },
        {
            "x": 221,
            "y": 104.28125,
            "normalizedX": 0.442,
            "normalizedY": 0.2085625,
            "t": 1652540735302,
            "normalizedT": 1367
        },
        {
            "x": 222,
            "y": 104.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.2085625,
            "t": 1652540735310,
            "normalizedT": 1375
        },
        {
            "x": 222,
            "y": 103.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.2065625,
            "t": 1652540735318,
            "normalizedT": 1383
        },
        {
            "x": 222,
            "y": 102.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.2045625,
            "t": 1652540735326,
            "normalizedT": 1391
        },
        {
            "x": 223,
            "y": 102.28125,
            "normalizedX": 0.446,
            "normalizedY": 0.2045625,
            "t": 1652540735334,
            "normalizedT": 1399
        },
        {
            "x": 224,
            "y": 102.28125,
            "normalizedX": 0.448,
            "normalizedY": 0.2045625,
            "t": 1652540735342,
            "normalizedT": 1407
        },
        {
            "x": 224,
            "y": 102.28125,
            "normalizedX": 0.448,
            "normalizedY": 0.2045625,
            "t": 1652540735350,
            "normalizedT": 1415
        },
        {
            "x": 225,
            "y": 101.28125,
            "normalizedX": 0.45,
            "normalizedY": 0.2025625,
            "t": 1652540735358,
            "normalizedT": 1423
        },
        {
            "x": 225,
            "y": 100.28125,
            "normalizedX": 0.45,
            "normalizedY": 0.2005625,
            "t": 1652540735366,
            "normalizedT": 1431
        },
        {
            "x": 226,
            "y": 100.28125,
            "normalizedX": 0.452,
            "normalizedY": 0.2005625,
            "t": 1652540735374,
            "normalizedT": 1439
        },
        {
            "x": 226,
            "y": 100.28125,
            "normalizedX": 0.452,
            "normalizedY": 0.2005625,
            "t": 1652540735382,
            "normalizedT": 1447
        },
        {
            "x": 226,
            "y": 99.28125,
            "normalizedX": 0.452,
            "normalizedY": 0.1985625,
            "t": 1652540735390,
            "normalizedT": 1455
        },
        {
            "x": 227,
            "y": 98.28125,
            "normalizedX": 0.454,
            "normalizedY": 0.1965625,
            "t": 1652540735398,
            "normalizedT": 1463
        },
        {
            "x": 228,
            "y": 98.28125,
            "normalizedX": 0.456,
            "normalizedY": 0.1965625,
            "t": 1652540735406,
            "normalizedT": 1471
        },
        {
            "x": 228,
            "y": 98.28125,
            "normalizedX": 0.456,
            "normalizedY": 0.1965625,
            "t": 1652540735414,
            "normalizedT": 1479
        },
        {
            "x": 229,
            "y": 98.28125,
            "normalizedX": 0.458,
            "normalizedY": 0.1965625,
            "t": 1652540735422,
            "normalizedT": 1487
        },
        {
            "x": 230,
            "y": 97.28125,
            "normalizedX": 0.46,
            "normalizedY": 0.1945625,
            "t": 1652540735430,
            "normalizedT": 1495
        },
        {
            "x": 230,
            "y": 96.28125,
            "normalizedX": 0.46,
            "normalizedY": 0.1925625,
            "t": 1652540735448,
            "normalizedT": 1513
        },
        {
            "x": 231,
            "y": 96.28125,
            "normalizedX": 0.462,
            "normalizedY": 0.1925625,
            "t": 1652540735462,
            "normalizedT": 1527
        },
        {
            "x": 232,
            "y": 95.28125,
            "normalizedX": 0.464,
            "normalizedY": 0.1905625,
            "t": 1652540735472,
            "normalizedT": 1537
        },
        {
            "x": 232,
            "y": 95.28125,
            "normalizedX": 0.464,
            "normalizedY": 0.1905625,
            "t": 1652540735480,
            "normalizedT": 1545
        },
        {
            "x": 234,
            "y": 94.28125,
            "normalizedX": 0.468,
            "normalizedY": 0.1885625,
            "t": 1652540735488,
            "normalizedT": 1553
        },
        {
            "x": 234,
            "y": 94.28125,
            "normalizedX": 0.468,
            "normalizedY": 0.1885625,
            "t": 1652540735496,
            "normalizedT": 1561
        },
        {
            "x": 235,
            "y": 94.28125,
            "normalizedX": 0.47,
            "normalizedY": 0.1885625,
            "t": 1652540735504,
            "normalizedT": 1569
        },
        {
            "x": 236,
            "y": 93.28125,
            "normalizedX": 0.472,
            "normalizedY": 0.1865625,
            "t": 1652540735512,
            "normalizedT": 1577
        },
        {
            "x": 236,
            "y": 92.28125,
            "normalizedX": 0.472,
            "normalizedY": 0.1845625,
            "t": 1652540735520,
            "normalizedT": 1585
        },
        {
            "x": 237,
            "y": 92.28125,
            "normalizedX": 0.474,
            "normalizedY": 0.1845625,
            "t": 1652540735528,
            "normalizedT": 1593
        },
        {
            "x": 238,
            "y": 92.28125,
            "normalizedX": 0.476,
            "normalizedY": 0.1845625,
            "t": 1652540735536,
            "normalizedT": 1601
        },
        {
            "x": 238,
            "y": 91.28125,
            "normalizedX": 0.476,
            "normalizedY": 0.1825625,
            "t": 1652540735544,
            "normalizedT": 1609
        },
        {
            "x": 239,
            "y": 90.28125,
            "normalizedX": 0.478,
            "normalizedY": 0.1805625,
            "t": 1652540735552,
            "normalizedT": 1617
        },
        {
            "x": 240,
            "y": 90.28125,
            "normalizedX": 0.48,
            "normalizedY": 0.1805625,
            "t": 1652540735560,
            "normalizedT": 1625
        },
        {
            "x": 241,
            "y": 90.28125,
            "normalizedX": 0.482,
            "normalizedY": 0.1805625,
            "t": 1652540735576,
            "normalizedT": 1641
        },
        {
            "x": 242,
            "y": 89.28125,
            "normalizedX": 0.484,
            "normalizedY": 0.1785625,
            "t": 1652540735584,
            "normalizedT": 1649
        },
        {
            "x": 242,
            "y": 88.28125,
            "normalizedX": 0.484,
            "normalizedY": 0.1765625,
            "t": 1652540735592,
            "normalizedT": 1657
        },
        {
            "x": 243,
            "y": 88.28125,
            "normalizedX": 0.486,
            "normalizedY": 0.1765625,
            "t": 1652540735600,
            "normalizedT": 1665
        },
        {
            "x": 244,
            "y": 88.28125,
            "normalizedX": 0.488,
            "normalizedY": 0.1765625,
            "t": 1652540735608,
            "normalizedT": 1673
        },
        {
            "x": 244,
            "y": 87.28125,
            "normalizedX": 0.488,
            "normalizedY": 0.1745625,
            "t": 1652540735616,
            "normalizedT": 1681
        },
        {
            "x": 245,
            "y": 86.28125,
            "normalizedX": 0.49,
            "normalizedY": 0.1725625,
            "t": 1652540735632,
            "normalizedT": 1697
        },
        {
            "x": 246,
            "y": 86.28125,
            "normalizedX": 0.492,
            "normalizedY": 0.1725625,
            "t": 1652540735640,
            "normalizedT": 1705
        },
        {
            "x": 247,
            "y": 86.28125,
            "normalizedX": 0.494,
            "normalizedY": 0.1725625,
            "t": 1652540735648,
            "normalizedT": 1713
        },
        {
            "x": 248,
            "y": 85.28125,
            "normalizedX": 0.496,
            "normalizedY": 0.1705625,
            "t": 1652540735656,
            "normalizedT": 1721
        },
        {
            "x": 248,
            "y": 85.28125,
            "normalizedX": 0.496,
            "normalizedY": 0.1705625,
            "t": 1652540735664,
            "normalizedT": 1729
        },
        {
            "x": 249,
            "y": 84.28125,
            "normalizedX": 0.498,
            "normalizedY": 0.1685625,
            "t": 1652540735672,
            "normalizedT": 1737
        },
        {
            "x": 249,
            "y": 84.28125,
            "normalizedX": 0.498,
            "normalizedY": 0.1685625,
            "t": 1652540735688,
            "normalizedT": 1753
        },
        {
            "x": 250,
            "y": 84.28125,
            "normalizedX": 0.5,
            "normalizedY": 0.1685625,
            "t": 1652540735696,
            "normalizedT": 1761
        },
        {
            "x": 250,
            "y": 83.28125,
            "normalizedX": 0.5,
            "normalizedY": 0.1665625,
            "t": 1652540735704,
            "normalizedT": 1769
        },
        {
            "x": 250,
            "y": 83.28125,
            "normalizedX": 0.5,
            "normalizedY": 0.1665625,
            "t": 1652540735714,
            "normalizedT": 1779
        },
        {
            "x": 251,
            "y": 82.28125,
            "normalizedX": 0.502,
            "normalizedY": 0.1645625,
            "t": 1652540735722,
            "normalizedT": 1787
        },
        {
            "x": 252,
            "y": 82.28125,
            "normalizedX": 0.504,
            "normalizedY": 0.1645625,
            "t": 1652540735736,
            "normalizedT": 1801
        },
        {
            "x": 253,
            "y": 81.28125,
            "normalizedX": 0.506,
            "normalizedY": 0.1625625,
            "t": 1652540735746,
            "normalizedT": 1811
        },
        {
            "x": 254,
            "y": 81.28125,
            "normalizedX": 0.508,
            "normalizedY": 0.1625625,
            "t": 1652540735754,
            "normalizedT": 1819
        },
        {
            "x": 254,
            "y": 80.28125,
            "normalizedX": 0.508,
            "normalizedY": 0.1605625,
            "t": 1652540735762,
            "normalizedT": 1827
        },
        {
            "x": 255,
            "y": 80.28125,
            "normalizedX": 0.51,
            "normalizedY": 0.1605625,
            "t": 1652540735770,
            "normalizedT": 1835
        },
        {
            "x": 256,
            "y": 80.28125,
            "normalizedX": 0.512,
            "normalizedY": 0.1605625,
            "t": 1652540735778,
            "normalizedT": 1843
        },
        {
            "x": 257,
            "y": 78.28125,
            "normalizedX": 0.514,
            "normalizedY": 0.1565625,
            "t": 1652540735786,
            "normalizedT": 1851
        },
        {
            "x": 258,
            "y": 78.28125,
            "normalizedX": 0.516,
            "normalizedY": 0.1565625,
            "t": 1652540735794,
            "normalizedT": 1859
        },
        {
            "x": 259,
            "y": 77.28125,
            "normalizedX": 0.518,
            "normalizedY": 0.1545625,
            "t": 1652540735802,
            "normalizedT": 1867
        },
        {
            "x": 260,
            "y": 77.28125,
            "normalizedX": 0.52,
            "normalizedY": 0.1545625,
            "t": 1652540735810,
            "normalizedT": 1875
        },
        {
            "x": 260,
            "y": 76.28125,
            "normalizedX": 0.52,
            "normalizedY": 0.1525625,
            "t": 1652540735818,
            "normalizedT": 1883
        },
        {
            "x": 261,
            "y": 76.28125,
            "normalizedX": 0.522,
            "normalizedY": 0.1525625,
            "t": 1652540735826,
            "normalizedT": 1891
        },
        {
            "x": 262,
            "y": 75.28125,
            "normalizedX": 0.524,
            "normalizedY": 0.1505625,
            "t": 1652540735850,
            "normalizedT": 1915
        },
        {
            "x": 262,
            "y": 74.28125,
            "normalizedX": 0.524,
            "normalizedY": 0.1485625,
            "t": 1652540735858,
            "normalizedT": 1923
        },
        {
            "x": 263,
            "y": 74.28125,
            "normalizedX": 0.526,
            "normalizedY": 0.1485625,
            "t": 1652540735866,
            "normalizedT": 1931
        },
        {
            "x": 264,
            "y": 74.28125,
            "normalizedX": 0.528,
            "normalizedY": 0.1485625,
            "t": 1652540735874,
            "normalizedT": 1939
        },
        {
            "x": 264,
            "y": 73.28125,
            "normalizedX": 0.528,
            "normalizedY": 0.1465625,
            "t": 1652540735882,
            "normalizedT": 1947
        },
        {
            "x": 265,
            "y": 73.28125,
            "normalizedX": 0.53,
            "normalizedY": 0.1465625,
            "t": 1652540735890,
            "normalizedT": 1955
        },
        {
            "x": 266,
            "y": 72.28125,
            "normalizedX": 0.532,
            "normalizedY": 0.1445625,
            "t": 1652540735898,
            "normalizedT": 1963
        },
        {
            "x": 266,
            "y": 72.28125,
            "normalizedX": 0.532,
            "normalizedY": 0.1445625,
            "t": 1652540735914,
            "normalizedT": 1979
        },
        {
            "x": 266,
            "y": 71.28125,
            "normalizedX": 0.532,
            "normalizedY": 0.1425625,
            "t": 1652540735922,
            "normalizedT": 1987
        },
        {
            "x": 268,
            "y": 70.28125,
            "normalizedX": 0.536,
            "normalizedY": 0.1405625,
            "t": 1652540735930,
            "normalizedT": 1995
        },
        {
            "x": 268,
            "y": 70.28125,
            "normalizedX": 0.536,
            "normalizedY": 0.1405625,
            "t": 1652540735938,
            "normalizedT": 2003
        },
        {
            "x": 270,
            "y": 70.28125,
            "normalizedX": 0.54,
            "normalizedY": 0.1405625,
            "t": 1652540735946,
            "normalizedT": 2011
        },
        {
            "x": 270,
            "y": 69.28125,
            "normalizedX": 0.54,
            "normalizedY": 0.1385625,
            "t": 1652540735954,
            "normalizedT": 2019
        },
        {
            "x": 272,
            "y": 68.28125,
            "normalizedX": 0.544,
            "normalizedY": 0.1365625,
            "t": 1652540735970,
            "normalizedT": 2035
        },
        {
            "x": 273,
            "y": 67.28125,
            "normalizedX": 0.546,
            "normalizedY": 0.1345625,
            "t": 1652540735978,
            "normalizedT": 2043
        },
        {
            "x": 274,
            "y": 66.28125,
            "normalizedX": 0.548,
            "normalizedY": 0.1325625,
            "t": 1652540735986,
            "normalizedT": 2051
        },
        {
            "x": 275,
            "y": 65.28125,
            "normalizedX": 0.55,
            "normalizedY": 0.1305625,
            "t": 1652540735994,
            "normalizedT": 2059
        },
        {
            "x": 276,
            "y": 64.28125,
            "normalizedX": 0.552,
            "normalizedY": 0.1285625,
            "t": 1652540736004,
            "normalizedT": 2069
        },
        {
            "x": 277,
            "y": 62.28125,
            "normalizedX": 0.554,
            "normalizedY": 0.1245625,
            "t": 1652540736018,
            "normalizedT": 2083
        },
        {
            "x": 278,
            "y": 60.28125,
            "normalizedX": 0.556,
            "normalizedY": 0.1205625,
            "t": 1652540736028,
            "normalizedT": 2093
        },
        {
            "x": 281,
            "y": 58.28125,
            "normalizedX": 0.562,
            "normalizedY": 0.1165625,
            "t": 1652540736036,
            "normalizedT": 2101
        },
        {
            "x": 282,
            "y": 56.28125,
            "normalizedX": 0.564,
            "normalizedY": 0.1125625,
            "t": 1652540736044,
            "normalizedT": 2109
        },
        {
            "x": 284,
            "y": 54.28125,
            "normalizedX": 0.568,
            "normalizedY": 0.1085625,
            "t": 1652540736052,
            "normalizedT": 2117
        },
        {
            "x": 285,
            "y": 53.28125,
            "normalizedX": 0.57,
            "normalizedY": 0.1065625,
            "t": 1652540736060,
            "normalizedT": 2125
        },
        {
            "x": 286,
            "y": 52.28125,
            "normalizedX": 0.572,
            "normalizedY": 0.1045625,
            "t": 1652540736068,
            "normalizedT": 2133
        },
        {
            "x": 287,
            "y": 50.28125,
            "normalizedX": 0.574,
            "normalizedY": 0.1005625,
            "t": 1652540736076,
            "normalizedT": 2141
        },
        {
            "x": 288,
            "y": 49.28125,
            "normalizedX": 0.576,
            "normalizedY": 0.0985625,
            "t": 1652540736084,
            "normalizedT": 2149
        },
        {
            "x": 288,
            "y": 48.28125,
            "normalizedX": 0.576,
            "normalizedY": 0.0965625,
            "t": 1652540736092,
            "normalizedT": 2157
        },
        {
            "x": 289,
            "y": 46.28125,
            "normalizedX": 0.578,
            "normalizedY": 0.0925625,
            "t": 1652540736100,
            "normalizedT": 2165
        },
        {
            "x": 290,
            "y": 46.28125,
            "normalizedX": 0.58,
            "normalizedY": 0.0925625,
            "t": 1652540736108,
            "normalizedT": 2173
        },
        {
            "x": 291,
            "y": 44.28125,
            "normalizedX": 0.582,
            "normalizedY": 0.0885625,
            "t": 1652540736116,
            "normalizedT": 2181
        },
        {
            "x": 292,
            "y": 43.28125,
            "normalizedX": 0.584,
            "normalizedY": 0.0865625,
            "t": 1652540736125,
            "normalizedT": 2190
        },
        {
            "x": 292,
            "y": 42.28125,
            "normalizedX": 0.584,
            "normalizedY": 0.0845625,
            "t": 1652540736132,
            "normalizedT": 2197
        },
        {
            "x": 292,
            "y": 41.28125,
            "normalizedX": 0.584,
            "normalizedY": 0.0825625,
            "t": 1652540736140,
            "normalizedT": 2205
        },
        {
            "x": 293,
            "y": 40.28125,
            "normalizedX": 0.586,
            "normalizedY": 0.0805625,
            "t": 1652540736148,
            "normalizedT": 2213
        },
        {
            "x": 294,
            "y": 39.28125,
            "normalizedX": 0.588,
            "normalizedY": 0.0785625,
            "t": 1652540736156,
            "normalizedT": 2221
        },
        {
            "x": 294,
            "y": 38.28125,
            "normalizedX": 0.588,
            "normalizedY": 0.0765625,
            "t": 1652540736164,
            "normalizedT": 2229
        },
        {
            "x": 295,
            "y": 37.28125,
            "normalizedX": 0.59,
            "normalizedY": 0.0745625,
            "t": 1652540736172,
            "normalizedT": 2237
        },
        {
            "x": 296,
            "y": 36.28125,
            "normalizedX": 0.592,
            "normalizedY": 0.0725625,
            "t": 1652540736180,
            "normalizedT": 2245
        },
        {
            "x": 296,
            "y": 35.28125,
            "normalizedX": 0.592,
            "normalizedY": 0.0705625,
            "t": 1652540736188,
            "normalizedT": 2253
        },
        {
            "x": 296,
            "y": 34.28125,
            "normalizedX": 0.592,
            "normalizedY": 0.0685625,
            "t": 1652540736196,
            "normalizedT": 2261
        },
        {
            "x": 297,
            "y": 33.28125,
            "normalizedX": 0.594,
            "normalizedY": 0.0665625,
            "t": 1652540736204,
            "normalizedT": 2269
        },
        {
            "x": 297,
            "y": 32.28125,
            "normalizedX": 0.594,
            "normalizedY": 0.0645625,
            "t": 1652540736212,
            "normalizedT": 2277
        },
        {
            "x": 297,
            "y": 31.28125,
            "normalizedX": 0.594,
            "normalizedY": 0.0625625,
            "t": 1652540736220,
            "normalizedT": 2285
        },
        {
            "x": 298,
            "y": 31.28125,
            "normalizedX": 0.596,
            "normalizedY": 0.0625625,
            "t": 1652540736228,
            "normalizedT": 2293
        },
        {
            "x": 298,
            "y": 30.28125,
            "normalizedX": 0.596,
            "normalizedY": 0.0605625,
            "t": 1652540736236,
            "normalizedT": 2301
        },
        {
            "x": 298,
            "y": 29.28125,
            "normalizedX": 0.596,
            "normalizedY": 0.0585625,
            "t": 1652540736244,
            "normalizedT": 2309
        },
        {
            "x": 298,
            "y": 28.28125,
            "normalizedX": 0.596,
            "normalizedY": 0.0565625,
            "t": 1652540736252,
            "normalizedT": 2317
        },
        {
            "x": 299,
            "y": 28.28125,
            "normalizedX": 0.598,
            "normalizedY": 0.0565625,
            "t": 1652540736260,
            "normalizedT": 2325
        },
        {
            "x": 300,
            "y": 27.28125,
            "normalizedX": 0.6,
            "normalizedY": 0.0545625,
            "t": 1652540736268,
            "normalizedT": 2333
        },
        {
            "x": 300,
            "y": 26.28125,
            "normalizedX": 0.6,
            "normalizedY": 0.0525625,
            "t": 1652540736276,
            "normalizedT": 2341
        },
        {
            "x": 300,
            "y": 26.28125,
            "normalizedX": 0.6,
            "normalizedY": 0.0525625,
            "t": 1652540736286,
            "normalizedT": 2351
        },
        {
            "x": 300,
            "y": 24.28125,
            "normalizedX": 0.6,
            "normalizedY": 0.0485625,
            "t": 1652540736292,
            "normalizedT": 2357
        },
        {
            "x": 301,
            "y": 24.28125,
            "normalizedX": 0.602,
            "normalizedY": 0.0485625,
            "t": 1652540736300,
            "normalizedT": 2365
        },
        {
            "x": 301,
            "y": 23.28125,
            "normalizedX": 0.602,
            "normalizedY": 0.0465625,
            "t": 1652540736310,
            "normalizedT": 2375
        }
    ],
    [
        {
            "x": 370,
            "y": 26.28125,
            "normalizedX": 0.74,
            "normalizedY": 0.0525625,
            "t": 1652540736923,
            "normalizedT": 0
        },
        {
            "x": 370,
            "y": 26.28125,
            "normalizedX": 0.74,
            "normalizedY": 0.0525625,
            "t": 1652540736994,
            "normalizedT": 71
        },
        {
            "x": 369,
            "y": 28.28125,
            "normalizedX": 0.738,
            "normalizedY": 0.0565625,
            "t": 1652540737002,
            "normalizedT": 79
        },
        {
            "x": 366,
            "y": 31.28125,
            "normalizedX": 0.732,
            "normalizedY": 0.0625625,
            "t": 1652540737010,
            "normalizedT": 87
        },
        {
            "x": 365,
            "y": 34.28125,
            "normalizedX": 0.73,
            "normalizedY": 0.0685625,
            "t": 1652540737018,
            "normalizedT": 95
        },
        {
            "x": 361,
            "y": 38.28125,
            "normalizedX": 0.722,
            "normalizedY": 0.0765625,
            "t": 1652540737026,
            "normalizedT": 103
        },
        {
            "x": 357,
            "y": 44.28125,
            "normalizedX": 0.714,
            "normalizedY": 0.0885625,
            "t": 1652540737034,
            "normalizedT": 111
        },
        {
            "x": 353,
            "y": 50.28125,
            "normalizedX": 0.706,
            "normalizedY": 0.1005625,
            "t": 1652540737042,
            "normalizedT": 119
        },
        {
            "x": 346,
            "y": 59.28125,
            "normalizedX": 0.692,
            "normalizedY": 0.1185625,
            "t": 1652540737050,
            "normalizedT": 127
        },
        {
            "x": 342,
            "y": 65.28125,
            "normalizedX": 0.684,
            "normalizedY": 0.1305625,
            "t": 1652540737058,
            "normalizedT": 135
        },
        {
            "x": 336,
            "y": 72.28125,
            "normalizedX": 0.672,
            "normalizedY": 0.1445625,
            "t": 1652540737066,
            "normalizedT": 143
        },
        {
            "x": 332,
            "y": 78.28125,
            "normalizedX": 0.664,
            "normalizedY": 0.1565625,
            "t": 1652540737074,
            "normalizedT": 151
        },
        {
            "x": 326,
            "y": 87.28125,
            "normalizedX": 0.652,
            "normalizedY": 0.1745625,
            "t": 1652540737082,
            "normalizedT": 159
        },
        {
            "x": 322,
            "y": 93.28125,
            "normalizedX": 0.644,
            "normalizedY": 0.1865625,
            "t": 1652540737090,
            "normalizedT": 167
        },
        {
            "x": 316,
            "y": 100.28125,
            "normalizedX": 0.632,
            "normalizedY": 0.2005625,
            "t": 1652540737098,
            "normalizedT": 175
        },
        {
            "x": 312,
            "y": 108.28125,
            "normalizedX": 0.624,
            "normalizedY": 0.2165625,
            "t": 1652540737106,
            "normalizedT": 183
        },
        {
            "x": 310,
            "y": 112.28125,
            "normalizedX": 0.62,
            "normalizedY": 0.2245625,
            "t": 1652540737114,
            "normalizedT": 191
        },
        {
            "x": 305,
            "y": 121.28125,
            "normalizedX": 0.61,
            "normalizedY": 0.2425625,
            "t": 1652540737122,
            "normalizedT": 199
        },
        {
            "x": 301,
            "y": 127.28125,
            "normalizedX": 0.602,
            "normalizedY": 0.2545625,
            "t": 1652540737130,
            "normalizedT": 207
        },
        {
            "x": 296,
            "y": 136.28125,
            "normalizedX": 0.592,
            "normalizedY": 0.2725625,
            "t": 1652540737138,
            "normalizedT": 215
        },
        {
            "x": 293,
            "y": 142.28125,
            "normalizedX": 0.586,
            "normalizedY": 0.2845625,
            "t": 1652540737146,
            "normalizedT": 223
        },
        {
            "x": 284,
            "y": 156.28125,
            "normalizedX": 0.568,
            "normalizedY": 0.3125625,
            "t": 1652540737154,
            "normalizedT": 231
        },
        {
            "x": 280,
            "y": 163.28125,
            "normalizedX": 0.56,
            "normalizedY": 0.3265625,
            "t": 1652540737162,
            "normalizedT": 239
        },
        {
            "x": 275,
            "y": 170.28125,
            "normalizedX": 0.55,
            "normalizedY": 0.3405625,
            "t": 1652540737172,
            "normalizedT": 249
        },
        {
            "x": 271,
            "y": 178.28125,
            "normalizedX": 0.542,
            "normalizedY": 0.3565625,
            "t": 1652540737178,
            "normalizedT": 255
        },
        {
            "x": 266,
            "y": 187.28125,
            "normalizedX": 0.532,
            "normalizedY": 0.3745625,
            "t": 1652540737186,
            "normalizedT": 263
        },
        {
            "x": 258,
            "y": 200.28125,
            "normalizedX": 0.516,
            "normalizedY": 0.4005625,
            "t": 1652540737196,
            "normalizedT": 273
        },
        {
            "x": 254,
            "y": 208.28125,
            "normalizedX": 0.508,
            "normalizedY": 0.4165625,
            "t": 1652540737204,
            "normalizedT": 281
        },
        {
            "x": 251,
            "y": 216.28125,
            "normalizedX": 0.502,
            "normalizedY": 0.4325625,
            "t": 1652540737212,
            "normalizedT": 289
        },
        {
            "x": 248,
            "y": 223.28125,
            "normalizedX": 0.496,
            "normalizedY": 0.4465625,
            "t": 1652540737220,
            "normalizedT": 297
        },
        {
            "x": 247,
            "y": 225.28125,
            "normalizedX": 0.494,
            "normalizedY": 0.4505625,
            "t": 1652540737228,
            "normalizedT": 305
        },
        {
            "x": 244,
            "y": 232.28125,
            "normalizedX": 0.488,
            "normalizedY": 0.4645625,
            "t": 1652540737236,
            "normalizedT": 313
        },
        {
            "x": 241,
            "y": 237.28125,
            "normalizedX": 0.482,
            "normalizedY": 0.4745625,
            "t": 1652540737244,
            "normalizedT": 321
        },
        {
            "x": 239,
            "y": 242.28125,
            "normalizedX": 0.478,
            "normalizedY": 0.4845625,
            "t": 1652540737252,
            "normalizedT": 329
        },
        {
            "x": 238,
            "y": 246.28125,
            "normalizedX": 0.476,
            "normalizedY": 0.4925625,
            "t": 1652540737260,
            "normalizedT": 337
        },
        {
            "x": 236,
            "y": 251.28125,
            "normalizedX": 0.472,
            "normalizedY": 0.5025625,
            "t": 1652540737268,
            "normalizedT": 345
        },
        {
            "x": 235,
            "y": 252.28125,
            "normalizedX": 0.47,
            "normalizedY": 0.5045625,
            "t": 1652540737276,
            "normalizedT": 353
        },
        {
            "x": 234,
            "y": 255.28125,
            "normalizedX": 0.468,
            "normalizedY": 0.5105625,
            "t": 1652540737284,
            "normalizedT": 361
        },
        {
            "x": 234,
            "y": 258.28125,
            "normalizedX": 0.468,
            "normalizedY": 0.5165625,
            "t": 1652540737292,
            "normalizedT": 369
        },
        {
            "x": 233,
            "y": 258.28125,
            "normalizedX": 0.466,
            "normalizedY": 0.5165625,
            "t": 1652540737300,
            "normalizedT": 377
        },
        {
            "x": 232,
            "y": 260.28125,
            "normalizedX": 0.464,
            "normalizedY": 0.5205625,
            "t": 1652540737308,
            "normalizedT": 385
        },
        {
            "x": 232,
            "y": 260.28125,
            "normalizedX": 0.464,
            "normalizedY": 0.5205625,
            "t": 1652540737316,
            "normalizedT": 393
        },
        {
            "x": 232,
            "y": 260.28125,
            "normalizedX": 0.464,
            "normalizedY": 0.5205625,
            "t": 1652540737324,
            "normalizedT": 401
        },
        {
            "x": 232,
            "y": 261.28125,
            "normalizedX": 0.464,
            "normalizedY": 0.5225625,
            "t": 1652540737332,
            "normalizedT": 409
        },
        {
            "x": 232,
            "y": 262.28125,
            "normalizedX": 0.464,
            "normalizedY": 0.5245625,
            "t": 1652540737928,
            "normalizedT": 1005
        },
        {
            "x": 231,
            "y": 262.28125,
            "normalizedX": 0.462,
            "normalizedY": 0.5245625,
            "t": 1652540737936,
            "normalizedT": 1013
        },
        {
            "x": 230,
            "y": 263.28125,
            "normalizedX": 0.46,
            "normalizedY": 0.5265625,
            "t": 1652540737944,
            "normalizedT": 1021
        },
        {
            "x": 230,
            "y": 264.28125,
            "normalizedX": 0.46,
            "normalizedY": 0.5285625,
            "t": 1652540737952,
            "normalizedT": 1029
        },
        {
            "x": 230,
            "y": 264.28125,
            "normalizedX": 0.46,
            "normalizedY": 0.5285625,
            "t": 1652540737960,
            "normalizedT": 1037
        },
        {
            "x": 229,
            "y": 264.28125,
            "normalizedX": 0.458,
            "normalizedY": 0.5285625,
            "t": 1652540737968,
            "normalizedT": 1045
        },
        {
            "x": 229,
            "y": 265.28125,
            "normalizedX": 0.458,
            "normalizedY": 0.5305625,
            "t": 1652540737976,
            "normalizedT": 1053
        },
        {
            "x": 228,
            "y": 266.28125,
            "normalizedX": 0.456,
            "normalizedY": 0.5325625,
            "t": 1652540737984,
            "normalizedT": 1061
        },
        {
            "x": 228,
            "y": 267.28125,
            "normalizedX": 0.456,
            "normalizedY": 0.5345625,
            "t": 1652540737992,
            "normalizedT": 1069
        },
        {
            "x": 227,
            "y": 268.28125,
            "normalizedX": 0.454,
            "normalizedY": 0.5365625,
            "t": 1652540738000,
            "normalizedT": 1077
        },
        {
            "x": 226,
            "y": 268.28125,
            "normalizedX": 0.452,
            "normalizedY": 0.5365625,
            "t": 1652540738008,
            "normalizedT": 1085
        },
        {
            "x": 226,
            "y": 269.28125,
            "normalizedX": 0.452,
            "normalizedY": 0.5385625,
            "t": 1652540738024,
            "normalizedT": 1101
        },
        {
            "x": 225,
            "y": 270.28125,
            "normalizedX": 0.45,
            "normalizedY": 0.5405625,
            "t": 1652540738032,
            "normalizedT": 1109
        },
        {
            "x": 225,
            "y": 270.28125,
            "normalizedX": 0.45,
            "normalizedY": 0.5405625,
            "t": 1652540738042,
            "normalizedT": 1119
        },
        {
            "x": 225,
            "y": 271.28125,
            "normalizedX": 0.45,
            "normalizedY": 0.5425625,
            "t": 1652540738050,
            "normalizedT": 1127
        },
        {
            "x": 224,
            "y": 272.28125,
            "normalizedX": 0.448,
            "normalizedY": 0.5445625,
            "t": 1652540738058,
            "normalizedT": 1135
        },
        {
            "x": 224,
            "y": 272.28125,
            "normalizedX": 0.448,
            "normalizedY": 0.5445625,
            "t": 1652540738066,
            "normalizedT": 1143
        },
        {
            "x": 224,
            "y": 272.28125,
            "normalizedX": 0.448,
            "normalizedY": 0.5445625,
            "t": 1652540738074,
            "normalizedT": 1151
        },
        {
            "x": 223,
            "y": 272.28125,
            "normalizedX": 0.446,
            "normalizedY": 0.5445625,
            "t": 1652540738082,
            "normalizedT": 1159
        },
        {
            "x": 223,
            "y": 273.28125,
            "normalizedX": 0.446,
            "normalizedY": 0.5465625,
            "t": 1652540738090,
            "normalizedT": 1167
        },
        {
            "x": 222,
            "y": 274.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.5485625,
            "t": 1652540738098,
            "normalizedT": 1175
        },
        {
            "x": 222,
            "y": 274.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.5485625,
            "t": 1652540738106,
            "normalizedT": 1183
        },
        {
            "x": 222,
            "y": 275.28125,
            "normalizedX": 0.444,
            "normalizedY": 0.5505625,
            "t": 1652540738114,
            "normalizedT": 1191
        },
        {
            "x": 221,
            "y": 276.28125,
            "normalizedX": 0.442,
            "normalizedY": 0.5525625,
            "t": 1652540738123,
            "normalizedT": 1200
        },
        {
            "x": 221,
            "y": 276.28125,
            "normalizedX": 0.442,
            "normalizedY": 0.5525625,
            "t": 1652540738130,
            "normalizedT": 1207
        },
        {
            "x": 220,
            "y": 277.28125,
            "normalizedX": 0.44,
            "normalizedY": 0.5545625,
            "t": 1652540738138,
            "normalizedT": 1215
        },
        {
            "x": 220,
            "y": 278.28125,
            "normalizedX": 0.44,
            "normalizedY": 0.5565625,
            "t": 1652540738146,
            "normalizedT": 1223
        },
        {
            "x": 219,
            "y": 278.28125,
            "normalizedX": 0.438,
            "normalizedY": 0.5565625,
            "t": 1652540738154,
            "normalizedT": 1231
        },
        {
            "x": 219,
            "y": 279.28125,
            "normalizedX": 0.438,
            "normalizedY": 0.5585625,
            "t": 1652540738162,
            "normalizedT": 1239
        },
        {
            "x": 218,
            "y": 280.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.5605625,
            "t": 1652540738170,
            "normalizedT": 1247
        },
        {
            "x": 218,
            "y": 280.28125,
            "normalizedX": 0.436,
            "normalizedY": 0.5605625,
            "t": 1652540738178,
            "normalizedT": 1255
        },
        {
            "x": 217,
            "y": 282.28125,
            "normalizedX": 0.434,
            "normalizedY": 0.5645625,
            "t": 1652540738186,
            "normalizedT": 1263
        },
        {
            "x": 216,
            "y": 282.28125,
            "normalizedX": 0.432,
            "normalizedY": 0.5645625,
            "t": 1652540738194,
            "normalizedT": 1271
        },
        {
            "x": 216,
            "y": 283.28125,
            "normalizedX": 0.432,
            "normalizedY": 0.5665625,
            "t": 1652540738202,
            "normalizedT": 1279
        },
        {
            "x": 216,
            "y": 284.28125,
            "normalizedX": 0.432,
            "normalizedY": 0.5685625,
            "t": 1652540738210,
            "normalizedT": 1287
        },
        {
            "x": 215,
            "y": 285.28125,
            "normalizedX": 0.43,
            "normalizedY": 0.5705625,
            "t": 1652540738218,
            "normalizedT": 1295
        },
        {
            "x": 214,
            "y": 286.28125,
            "normalizedX": 0.428,
            "normalizedY": 0.5725625,
            "t": 1652540738226,
            "normalizedT": 1303
        },
        {
            "x": 213,
            "y": 287.28125,
            "normalizedX": 0.426,
            "normalizedY": 0.5745625,
            "t": 1652540738234,
            "normalizedT": 1311
        },
        {
            "x": 212,
            "y": 288.28125,
            "normalizedX": 0.424,
            "normalizedY": 0.5765625,
            "t": 1652540738242,
            "normalizedT": 1319
        },
        {
            "x": 211,
            "y": 290.28125,
            "normalizedX": 0.422,
            "normalizedY": 0.5805625,
            "t": 1652540738250,
            "normalizedT": 1327
        },
        {
            "x": 210,
            "y": 291.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.5825625,
            "t": 1652540738258,
            "normalizedT": 1335
        },
        {
            "x": 210,
            "y": 292.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.5845625,
            "t": 1652540738266,
            "normalizedT": 1343
        },
        {
            "x": 209,
            "y": 293.28125,
            "normalizedX": 0.418,
            "normalizedY": 0.5865625,
            "t": 1652540738274,
            "normalizedT": 1351
        },
        {
            "x": 208,
            "y": 294.28125,
            "normalizedX": 0.416,
            "normalizedY": 0.5885625,
            "t": 1652540738282,
            "normalizedT": 1359
        },
        {
            "x": 208,
            "y": 295.28125,
            "normalizedX": 0.416,
            "normalizedY": 0.5905625,
            "t": 1652540738290,
            "normalizedT": 1367
        },
        {
            "x": 206,
            "y": 297.28125,
            "normalizedX": 0.412,
            "normalizedY": 0.5945625,
            "t": 1652540738298,
            "normalizedT": 1375
        },
        {
            "x": 205,
            "y": 299.28125,
            "normalizedX": 0.41,
            "normalizedY": 0.5985625,
            "t": 1652540738306,
            "normalizedT": 1383
        },
        {
            "x": 204,
            "y": 300.28125,
            "normalizedX": 0.408,
            "normalizedY": 0.6005625,
            "t": 1652540738314,
            "normalizedT": 1391
        },
        {
            "x": 203,
            "y": 302.28125,
            "normalizedX": 0.406,
            "normalizedY": 0.6045625,
            "t": 1652540738324,
            "normalizedT": 1401
        },
        {
            "x": 201,
            "y": 305.28125,
            "normalizedX": 0.402,
            "normalizedY": 0.6105625,
            "t": 1652540738332,
            "normalizedT": 1409
        },
        {
            "x": 200,
            "y": 306.28125,
            "normalizedX": 0.4,
            "normalizedY": 0.6125625,
            "t": 1652540738340,
            "normalizedT": 1417
        },
        {
            "x": 198,
            "y": 310.28125,
            "normalizedX": 0.396,
            "normalizedY": 0.6205625,
            "t": 1652540738348,
            "normalizedT": 1425
        },
        {
            "x": 196,
            "y": 312.28125,
            "normalizedX": 0.392,
            "normalizedY": 0.6245625,
            "t": 1652540738356,
            "normalizedT": 1433
        },
        {
            "x": 193,
            "y": 316.28125,
            "normalizedX": 0.386,
            "normalizedY": 0.6325625,
            "t": 1652540738364,
            "normalizedT": 1441
        },
        {
            "x": 192,
            "y": 318.28125,
            "normalizedX": 0.384,
            "normalizedY": 0.6365625,
            "t": 1652540738372,
            "normalizedT": 1449
        },
        {
            "x": 190,
            "y": 320.28125,
            "normalizedX": 0.38,
            "normalizedY": 0.6405625,
            "t": 1652540738380,
            "normalizedT": 1457
        },
        {
            "x": 186,
            "y": 324.28125,
            "normalizedX": 0.372,
            "normalizedY": 0.6485625,
            "t": 1652540738388,
            "normalizedT": 1465
        },
        {
            "x": 185,
            "y": 326.28125,
            "normalizedX": 0.37,
            "normalizedY": 0.6525625,
            "t": 1652540738396,
            "normalizedT": 1473
        },
        {
            "x": 184,
            "y": 328.28125,
            "normalizedX": 0.368,
            "normalizedY": 0.6565625,
            "t": 1652540738404,
            "normalizedT": 1481
        },
        {
            "x": 181,
            "y": 331.28125,
            "normalizedX": 0.362,
            "normalizedY": 0.6625625,
            "t": 1652540738412,
            "normalizedT": 1489
        },
        {
            "x": 180,
            "y": 334.28125,
            "normalizedX": 0.36,
            "normalizedY": 0.6685625,
            "t": 1652540738420,
            "normalizedT": 1497
        },
        {
            "x": 179,
            "y": 335.28125,
            "normalizedX": 0.358,
            "normalizedY": 0.6705625,
            "t": 1652540738428,
            "normalizedT": 1505
        },
        {
            "x": 176,
            "y": 338.28125,
            "normalizedX": 0.352,
            "normalizedY": 0.6765625,
            "t": 1652540738436,
            "normalizedT": 1513
        },
        {
            "x": 175,
            "y": 340.28125,
            "normalizedX": 0.35,
            "normalizedY": 0.6805625,
            "t": 1652540738444,
            "normalizedT": 1521
        },
        {
            "x": 174,
            "y": 342.28125,
            "normalizedX": 0.348,
            "normalizedY": 0.6845625,
            "t": 1652540738452,
            "normalizedT": 1529
        },
        {
            "x": 173,
            "y": 343.28125,
            "normalizedX": 0.346,
            "normalizedY": 0.6865625,
            "t": 1652540738460,
            "normalizedT": 1537
        },
        {
            "x": 169,
            "y": 348.28125,
            "normalizedX": 0.338,
            "normalizedY": 0.6965625,
            "t": 1652540738468,
            "normalizedT": 1545
        },
        {
            "x": 168,
            "y": 349.28125,
            "normalizedX": 0.336,
            "normalizedY": 0.6985625,
            "t": 1652540738476,
            "normalizedT": 1553
        },
        {
            "x": 166,
            "y": 351.28125,
            "normalizedX": 0.332,
            "normalizedY": 0.7025625,
            "t": 1652540738484,
            "normalizedT": 1561
        },
        {
            "x": 165,
            "y": 354.28125,
            "normalizedX": 0.33,
            "normalizedY": 0.7085625,
            "t": 1652540738492,
            "normalizedT": 1569
        },
        {
            "x": 162,
            "y": 357.28125,
            "normalizedX": 0.324,
            "normalizedY": 0.7145625,
            "t": 1652540738500,
            "normalizedT": 1577
        },
        {
            "x": 158,
            "y": 364.28125,
            "normalizedX": 0.316,
            "normalizedY": 0.7285625,
            "t": 1652540738508,
            "normalizedT": 1585
        },
        {
            "x": 156,
            "y": 368.28125,
            "normalizedX": 0.312,
            "normalizedY": 0.7365625,
            "t": 1652540738516,
            "normalizedT": 1593
        },
        {
            "x": 153,
            "y": 371.28125,
            "normalizedX": 0.306,
            "normalizedY": 0.7425625,
            "t": 1652540738524,
            "normalizedT": 1601
        },
        {
            "x": 151,
            "y": 374.28125,
            "normalizedX": 0.302,
            "normalizedY": 0.7485625,
            "t": 1652540738532,
            "normalizedT": 1609
        },
        {
            "x": 149,
            "y": 376.28125,
            "normalizedX": 0.298,
            "normalizedY": 0.7525625,
            "t": 1652540738540,
            "normalizedT": 1617
        },
        {
            "x": 145,
            "y": 384.28125,
            "normalizedX": 0.29,
            "normalizedY": 0.7685625,
            "t": 1652540738548,
            "normalizedT": 1625
        },
        {
            "x": 144,
            "y": 386.28125,
            "normalizedX": 0.288,
            "normalizedY": 0.7725625,
            "t": 1652540738556,
            "normalizedT": 1633
        },
        {
            "x": 142,
            "y": 388.28125,
            "normalizedX": 0.284,
            "normalizedY": 0.7765625,
            "t": 1652540738564,
            "normalizedT": 1641
        },
        {
            "x": 140,
            "y": 390.28125,
            "normalizedX": 0.28,
            "normalizedY": 0.7805625,
            "t": 1652540738572,
            "normalizedT": 1649
        },
        {
            "x": 140,
            "y": 393.28125,
            "normalizedX": 0.28,
            "normalizedY": 0.7865625,
            "t": 1652540738580,
            "normalizedT": 1657
        },
        {
            "x": 138,
            "y": 394.28125,
            "normalizedX": 0.276,
            "normalizedY": 0.7885625,
            "t": 1652540738588,
            "normalizedT": 1665
        },
        {
            "x": 137,
            "y": 396.28125,
            "normalizedX": 0.274,
            "normalizedY": 0.7925625,
            "t": 1652540738596,
            "normalizedT": 1673
        },
        {
            "x": 134,
            "y": 402.28125,
            "normalizedX": 0.268,
            "normalizedY": 0.8045625,
            "t": 1652540738604,
            "normalizedT": 1681
        },
        {
            "x": 132,
            "y": 404.28125,
            "normalizedX": 0.264,
            "normalizedY": 0.8085625,
            "t": 1652540738612,
            "normalizedT": 1689
        },
        {
            "x": 131,
            "y": 406.28125,
            "normalizedX": 0.262,
            "normalizedY": 0.8125625,
            "t": 1652540738622,
            "normalizedT": 1699
        },
        {
            "x": 128,
            "y": 410.28125,
            "normalizedX": 0.256,
            "normalizedY": 0.8205625,
            "t": 1652540738630,
            "normalizedT": 1707
        },
        {
            "x": 127,
            "y": 413.28125,
            "normalizedX": 0.254,
            "normalizedY": 0.8265625,
            "t": 1652540738638,
            "normalizedT": 1715
        },
        {
            "x": 124,
            "y": 416.28125,
            "normalizedX": 0.248,
            "normalizedY": 0.8325625,
            "t": 1652540738646,
            "normalizedT": 1723
        },
        {
            "x": 122,
            "y": 419.28125,
            "normalizedX": 0.244,
            "normalizedY": 0.8385625,
            "t": 1652540738654,
            "normalizedT": 1731
        },
        {
            "x": 120,
            "y": 422.28125,
            "normalizedX": 0.24,
            "normalizedY": 0.8445625,
            "t": 1652540738662,
            "normalizedT": 1739
        },
        {
            "x": 118,
            "y": 426.28125,
            "normalizedX": 0.236,
            "normalizedY": 0.8525625,
            "t": 1652540738670,
            "normalizedT": 1747
        },
        {
            "x": 116,
            "y": 428.28125,
            "normalizedX": 0.232,
            "normalizedY": 0.8565625,
            "t": 1652540738678,
            "normalizedT": 1755
        },
        {
            "x": 114,
            "y": 431.28125,
            "normalizedX": 0.228,
            "normalizedY": 0.8625625,
            "t": 1652540738686,
            "normalizedT": 1763
        },
        {
            "x": 111,
            "y": 436.28125,
            "normalizedX": 0.222,
            "normalizedY": 0.8725625,
            "t": 1652540738694,
            "normalizedT": 1771
        },
        {
            "x": 110,
            "y": 436.28125,
            "normalizedX": 0.22,
            "normalizedY": 0.8725625,
            "t": 1652540738702,
            "normalizedT": 1779
        },
        {
            "x": 110,
            "y": 437.28125,
            "normalizedX": 0.22,
            "normalizedY": 0.8745625,
            "t": 1652540738710,
            "normalizedT": 1787
        },
        {
            "x": 109,
            "y": 439.28125,
            "normalizedX": 0.218,
            "normalizedY": 0.8785625,
            "t": 1652540738718,
            "normalizedT": 1795
        },
        {
            "x": 108,
            "y": 440.28125,
            "normalizedX": 0.216,
            "normalizedY": 0.8805625,
            "t": 1652540738726,
            "normalizedT": 1803
        },
        {
            "x": 108,
            "y": 441.28125,
            "normalizedX": 0.216,
            "normalizedY": 0.8825625,
            "t": 1652540738734,
            "normalizedT": 1811
        },
        {
            "x": 108,
            "y": 441.28125,
            "normalizedX": 0.216,
            "normalizedY": 0.8825625,
            "t": 1652540738742,
            "normalizedT": 1819
        },
        {
            "x": 108,
            "y": 442.28125,
            "normalizedX": 0.216,
            "normalizedY": 0.8845625,
            "t": 1652540738750,
            "normalizedT": 1827
        },
        {
            "x": 106,
            "y": 444.28125,
            "normalizedX": 0.212,
            "normalizedY": 0.8885625,
            "t": 1652540738758,
            "normalizedT": 1835
        },
        {
            "x": 106,
            "y": 444.28125,
            "normalizedX": 0.212,
            "normalizedY": 0.8885625,
            "t": 1652540738766,
            "normalizedT": 1843
        },
        {
            "x": 106,
            "y": 445.28125,
            "normalizedX": 0.212,
            "normalizedY": 0.8905625,
            "t": 1652540738774,
            "normalizedT": 1851
        },
        {
            "x": 104,
            "y": 448.28125,
            "normalizedX": 0.208,
            "normalizedY": 0.8965625,
            "t": 1652540738782,
            "normalizedT": 1859
        },
        {
            "x": 104,
            "y": 448.28125,
            "normalizedX": 0.208,
            "normalizedY": 0.8965625,
            "t": 1652540738790,
            "normalizedT": 1867
        },
        {
            "x": 103,
            "y": 450.28125,
            "normalizedX": 0.206,
            "normalizedY": 0.9005625,
            "t": 1652540738798,
            "normalizedT": 1875
        },
        {
            "x": 102,
            "y": 452.28125,
            "normalizedX": 0.204,
            "normalizedY": 0.9045625,
            "t": 1652540738806,
            "normalizedT": 1883
        },
        {
            "x": 101,
            "y": 452.28125,
            "normalizedX": 0.202,
            "normalizedY": 0.9045625,
            "t": 1652540738814,
            "normalizedT": 1891
        },
        {
            "x": 101,
            "y": 452.28125,
            "normalizedX": 0.202,
            "normalizedY": 0.9045625,
            "t": 1652540738822,
            "normalizedT": 1899
        },
        {
            "x": 100,
            "y": 453.28125,
            "normalizedX": 0.2,
            "normalizedY": 0.9065625,
            "t": 1652540738830,
            "normalizedT": 1907
        },
        {
            "x": 100,
            "y": 454.28125,
            "normalizedX": 0.2,
            "normalizedY": 0.9085625,
            "t": 1652540738838,
            "normalizedT": 1915
        },
        {
            "x": 100,
            "y": 454.28125,
            "normalizedX": 0.2,
            "normalizedY": 0.9085625,
            "t": 1652540738846,
            "normalizedT": 1923
        }
    ],
    [
        {
            "x": 181,
            "y": 460.28125,
            "normalizedX": 0.362,
            "normalizedY": 0.9205625,
            "t": 1652540739481,
            "normalizedT": 0
        },
        {
            "x": 182,
            "y": 460.28125,
            "normalizedX": 0.364,
            "normalizedY": 0.9205625,
            "t": 1652540739536,
            "normalizedT": 55
        },
        {
            "x": 183,
            "y": 458.28125,
            "normalizedX": 0.366,
            "normalizedY": 0.9165625,
            "t": 1652540739544,
            "normalizedT": 63
        },
        {
            "x": 187,
            "y": 452.28125,
            "normalizedX": 0.374,
            "normalizedY": 0.9045625,
            "t": 1652540739552,
            "normalizedT": 71
        },
        {
            "x": 190,
            "y": 448.28125,
            "normalizedX": 0.38,
            "normalizedY": 0.8965625,
            "t": 1652540739560,
            "normalizedT": 79
        },
        {
            "x": 194,
            "y": 442.28125,
            "normalizedX": 0.388,
            "normalizedY": 0.8845625,
            "t": 1652540739568,
            "normalizedT": 87
        },
        {
            "x": 202,
            "y": 435.28125,
            "normalizedX": 0.404,
            "normalizedY": 0.8705625,
            "t": 1652540739576,
            "normalizedT": 95
        },
        {
            "x": 210,
            "y": 428.28125,
            "normalizedX": 0.42,
            "normalizedY": 0.8565625,
            "t": 1652540739584,
            "normalizedT": 103
        },
        {
            "x": 217,
            "y": 419.28125,
            "normalizedX": 0.434,
            "normalizedY": 0.8385625,
            "t": 1652540739592,
            "normalizedT": 111
        },
        {
            "x": 224,
            "y": 412.28125,
            "normalizedX": 0.448,
            "normalizedY": 0.8245625,
            "t": 1652540739600,
            "normalizedT": 119
        },
        {
            "x": 234,
            "y": 402.28125,
            "normalizedX": 0.468,
            "normalizedY": 0.8045625,
            "t": 1652540739608,
            "normalizedT": 127
        },
        {
            "x": 241,
            "y": 394.28125,
            "normalizedX": 0.482,
            "normalizedY": 0.7885625,
            "t": 1652540739616,
            "normalizedT": 135
        },
        {
            "x": 248,
            "y": 386.28125,
            "normalizedX": 0.496,
            "normalizedY": 0.7725625,
            "t": 1652540739624,
            "normalizedT": 143
        },
        {
            "x": 256,
            "y": 378.28125,
            "normalizedX": 0.512,
            "normalizedY": 0.7565625,
            "t": 1652540739632,
            "normalizedT": 151
        },
        {
            "x": 266,
            "y": 366.28125,
            "normalizedX": 0.532,
            "normalizedY": 0.7325625,
            "t": 1652540739640,
            "normalizedT": 159
        },
        {
            "x": 272,
            "y": 357.28125,
            "normalizedX": 0.544,
            "normalizedY": 0.7145625,
            "t": 1652540739648,
            "normalizedT": 167
        },
        {
            "x": 278,
            "y": 347.28125,
            "normalizedX": 0.556,
            "normalizedY": 0.6945625,
            "t": 1652540739656,
            "normalizedT": 175
        },
        {
            "x": 283,
            "y": 338.28125,
            "normalizedX": 0.566,
            "normalizedY": 0.6765625,
            "t": 1652540739664,
            "normalizedT": 183
        },
        {
            "x": 289,
            "y": 322.28125,
            "normalizedX": 0.578,
            "normalizedY": 0.6445625,
            "t": 1652540739672,
            "normalizedT": 191
        },
        {
            "x": 292,
            "y": 310.28125,
            "normalizedX": 0.584,
            "normalizedY": 0.6205625,
            "t": 1652540739680,
            "normalizedT": 199
        },
        {
            "x": 294,
            "y": 300.28125,
            "normalizedX": 0.588,
            "normalizedY": 0.6005625,
            "t": 1652540739688,
            "normalizedT": 207
        },
        {
            "x": 296,
            "y": 291.28125,
            "normalizedX": 0.592,
            "normalizedY": 0.5825625,
            "t": 1652540739696,
            "normalizedT": 215
        },
        {
            "x": 298,
            "y": 280.28125,
            "normalizedX": 0.596,
            "normalizedY": 0.5605625,
            "t": 1652540739704,
            "normalizedT": 223
        },
        {
            "x": 299,
            "y": 274.28125,
            "normalizedX": 0.598,
            "normalizedY": 0.5485625,
            "t": 1652540739712,
            "normalizedT": 231
        },
        {
            "x": 301,
            "y": 266.28125,
            "normalizedX": 0.602,
            "normalizedY": 0.5325625,
            "t": 1652540739720,
            "normalizedT": 239
        },
        {
            "x": 302,
            "y": 262.28125,
            "normalizedX": 0.604,
            "normalizedY": 0.5245625,
            "t": 1652540739728,
            "normalizedT": 247
        },
        {
            "x": 304,
            "y": 255.28125,
            "normalizedX": 0.608,
            "normalizedY": 0.5105625,
            "t": 1652540739736,
            "normalizedT": 255
        },
        {
            "x": 306,
            "y": 250.28125,
            "normalizedX": 0.612,
            "normalizedY": 0.5005625,
            "t": 1652540739744,
            "normalizedT": 263
        },
        {
            "x": 306,
            "y": 247.28125,
            "normalizedX": 0.612,
            "normalizedY": 0.4945625,
            "t": 1652540739752,
            "normalizedT": 271
        },
        {
            "x": 307,
            "y": 243.28125,
            "normalizedX": 0.614,
            "normalizedY": 0.4865625,
            "t": 1652540739762,
            "normalizedT": 281
        },
        {
            "x": 308,
            "y": 242.28125,
            "normalizedX": 0.616,
            "normalizedY": 0.4845625,
            "t": 1652540739770,
            "normalizedT": 289
        },
        {
            "x": 308,
            "y": 242.28125,
            "normalizedX": 0.616,
            "normalizedY": 0.4845625,
            "t": 1652540739778,
            "normalizedT": 297
        },
        {
            "x": 309,
            "y": 240.28125,
            "normalizedX": 0.618,
            "normalizedY": 0.4805625,
            "t": 1652540739786,
            "normalizedT": 305
        },
        {
            "x": 309,
            "y": 240.28125,
            "normalizedX": 0.618,
            "normalizedY": 0.4805625,
            "t": 1652540739794,
            "normalizedT": 313
        },
        {
            "x": 310,
            "y": 238.28125,
            "normalizedX": 0.62,
            "normalizedY": 0.4765625,
            "t": 1652540739802,
            "normalizedT": 321
        },
        {
            "x": 311,
            "y": 236.28125,
            "normalizedX": 0.622,
            "normalizedY": 0.4725625,
            "t": 1652540739810,
            "normalizedT": 329
        },
        {
            "x": 312,
            "y": 234.28125,
            "normalizedX": 0.624,
            "normalizedY": 0.4685625,
            "t": 1652540739818,
            "normalizedT": 337
        },
        {
            "x": 313,
            "y": 232.28125,
            "normalizedX": 0.626,
            "normalizedY": 0.4645625,
            "t": 1652540739826,
            "normalizedT": 345
        },
        {
            "x": 316,
            "y": 228.28125,
            "normalizedX": 0.632,
            "normalizedY": 0.4565625,
            "t": 1652540739834,
            "normalizedT": 353
        },
        {
            "x": 318,
            "y": 225.28125,
            "normalizedX": 0.636,
            "normalizedY": 0.4505625,
            "t": 1652540739842,
            "normalizedT": 361
        },
        {
            "x": 319,
            "y": 222.28125,
            "normalizedX": 0.638,
            "normalizedY": 0.4445625,
            "t": 1652540739850,
            "normalizedT": 369
        },
        {
            "x": 320,
            "y": 220.28125,
            "normalizedX": 0.64,
            "normalizedY": 0.4405625,
            "t": 1652540739858,
            "normalizedT": 377
        },
        {
            "x": 321,
            "y": 219.28125,
            "normalizedX": 0.642,
            "normalizedY": 0.4385625,
            "t": 1652540739866,
            "normalizedT": 385
        },
        {
            "x": 322,
            "y": 218.28125,
            "normalizedX": 0.644,
            "normalizedY": 0.4365625,
            "t": 1652540739874,
            "normalizedT": 393
        },
        {
            "x": 322,
            "y": 217.28125,
            "normalizedX": 0.644,
            "normalizedY": 0.4345625,
            "t": 1652540739882,
            "normalizedT": 401
        },
        {
            "x": 322,
            "y": 216.28125,
            "normalizedX": 0.644,
            "normalizedY": 0.4325625,
            "t": 1652540739890,
            "normalizedT": 409
        },
        {
            "x": 323,
            "y": 215.28125,
            "normalizedX": 0.646,
            "normalizedY": 0.4305625,
            "t": 1652540739898,
            "normalizedT": 417
        },
        {
            "x": 324,
            "y": 214.28125,
            "normalizedX": 0.648,
            "normalizedY": 0.4285625,
            "t": 1652540739906,
            "normalizedT": 425
        },
        {
            "x": 324,
            "y": 214.28125,
            "normalizedX": 0.648,
            "normalizedY": 0.4285625,
            "t": 1652540740334,
            "normalizedT": 853
        },
        {
            "x": 325,
            "y": 214.28125,
            "normalizedX": 0.65,
            "normalizedY": 0.4285625,
            "t": 1652540740342,
            "normalizedT": 861
        },
        {
            "x": 325,
            "y": 213.28125,
            "normalizedX": 0.65,
            "normalizedY": 0.4265625,
            "t": 1652540740350,
            "normalizedT": 869
        },
        {
            "x": 325,
            "y": 212.28125,
            "normalizedX": 0.65,
            "normalizedY": 0.4245625,
            "t": 1652540740358,
            "normalizedT": 877
        },
        {
            "x": 326,
            "y": 212.28125,
            "normalizedX": 0.652,
            "normalizedY": 0.4245625,
            "t": 1652540740366,
            "normalizedT": 885
        },
        {
            "x": 326,
            "y": 211.28125,
            "normalizedX": 0.652,
            "normalizedY": 0.4225625,
            "t": 1652540740374,
            "normalizedT": 893
        },
        {
            "x": 326,
            "y": 210.28125,
            "normalizedX": 0.652,
            "normalizedY": 0.4205625,
            "t": 1652540740382,
            "normalizedT": 901
        },
        {
            "x": 328,
            "y": 208.28125,
            "normalizedX": 0.656,
            "normalizedY": 0.4165625,
            "t": 1652540740390,
            "normalizedT": 909
        },
        {
            "x": 328,
            "y": 207.28125,
            "normalizedX": 0.656,
            "normalizedY": 0.4145625,
            "t": 1652540740398,
            "normalizedT": 917
        },
        {
            "x": 330,
            "y": 205.28125,
            "normalizedX": 0.66,
            "normalizedY": 0.4105625,
            "t": 1652540740407,
            "normalizedT": 926
        },
        {
            "x": 331,
            "y": 204.28125,
            "normalizedX": 0.662,
            "normalizedY": 0.4085625,
            "t": 1652540740414,
            "normalizedT": 933
        },
        {
            "x": 332,
            "y": 201.28125,
            "normalizedX": 0.664,
            "normalizedY": 0.4025625,
            "t": 1652540740423,
            "normalizedT": 942
        },
        {
            "x": 333,
            "y": 199.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.3985625,
            "t": 1652540740430,
            "normalizedT": 949
        },
        {
            "x": 334,
            "y": 197.28125,
            "normalizedX": 0.668,
            "normalizedY": 0.3945625,
            "t": 1652540740438,
            "normalizedT": 957
        },
        {
            "x": 336,
            "y": 194.28125,
            "normalizedX": 0.672,
            "normalizedY": 0.3885625,
            "t": 1652540740446,
            "normalizedT": 965
        },
        {
            "x": 338,
            "y": 190.28125,
            "normalizedX": 0.676,
            "normalizedY": 0.3805625,
            "t": 1652540740454,
            "normalizedT": 973
        },
        {
            "x": 339,
            "y": 188.28125,
            "normalizedX": 0.678,
            "normalizedY": 0.3765625,
            "t": 1652540740462,
            "normalizedT": 981
        },
        {
            "x": 342,
            "y": 185.28125,
            "normalizedX": 0.684,
            "normalizedY": 0.3705625,
            "t": 1652540740470,
            "normalizedT": 989
        },
        {
            "x": 344,
            "y": 182.28125,
            "normalizedX": 0.688,
            "normalizedY": 0.3645625,
            "t": 1652540740478,
            "normalizedT": 997
        },
        {
            "x": 346,
            "y": 177.28125,
            "normalizedX": 0.692,
            "normalizedY": 0.3545625,
            "t": 1652540740486,
            "normalizedT": 1005
        },
        {
            "x": 349,
            "y": 173.28125,
            "normalizedX": 0.698,
            "normalizedY": 0.3465625,
            "t": 1652540740494,
            "normalizedT": 1013
        },
        {
            "x": 350,
            "y": 169.28125,
            "normalizedX": 0.7,
            "normalizedY": 0.3385625,
            "t": 1652540740502,
            "normalizedT": 1021
        },
        {
            "x": 353,
            "y": 165.28125,
            "normalizedX": 0.706,
            "normalizedY": 0.3305625,
            "t": 1652540740510,
            "normalizedT": 1029
        },
        {
            "x": 356,
            "y": 160.28125,
            "normalizedX": 0.712,
            "normalizedY": 0.3205625,
            "t": 1652540740518,
            "normalizedT": 1037
        },
        {
            "x": 360,
            "y": 151.28125,
            "normalizedX": 0.72,
            "normalizedY": 0.3025625,
            "t": 1652540740526,
            "normalizedT": 1045
        },
        {
            "x": 364,
            "y": 145.28125,
            "normalizedX": 0.728,
            "normalizedY": 0.2905625,
            "t": 1652540740534,
            "normalizedT": 1053
        },
        {
            "x": 368,
            "y": 138.28125,
            "normalizedX": 0.736,
            "normalizedY": 0.2765625,
            "t": 1652540740542,
            "normalizedT": 1061
        },
        {
            "x": 370,
            "y": 132.28125,
            "normalizedX": 0.74,
            "normalizedY": 0.2645625,
            "t": 1652540740550,
            "normalizedT": 1069
        },
        {
            "x": 376,
            "y": 123.28125,
            "normalizedX": 0.752,
            "normalizedY": 0.2465625,
            "t": 1652540740558,
            "normalizedT": 1077
        },
        {
            "x": 377,
            "y": 121.28125,
            "normalizedX": 0.754,
            "normalizedY": 0.2425625,
            "t": 1652540740566,
            "normalizedT": 1085
        },
        {
            "x": 381,
            "y": 114.28125,
            "normalizedX": 0.762,
            "normalizedY": 0.2285625,
            "t": 1652540740574,
            "normalizedT": 1093
        },
        {
            "x": 386,
            "y": 106.28125,
            "normalizedX": 0.772,
            "normalizedY": 0.2125625,
            "t": 1652540740582,
            "normalizedT": 1101
        },
        {
            "x": 392,
            "y": 98.28125,
            "normalizedX": 0.784,
            "normalizedY": 0.1965625,
            "t": 1652540740590,
            "normalizedT": 1109
        },
        {
            "x": 397,
            "y": 91.28125,
            "normalizedX": 0.794,
            "normalizedY": 0.1825625,
            "t": 1652540740598,
            "normalizedT": 1117
        },
        {
            "x": 398,
            "y": 89.28125,
            "normalizedX": 0.796,
            "normalizedY": 0.1785625,
            "t": 1652540740608,
            "normalizedT": 1127
        },
        {
            "x": 403,
            "y": 82.28125,
            "normalizedX": 0.806,
            "normalizedY": 0.1645625,
            "t": 1652540740614,
            "normalizedT": 1133
        },
        {
            "x": 407,
            "y": 76.28125,
            "normalizedX": 0.814,
            "normalizedY": 0.1525625,
            "t": 1652540740624,
            "normalizedT": 1143
        },
        {
            "x": 411,
            "y": 70.28125,
            "normalizedX": 0.822,
            "normalizedY": 0.1405625,
            "t": 1652540740632,
            "normalizedT": 1151
        },
        {
            "x": 412,
            "y": 68.28125,
            "normalizedX": 0.824,
            "normalizedY": 0.1365625,
            "t": 1652540740640,
            "normalizedT": 1159
        },
        {
            "x": 416,
            "y": 62.28125,
            "normalizedX": 0.832,
            "normalizedY": 0.1245625,
            "t": 1652540740648,
            "normalizedT": 1167
        },
        {
            "x": 418,
            "y": 60.28125,
            "normalizedX": 0.836,
            "normalizedY": 0.1205625,
            "t": 1652540740656,
            "normalizedT": 1175
        },
        {
            "x": 421,
            "y": 54.28125,
            "normalizedX": 0.842,
            "normalizedY": 0.1085625,
            "t": 1652540740664,
            "normalizedT": 1183
        },
        {
            "x": 424,
            "y": 47.28125,
            "normalizedX": 0.848,
            "normalizedY": 0.0945625,
            "t": 1652540740672,
            "normalizedT": 1191
        },
        {
            "x": 426,
            "y": 45.28125,
            "normalizedX": 0.852,
            "normalizedY": 0.0905625,
            "t": 1652540740680,
            "normalizedT": 1199
        },
        {
            "x": 430,
            "y": 39.28125,
            "normalizedX": 0.86,
            "normalizedY": 0.0785625,
            "t": 1652540740688,
            "normalizedT": 1207
        },
        {
            "x": 430,
            "y": 37.28125,
            "normalizedX": 0.86,
            "normalizedY": 0.0745625,
            "t": 1652540740696,
            "normalizedT": 1215
        },
        {
            "x": 434,
            "y": 33.28125,
            "normalizedX": 0.868,
            "normalizedY": 0.0665625,
            "t": 1652540740704,
            "normalizedT": 1223
        },
        {
            "x": 434,
            "y": 30.28125,
            "normalizedX": 0.868,
            "normalizedY": 0.0605625,
            "t": 1652540740712,
            "normalizedT": 1231
        },
        {
            "x": 436,
            "y": 28.28125,
            "normalizedX": 0.872,
            "normalizedY": 0.0565625,
            "t": 1652540740720,
            "normalizedT": 1239
        },
        {
            "x": 436,
            "y": 28.28125,
            "normalizedX": 0.872,
            "normalizedY": 0.0565625,
            "t": 1652540740728,
            "normalizedT": 1247
        },
        {
            "x": 438,
            "y": 26.28125,
            "normalizedX": 0.876,
            "normalizedY": 0.0525625,
            "t": 1652540740736,
            "normalizedT": 1255
        },
        {
            "x": 438,
            "y": 25.28125,
            "normalizedX": 0.876,
            "normalizedY": 0.0505625,
            "t": 1652540740744,
            "normalizedT": 1263
        },
        {
            "x": 438,
            "y": 24.28125,
            "normalizedX": 0.876,
            "normalizedY": 0.0485625,
            "t": 1652540740752,
            "normalizedT": 1271
        },
        {
            "x": 439,
            "y": 23.28125,
            "normalizedX": 0.878,
            "normalizedY": 0.0465625,
            "t": 1652540740760,
            "normalizedT": 1279
        },
        {
            "x": 440,
            "y": 23.28125,
            "normalizedX": 0.88,
            "normalizedY": 0.0465625,
            "t": 1652540740768,
            "normalizedT": 1287
        },
        {
            "x": 440,
            "y": 22.28125,
            "normalizedX": 0.88,
            "normalizedY": 0.0445625,
            "t": 1652540740776,
            "normalizedT": 1295
        },
        {
            "x": 440,
            "y": 22.28125,
            "normalizedX": 0.88,
            "normalizedY": 0.0445625,
            "t": 1652540740784,
            "normalizedT": 1303
        },
        {
            "x": 440,
            "y": 21.28125,
            "normalizedX": 0.88,
            "normalizedY": 0.0425625,
            "t": 1652540740800,
            "normalizedT": 1319
        }
    ],
    [
        {
            "x": 469,
            "y": 139.28125,
            "normalizedX": 0.938,
            "normalizedY": 0.2785625,
            "t": 1652540742393,
            "normalizedT": 0
        },
        {
            "x": 469,
            "y": 140.28125,
            "normalizedX": 0.938,
            "normalizedY": 0.2805625,
            "t": 1652540742520,
            "normalizedT": 127
        },
        {
            "x": 468,
            "y": 141.28125,
            "normalizedX": 0.936,
            "normalizedY": 0.2825625,
            "t": 1652540742528,
            "normalizedT": 135
        },
        {
            "x": 468,
            "y": 142.28125,
            "normalizedX": 0.936,
            "normalizedY": 0.2845625,
            "t": 1652540742536,
            "normalizedT": 143
        },
        {
            "x": 467,
            "y": 142.28125,
            "normalizedX": 0.934,
            "normalizedY": 0.2845625,
            "t": 1652540742544,
            "normalizedT": 151
        },
        {
            "x": 466,
            "y": 143.28125,
            "normalizedX": 0.932,
            "normalizedY": 0.2865625,
            "t": 1652540742552,
            "normalizedT": 159
        },
        {
            "x": 466,
            "y": 144.28125,
            "normalizedX": 0.932,
            "normalizedY": 0.2885625,
            "t": 1652540742560,
            "normalizedT": 167
        },
        {
            "x": 464,
            "y": 144.28125,
            "normalizedX": 0.928,
            "normalizedY": 0.2885625,
            "t": 1652540742568,
            "normalizedT": 175
        },
        {
            "x": 463,
            "y": 146.28125,
            "normalizedX": 0.926,
            "normalizedY": 0.2925625,
            "t": 1652540742576,
            "normalizedT": 183
        },
        {
            "x": 462,
            "y": 146.28125,
            "normalizedX": 0.924,
            "normalizedY": 0.2925625,
            "t": 1652540742586,
            "normalizedT": 193
        },
        {
            "x": 460,
            "y": 148.28125,
            "normalizedX": 0.92,
            "normalizedY": 0.2965625,
            "t": 1652540742592,
            "normalizedT": 199
        },
        {
            "x": 460,
            "y": 148.28125,
            "normalizedX": 0.92,
            "normalizedY": 0.2965625,
            "t": 1652540742600,
            "normalizedT": 207
        },
        {
            "x": 458,
            "y": 149.28125,
            "normalizedX": 0.916,
            "normalizedY": 0.2985625,
            "t": 1652540742610,
            "normalizedT": 217
        },
        {
            "x": 457,
            "y": 150.28125,
            "normalizedX": 0.914,
            "normalizedY": 0.3005625,
            "t": 1652540742618,
            "normalizedT": 225
        },
        {
            "x": 456,
            "y": 151.28125,
            "normalizedX": 0.912,
            "normalizedY": 0.3025625,
            "t": 1652540742626,
            "normalizedT": 233
        },
        {
            "x": 455,
            "y": 152.28125,
            "normalizedX": 0.91,
            "normalizedY": 0.3045625,
            "t": 1652540742634,
            "normalizedT": 241
        },
        {
            "x": 454,
            "y": 152.28125,
            "normalizedX": 0.908,
            "normalizedY": 0.3045625,
            "t": 1652540742642,
            "normalizedT": 249
        },
        {
            "x": 454,
            "y": 152.28125,
            "normalizedX": 0.908,
            "normalizedY": 0.3045625,
            "t": 1652540742650,
            "normalizedT": 257
        },
        {
            "x": 453,
            "y": 153.28125,
            "normalizedX": 0.906,
            "normalizedY": 0.3065625,
            "t": 1652540742658,
            "normalizedT": 265
        },
        {
            "x": 453,
            "y": 154.28125,
            "normalizedX": 0.906,
            "normalizedY": 0.3085625,
            "t": 1652540742666,
            "normalizedT": 273
        },
        {
            "x": 452,
            "y": 154.28125,
            "normalizedX": 0.904,
            "normalizedY": 0.3085625,
            "t": 1652540742674,
            "normalizedT": 281
        },
        {
            "x": 451,
            "y": 155.28125,
            "normalizedX": 0.902,
            "normalizedY": 0.3105625,
            "t": 1652540742682,
            "normalizedT": 289
        },
        {
            "x": 450,
            "y": 156.28125,
            "normalizedX": 0.9,
            "normalizedY": 0.3125625,
            "t": 1652540742690,
            "normalizedT": 297
        },
        {
            "x": 450,
            "y": 157.28125,
            "normalizedX": 0.9,
            "normalizedY": 0.3145625,
            "t": 1652540742698,
            "normalizedT": 305
        },
        {
            "x": 448,
            "y": 158.28125,
            "normalizedX": 0.896,
            "normalizedY": 0.3165625,
            "t": 1652540742706,
            "normalizedT": 313
        },
        {
            "x": 448,
            "y": 158.28125,
            "normalizedX": 0.896,
            "normalizedY": 0.3165625,
            "t": 1652540742714,
            "normalizedT": 321
        },
        {
            "x": 446,
            "y": 158.28125,
            "normalizedX": 0.892,
            "normalizedY": 0.3165625,
            "t": 1652540742722,
            "normalizedT": 329
        },
        {
            "x": 446,
            "y": 159.28125,
            "normalizedX": 0.892,
            "normalizedY": 0.3185625,
            "t": 1652540742730,
            "normalizedT": 337
        },
        {
            "x": 446,
            "y": 160.28125,
            "normalizedX": 0.892,
            "normalizedY": 0.3205625,
            "t": 1652540742738,
            "normalizedT": 345
        },
        {
            "x": 444,
            "y": 160.28125,
            "normalizedX": 0.888,
            "normalizedY": 0.3205625,
            "t": 1652540742746,
            "normalizedT": 353
        },
        {
            "x": 444,
            "y": 161.28125,
            "normalizedX": 0.888,
            "normalizedY": 0.3225625,
            "t": 1652540742754,
            "normalizedT": 361
        },
        {
            "x": 442,
            "y": 162.28125,
            "normalizedX": 0.884,
            "normalizedY": 0.3245625,
            "t": 1652540742762,
            "normalizedT": 369
        },
        {
            "x": 441,
            "y": 163.28125,
            "normalizedX": 0.882,
            "normalizedY": 0.3265625,
            "t": 1652540742770,
            "normalizedT": 377
        },
        {
            "x": 440,
            "y": 164.28125,
            "normalizedX": 0.88,
            "normalizedY": 0.3285625,
            "t": 1652540742778,
            "normalizedT": 385
        },
        {
            "x": 439,
            "y": 164.28125,
            "normalizedX": 0.878,
            "normalizedY": 0.3285625,
            "t": 1652540742786,
            "normalizedT": 393
        },
        {
            "x": 438,
            "y": 166.28125,
            "normalizedX": 0.876,
            "normalizedY": 0.3325625,
            "t": 1652540742794,
            "normalizedT": 401
        },
        {
            "x": 437,
            "y": 166.28125,
            "normalizedX": 0.874,
            "normalizedY": 0.3325625,
            "t": 1652540742802,
            "normalizedT": 409
        },
        {
            "x": 437,
            "y": 167.28125,
            "normalizedX": 0.874,
            "normalizedY": 0.3345625,
            "t": 1652540742810,
            "normalizedT": 417
        },
        {
            "x": 436,
            "y": 167.28125,
            "normalizedX": 0.872,
            "normalizedY": 0.3345625,
            "t": 1652540742818,
            "normalizedT": 425
        },
        {
            "x": 436,
            "y": 168.28125,
            "normalizedX": 0.872,
            "normalizedY": 0.3365625,
            "t": 1652540742826,
            "normalizedT": 433
        },
        {
            "x": 435,
            "y": 168.28125,
            "normalizedX": 0.87,
            "normalizedY": 0.3365625,
            "t": 1652540742834,
            "normalizedT": 441
        },
        {
            "x": 435,
            "y": 169.28125,
            "normalizedX": 0.87,
            "normalizedY": 0.3385625,
            "t": 1652540742842,
            "normalizedT": 449
        },
        {
            "x": 434,
            "y": 170.28125,
            "normalizedX": 0.868,
            "normalizedY": 0.3405625,
            "t": 1652540742850,
            "normalizedT": 457
        },
        {
            "x": 433,
            "y": 170.28125,
            "normalizedX": 0.866,
            "normalizedY": 0.3405625,
            "t": 1652540742858,
            "normalizedT": 465
        },
        {
            "x": 432,
            "y": 171.28125,
            "normalizedX": 0.864,
            "normalizedY": 0.3425625,
            "t": 1652540742868,
            "normalizedT": 475
        },
        {
            "x": 432,
            "y": 172.28125,
            "normalizedX": 0.864,
            "normalizedY": 0.3445625,
            "t": 1652540742874,
            "normalizedT": 481
        },
        {
            "x": 430,
            "y": 172.28125,
            "normalizedX": 0.86,
            "normalizedY": 0.3445625,
            "t": 1652540742882,
            "normalizedT": 489
        },
        {
            "x": 430,
            "y": 173.28125,
            "normalizedX": 0.86,
            "normalizedY": 0.3465625,
            "t": 1652540742892,
            "normalizedT": 499
        },
        {
            "x": 429,
            "y": 174.28125,
            "normalizedX": 0.858,
            "normalizedY": 0.3485625,
            "t": 1652540742898,
            "normalizedT": 505
        },
        {
            "x": 429,
            "y": 174.28125,
            "normalizedX": 0.858,
            "normalizedY": 0.3485625,
            "t": 1652540742906,
            "normalizedT": 513
        },
        {
            "x": 428,
            "y": 175.28125,
            "normalizedX": 0.856,
            "normalizedY": 0.3505625,
            "t": 1652540742916,
            "normalizedT": 523
        },
        {
            "x": 428,
            "y": 176.28125,
            "normalizedX": 0.856,
            "normalizedY": 0.3525625,
            "t": 1652540742924,
            "normalizedT": 531
        },
        {
            "x": 427,
            "y": 176.28125,
            "normalizedX": 0.854,
            "normalizedY": 0.3525625,
            "t": 1652540742932,
            "normalizedT": 539
        },
        {
            "x": 426,
            "y": 176.28125,
            "normalizedX": 0.852,
            "normalizedY": 0.3525625,
            "t": 1652540742940,
            "normalizedT": 547
        },
        {
            "x": 425,
            "y": 177.28125,
            "normalizedX": 0.85,
            "normalizedY": 0.3545625,
            "t": 1652540742948,
            "normalizedT": 555
        },
        {
            "x": 424,
            "y": 178.28125,
            "normalizedX": 0.848,
            "normalizedY": 0.3565625,
            "t": 1652540742956,
            "normalizedT": 563
        },
        {
            "x": 423,
            "y": 180.28125,
            "normalizedX": 0.846,
            "normalizedY": 0.3605625,
            "t": 1652540742964,
            "normalizedT": 571
        },
        {
            "x": 422,
            "y": 181.28125,
            "normalizedX": 0.844,
            "normalizedY": 0.3625625,
            "t": 1652540742972,
            "normalizedT": 579
        },
        {
            "x": 421,
            "y": 182.28125,
            "normalizedX": 0.842,
            "normalizedY": 0.3645625,
            "t": 1652540742988,
            "normalizedT": 595
        },
        {
            "x": 420,
            "y": 183.28125,
            "normalizedX": 0.84,
            "normalizedY": 0.3665625,
            "t": 1652540742996,
            "normalizedT": 603
        },
        {
            "x": 419,
            "y": 184.28125,
            "normalizedX": 0.838,
            "normalizedY": 0.3685625,
            "t": 1652540743004,
            "normalizedT": 611
        },
        {
            "x": 418,
            "y": 184.28125,
            "normalizedX": 0.836,
            "normalizedY": 0.3685625,
            "t": 1652540743012,
            "normalizedT": 619
        },
        {
            "x": 418,
            "y": 186.28125,
            "normalizedX": 0.836,
            "normalizedY": 0.3725625,
            "t": 1652540743020,
            "normalizedT": 627
        },
        {
            "x": 416,
            "y": 187.28125,
            "normalizedX": 0.832,
            "normalizedY": 0.3745625,
            "t": 1652540743028,
            "normalizedT": 635
        },
        {
            "x": 416,
            "y": 188.28125,
            "normalizedX": 0.832,
            "normalizedY": 0.3765625,
            "t": 1652540743036,
            "normalizedT": 643
        },
        {
            "x": 416,
            "y": 188.28125,
            "normalizedX": 0.832,
            "normalizedY": 0.3765625,
            "t": 1652540743044,
            "normalizedT": 651
        },
        {
            "x": 415,
            "y": 190.28125,
            "normalizedX": 0.83,
            "normalizedY": 0.3805625,
            "t": 1652540743052,
            "normalizedT": 659
        },
        {
            "x": 414,
            "y": 191.28125,
            "normalizedX": 0.828,
            "normalizedY": 0.3825625,
            "t": 1652540743060,
            "normalizedT": 667
        },
        {
            "x": 413,
            "y": 192.28125,
            "normalizedX": 0.826,
            "normalizedY": 0.3845625,
            "t": 1652540743068,
            "normalizedT": 675
        },
        {
            "x": 412,
            "y": 194.28125,
            "normalizedX": 0.824,
            "normalizedY": 0.3885625,
            "t": 1652540743076,
            "normalizedT": 683
        },
        {
            "x": 412,
            "y": 195.28125,
            "normalizedX": 0.824,
            "normalizedY": 0.3905625,
            "t": 1652540743084,
            "normalizedT": 691
        },
        {
            "x": 411,
            "y": 196.28125,
            "normalizedX": 0.822,
            "normalizedY": 0.3925625,
            "t": 1652540743092,
            "normalizedT": 699
        },
        {
            "x": 410,
            "y": 196.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.3925625,
            "t": 1652540743100,
            "normalizedT": 707
        },
        {
            "x": 409,
            "y": 198.28125,
            "normalizedX": 0.818,
            "normalizedY": 0.3965625,
            "t": 1652540743108,
            "normalizedT": 715
        },
        {
            "x": 409,
            "y": 198.28125,
            "normalizedX": 0.818,
            "normalizedY": 0.3965625,
            "t": 1652540743116,
            "normalizedT": 723
        },
        {
            "x": 408,
            "y": 200.28125,
            "normalizedX": 0.816,
            "normalizedY": 0.4005625,
            "t": 1652540743124,
            "normalizedT": 731
        },
        {
            "x": 408,
            "y": 201.28125,
            "normalizedX": 0.816,
            "normalizedY": 0.4025625,
            "t": 1652540743132,
            "normalizedT": 739
        },
        {
            "x": 407,
            "y": 202.28125,
            "normalizedX": 0.814,
            "normalizedY": 0.4045625,
            "t": 1652540743140,
            "normalizedT": 747
        },
        {
            "x": 406,
            "y": 203.28125,
            "normalizedX": 0.812,
            "normalizedY": 0.4065625,
            "t": 1652540743148,
            "normalizedT": 755
        },
        {
            "x": 406,
            "y": 204.28125,
            "normalizedX": 0.812,
            "normalizedY": 0.4085625,
            "t": 1652540743156,
            "normalizedT": 763
        },
        {
            "x": 405,
            "y": 206.28125,
            "normalizedX": 0.81,
            "normalizedY": 0.4125625,
            "t": 1652540743172,
            "normalizedT": 779
        },
        {
            "x": 405,
            "y": 207.28125,
            "normalizedX": 0.81,
            "normalizedY": 0.4145625,
            "t": 1652540743180,
            "normalizedT": 787
        },
        {
            "x": 404,
            "y": 209.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4185625,
            "t": 1652540743190,
            "normalizedT": 797
        },
        {
            "x": 404,
            "y": 210.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4205625,
            "t": 1652540743198,
            "normalizedT": 805
        },
        {
            "x": 404,
            "y": 211.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4225625,
            "t": 1652540743206,
            "normalizedT": 813
        },
        {
            "x": 404,
            "y": 213.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4265625,
            "t": 1652540743214,
            "normalizedT": 821
        },
        {
            "x": 404,
            "y": 214.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4285625,
            "t": 1652540743222,
            "normalizedT": 829
        },
        {
            "x": 404,
            "y": 214.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4285625,
            "t": 1652540743230,
            "normalizedT": 837
        },
        {
            "x": 404,
            "y": 216.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4325625,
            "t": 1652540743238,
            "normalizedT": 845
        },
        {
            "x": 404,
            "y": 218.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4365625,
            "t": 1652540743246,
            "normalizedT": 853
        },
        {
            "x": 404,
            "y": 219.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4385625,
            "t": 1652540743254,
            "normalizedT": 861
        },
        {
            "x": 404,
            "y": 222.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4445625,
            "t": 1652540743262,
            "normalizedT": 869
        },
        {
            "x": 404,
            "y": 224.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4485625,
            "t": 1652540743270,
            "normalizedT": 877
        },
        {
            "x": 404,
            "y": 225.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4505625,
            "t": 1652540743278,
            "normalizedT": 885
        },
        {
            "x": 404,
            "y": 227.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4545625,
            "t": 1652540743286,
            "normalizedT": 893
        },
        {
            "x": 404,
            "y": 232.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.4645625,
            "t": 1652540743294,
            "normalizedT": 901
        },
        {
            "x": 405,
            "y": 234.28125,
            "normalizedX": 0.81,
            "normalizedY": 0.4685625,
            "t": 1652540743302,
            "normalizedT": 909
        },
        {
            "x": 405,
            "y": 236.28125,
            "normalizedX": 0.81,
            "normalizedY": 0.4725625,
            "t": 1652540743310,
            "normalizedT": 917
        },
        {
            "x": 406,
            "y": 238.28125,
            "normalizedX": 0.812,
            "normalizedY": 0.4765625,
            "t": 1652540743318,
            "normalizedT": 925
        },
        {
            "x": 406,
            "y": 240.28125,
            "normalizedX": 0.812,
            "normalizedY": 0.4805625,
            "t": 1652540743326,
            "normalizedT": 933
        },
        {
            "x": 408,
            "y": 246.28125,
            "normalizedX": 0.816,
            "normalizedY": 0.4925625,
            "t": 1652540743334,
            "normalizedT": 941
        },
        {
            "x": 409,
            "y": 248.28125,
            "normalizedX": 0.818,
            "normalizedY": 0.4965625,
            "t": 1652540743342,
            "normalizedT": 949
        },
        {
            "x": 409,
            "y": 250.28125,
            "normalizedX": 0.818,
            "normalizedY": 0.5005625,
            "t": 1652540743350,
            "normalizedT": 957
        },
        {
            "x": 410,
            "y": 253.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5065625,
            "t": 1652540743358,
            "normalizedT": 965
        },
        {
            "x": 410,
            "y": 255.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5105625,
            "t": 1652540743366,
            "normalizedT": 973
        },
        {
            "x": 410,
            "y": 260.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5205625,
            "t": 1652540743374,
            "normalizedT": 981
        },
        {
            "x": 410,
            "y": 263.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5265625,
            "t": 1652540743382,
            "normalizedT": 989
        },
        {
            "x": 410,
            "y": 265.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5305625,
            "t": 1652540743390,
            "normalizedT": 997
        },
        {
            "x": 410,
            "y": 267.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5345625,
            "t": 1652540743398,
            "normalizedT": 1005
        },
        {
            "x": 410,
            "y": 268.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5365625,
            "t": 1652540743406,
            "normalizedT": 1013
        },
        {
            "x": 410,
            "y": 271.28125,
            "normalizedX": 0.82,
            "normalizedY": 0.5425625,
            "t": 1652540743414,
            "normalizedT": 1021
        },
        {
            "x": 409,
            "y": 273.28125,
            "normalizedX": 0.818,
            "normalizedY": 0.5465625,
            "t": 1652540743422,
            "normalizedT": 1029
        },
        {
            "x": 408,
            "y": 276.28125,
            "normalizedX": 0.816,
            "normalizedY": 0.5525625,
            "t": 1652540743430,
            "normalizedT": 1037
        },
        {
            "x": 408,
            "y": 278.28125,
            "normalizedX": 0.816,
            "normalizedY": 0.5565625,
            "t": 1652540743438,
            "normalizedT": 1045
        },
        {
            "x": 407,
            "y": 279.28125,
            "normalizedX": 0.814,
            "normalizedY": 0.5585625,
            "t": 1652540743446,
            "normalizedT": 1053
        },
        {
            "x": 406,
            "y": 280.28125,
            "normalizedX": 0.812,
            "normalizedY": 0.5605625,
            "t": 1652540743454,
            "normalizedT": 1061
        },
        {
            "x": 406,
            "y": 282.28125,
            "normalizedX": 0.812,
            "normalizedY": 0.5645625,
            "t": 1652540743462,
            "normalizedT": 1069
        },
        {
            "x": 405,
            "y": 283.28125,
            "normalizedX": 0.81,
            "normalizedY": 0.5665625,
            "t": 1652540743472,
            "normalizedT": 1079
        },
        {
            "x": 404,
            "y": 284.28125,
            "normalizedX": 0.808,
            "normalizedY": 0.5685625,
            "t": 1652540743481,
            "normalizedT": 1088
        },
        {
            "x": 403,
            "y": 286.28125,
            "normalizedX": 0.806,
            "normalizedY": 0.5725625,
            "t": 1652540743490,
            "normalizedT": 1097
        },
        {
            "x": 402,
            "y": 287.28125,
            "normalizedX": 0.804,
            "normalizedY": 0.5745625,
            "t": 1652540743496,
            "normalizedT": 1103
        },
        {
            "x": 401,
            "y": 288.28125,
            "normalizedX": 0.802,
            "normalizedY": 0.5765625,
            "t": 1652540743504,
            "normalizedT": 1111
        },
        {
            "x": 399,
            "y": 291.28125,
            "normalizedX": 0.798,
            "normalizedY": 0.5825625,
            "t": 1652540743512,
            "normalizedT": 1119
        },
        {
            "x": 397,
            "y": 292.28125,
            "normalizedX": 0.794,
            "normalizedY": 0.5845625,
            "t": 1652540743520,
            "normalizedT": 1127
        },
        {
            "x": 392,
            "y": 299.28125,
            "normalizedX": 0.784,
            "normalizedY": 0.5985625,
            "t": 1652540743528,
            "normalizedT": 1135
        },
        {
            "x": 391,
            "y": 300.28125,
            "normalizedX": 0.782,
            "normalizedY": 0.6005625,
            "t": 1652540743536,
            "normalizedT": 1143
        },
        {
            "x": 388,
            "y": 304.28125,
            "normalizedX": 0.776,
            "normalizedY": 0.6085625,
            "t": 1652540743544,
            "normalizedT": 1151
        },
        {
            "x": 386,
            "y": 307.28125,
            "normalizedX": 0.772,
            "normalizedY": 0.6145625,
            "t": 1652540743552,
            "normalizedT": 1159
        },
        {
            "x": 384,
            "y": 309.28125,
            "normalizedX": 0.768,
            "normalizedY": 0.6185625,
            "t": 1652540743560,
            "normalizedT": 1167
        },
        {
            "x": 380,
            "y": 314.28125,
            "normalizedX": 0.76,
            "normalizedY": 0.6285625,
            "t": 1652540743568,
            "normalizedT": 1175
        },
        {
            "x": 378,
            "y": 316.28125,
            "normalizedX": 0.756,
            "normalizedY": 0.6325625,
            "t": 1652540743576,
            "normalizedT": 1183
        },
        {
            "x": 376,
            "y": 319.28125,
            "normalizedX": 0.752,
            "normalizedY": 0.6385625,
            "t": 1652540743584,
            "normalizedT": 1191
        },
        {
            "x": 368,
            "y": 326.28125,
            "normalizedX": 0.736,
            "normalizedY": 0.6525625,
            "t": 1652540743592,
            "normalizedT": 1199
        },
        {
            "x": 366,
            "y": 330.28125,
            "normalizedX": 0.732,
            "normalizedY": 0.6605625,
            "t": 1652540743600,
            "normalizedT": 1207
        },
        {
            "x": 362,
            "y": 334.28125,
            "normalizedX": 0.724,
            "normalizedY": 0.6685625,
            "t": 1652540743608,
            "normalizedT": 1215
        },
        {
            "x": 357,
            "y": 341.28125,
            "normalizedX": 0.714,
            "normalizedY": 0.6825625,
            "t": 1652540743616,
            "normalizedT": 1223
        },
        {
            "x": 356,
            "y": 343.28125,
            "normalizedX": 0.712,
            "normalizedY": 0.6865625,
            "t": 1652540743624,
            "normalizedT": 1231
        },
        {
            "x": 354,
            "y": 346.28125,
            "normalizedX": 0.708,
            "normalizedY": 0.6925625,
            "t": 1652540743632,
            "normalizedT": 1239
        },
        {
            "x": 352,
            "y": 351.28125,
            "normalizedX": 0.704,
            "normalizedY": 0.7025625,
            "t": 1652540743640,
            "normalizedT": 1247
        },
        {
            "x": 350,
            "y": 352.28125,
            "normalizedX": 0.7,
            "normalizedY": 0.7045625,
            "t": 1652540743648,
            "normalizedT": 1255
        },
        {
            "x": 349,
            "y": 355.28125,
            "normalizedX": 0.698,
            "normalizedY": 0.7105625,
            "t": 1652540743656,
            "normalizedT": 1263
        },
        {
            "x": 348,
            "y": 358.28125,
            "normalizedX": 0.696,
            "normalizedY": 0.7165625,
            "t": 1652540743664,
            "normalizedT": 1271
        },
        {
            "x": 346,
            "y": 362.28125,
            "normalizedX": 0.692,
            "normalizedY": 0.7245625,
            "t": 1652540743672,
            "normalizedT": 1279
        },
        {
            "x": 345,
            "y": 364.28125,
            "normalizedX": 0.69,
            "normalizedY": 0.7285625,
            "t": 1652540743680,
            "normalizedT": 1287
        },
        {
            "x": 344,
            "y": 366.28125,
            "normalizedX": 0.688,
            "normalizedY": 0.7325625,
            "t": 1652540743688,
            "normalizedT": 1295
        },
        {
            "x": 343,
            "y": 368.28125,
            "normalizedX": 0.686,
            "normalizedY": 0.7365625,
            "t": 1652540743698,
            "normalizedT": 1305
        },
        {
            "x": 342,
            "y": 370.28125,
            "normalizedX": 0.684,
            "normalizedY": 0.7405625,
            "t": 1652540743704,
            "normalizedT": 1311
        },
        {
            "x": 340,
            "y": 378.28125,
            "normalizedX": 0.68,
            "normalizedY": 0.7565625,
            "t": 1652540743712,
            "normalizedT": 1319
        },
        {
            "x": 338,
            "y": 381.28125,
            "normalizedX": 0.676,
            "normalizedY": 0.7625625,
            "t": 1652540743720,
            "normalizedT": 1327
        },
        {
            "x": 336,
            "y": 386.28125,
            "normalizedX": 0.672,
            "normalizedY": 0.7725625,
            "t": 1652540743730,
            "normalizedT": 1337
        },
        {
            "x": 335,
            "y": 389.28125,
            "normalizedX": 0.67,
            "normalizedY": 0.7785625,
            "t": 1652540743736,
            "normalizedT": 1343
        },
        {
            "x": 334,
            "y": 391.28125,
            "normalizedX": 0.668,
            "normalizedY": 0.7825625,
            "t": 1652540743744,
            "normalizedT": 1351
        },
        {
            "x": 333,
            "y": 396.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.7925625,
            "t": 1652540743754,
            "normalizedT": 1361
        },
        {
            "x": 333,
            "y": 398.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.7965625,
            "t": 1652540743760,
            "normalizedT": 1367
        },
        {
            "x": 333,
            "y": 400.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.8005625,
            "t": 1652540743770,
            "normalizedT": 1377
        },
        {
            "x": 333,
            "y": 404.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.8085625,
            "t": 1652540743778,
            "normalizedT": 1385
        },
        {
            "x": 333,
            "y": 406.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.8125625,
            "t": 1652540743786,
            "normalizedT": 1393
        },
        {
            "x": 333,
            "y": 408.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.8165625,
            "t": 1652540743794,
            "normalizedT": 1401
        },
        {
            "x": 333,
            "y": 409.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.8185625,
            "t": 1652540743802,
            "normalizedT": 1409
        },
        {
            "x": 333,
            "y": 412.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.8245625,
            "t": 1652540743810,
            "normalizedT": 1417
        },
        {
            "x": 334,
            "y": 414.28125,
            "normalizedX": 0.668,
            "normalizedY": 0.8285625,
            "t": 1652540743818,
            "normalizedT": 1425
        },
        {
            "x": 334,
            "y": 415.28125,
            "normalizedX": 0.668,
            "normalizedY": 0.8305625,
            "t": 1652540743826,
            "normalizedT": 1433
        },
        {
            "x": 334,
            "y": 416.28125,
            "normalizedX": 0.668,
            "normalizedY": 0.8325625,
            "t": 1652540743834,
            "normalizedT": 1441
        },
        {
            "x": 334,
            "y": 417.28125,
            "normalizedX": 0.668,
            "normalizedY": 0.8345625,
            "t": 1652540743842,
            "normalizedT": 1449
        },
        {
            "x": 334,
            "y": 418.28125,
            "normalizedX": 0.668,
            "normalizedY": 0.8365625,
            "t": 1652540743850,
            "normalizedT": 1457
        },
        {
            "x": 333,
            "y": 418.28125,
            "normalizedX": 0.666,
            "normalizedY": 0.8365625,
            "t": 1652540743858,
            "normalizedT": 1465
        },
        {
            "x": 332,
            "y": 420.28125,
            "normalizedX": 0.664,
            "normalizedY": 0.8405625,
            "t": 1652540743866,
            "normalizedT": 1473
        },
        {
            "x": 330,
            "y": 422.28125,
            "normalizedX": 0.66,
            "normalizedY": 0.8445625,
            "t": 1652540743874,
            "normalizedT": 1481
        },
        {
            "x": 325,
            "y": 424.28125,
            "normalizedX": 0.65,
            "normalizedY": 0.8485625,
            "t": 1652540743882,
            "normalizedT": 1489
        },
        {
            "x": 322,
            "y": 427.28125,
            "normalizedX": 0.644,
            "normalizedY": 0.8545625,
            "t": 1652540743890,
            "normalizedT": 1497
        },
        {
            "x": 320,
            "y": 428.28125,
            "normalizedX": 0.64,
            "normalizedY": 0.8565625,
            "t": 1652540743898,
            "normalizedT": 1505
        },
        {
            "x": 316,
            "y": 431.28125,
            "normalizedX": 0.632,
            "normalizedY": 0.8625625,
            "t": 1652540743906,
            "normalizedT": 1513
        },
        {
            "x": 314,
            "y": 432.28125,
            "normalizedX": 0.628,
            "normalizedY": 0.8645625,
            "t": 1652540743914,
            "normalizedT": 1521
        },
        {
            "x": 312,
            "y": 433.28125,
            "normalizedX": 0.624,
            "normalizedY": 0.8665625,
            "t": 1652540743922,
            "normalizedT": 1529
        },
        {
            "x": 309,
            "y": 436.28125,
            "normalizedX": 0.618,
            "normalizedY": 0.8725625,
            "t": 1652540743930,
            "normalizedT": 1537
        },
        {
            "x": 308,
            "y": 436.28125,
            "normalizedX": 0.616,
            "normalizedY": 0.8725625,
            "t": 1652540743940,
            "normalizedT": 1547
        },
        {
            "x": 306,
            "y": 437.28125,
            "normalizedX": 0.612,
            "normalizedY": 0.8745625,
            "t": 1652540743946,
            "normalizedT": 1553
        },
        {
            "x": 305,
            "y": 438.28125,
            "normalizedX": 0.61,
            "normalizedY": 0.8765625,
            "t": 1652540743954,
            "normalizedT": 1561
        },
        {
            "x": 303,
            "y": 439.28125,
            "normalizedX": 0.606,
            "normalizedY": 0.8785625,
            "t": 1652540743962,
            "normalizedT": 1569
        },
        {
            "x": 302,
            "y": 440.28125,
            "normalizedX": 0.604,
            "normalizedY": 0.8805625,
            "t": 1652540743970,
            "normalizedT": 1577
        },
        {
            "x": 300,
            "y": 440.28125,
            "normalizedX": 0.6,
            "normalizedY": 0.8805625,
            "t": 1652540743978,
            "normalizedT": 1585
        },
        {
            "x": 299,
            "y": 440.28125,
            "normalizedX": 0.598,
            "normalizedY": 0.8805625,
            "t": 1652540743986,
            "normalizedT": 1593
        },
        {
            "x": 298,
            "y": 440.28125,
            "normalizedX": 0.596,
            "normalizedY": 0.8805625,
            "t": 1652540743994,
            "normalizedT": 1601
        },
        {
            "x": 297,
            "y": 441.28125,
            "normalizedX": 0.594,
            "normalizedY": 0.8825625,
            "t": 1652540744002,
            "normalizedT": 1609
        },
        {
            "x": 296,
            "y": 441.28125,
            "normalizedX": 0.592,
            "normalizedY": 0.8825625,
            "t": 1652540744010,
            "normalizedT": 1617
        },
        {
            "x": 296,
            "y": 441.28125,
            "normalizedX": 0.592,
            "normalizedY": 0.8825625,
            "t": 1652540744018,
            "normalizedT": 1625
        },
        {
            "x": 294,
            "y": 441.28125,
            "normalizedX": 0.588,
            "normalizedY": 0.8825625,
            "t": 1652540744026,
            "normalizedT": 1633
        },
        {
            "x": 294,
            "y": 441.28125,
            "normalizedX": 0.588,
            "normalizedY": 0.8825625,
            "t": 1652540744034,
            "normalizedT": 1641
        },
        {
            "x": 293,
            "y": 441.28125,
            "normalizedX": 0.586,
            "normalizedY": 0.8825625,
            "t": 1652540744052,
            "normalizedT": 1659
        },
        {
            "x": 292,
            "y": 441.28125,
            "normalizedX": 0.584,
            "normalizedY": 0.8825625,
            "t": 1652540744060,
            "normalizedT": 1667
        }
    ],
    [
        {
            "x": 392,
            "y": 466.28125,
            "normalizedX": 0.784,
            "normalizedY": 0.9325625,
            "t": 1652540744593,
            "normalizedT": 0
        },
        {
            "x": 394,
            "y": 465.28125,
            "normalizedX": 0.788,
            "normalizedY": 0.9305625,
            "t": 1652540744614,
            "normalizedT": 21
        },
        {
            "x": 396,
            "y": 463.28125,
            "normalizedX": 0.792,
            "normalizedY": 0.9265625,
            "t": 1652540744624,
            "normalizedT": 31
        },
        {
            "x": 398,
            "y": 462.28125,
            "normalizedX": 0.796,
            "normalizedY": 0.9245625,
            "t": 1652540744632,
            "normalizedT": 39
        },
        {
            "x": 400,
            "y": 461.28125,
            "normalizedX": 0.8,
            "normalizedY": 0.9225625,
            "t": 1652540744640,
            "normalizedT": 47
        },
        {
            "x": 402,
            "y": 459.28125,
            "normalizedX": 0.804,
            "normalizedY": 0.9185625,
            "t": 1652540744648,
            "normalizedT": 55
        },
        {
            "x": 406,
            "y": 456.28125,
            "normalizedX": 0.812,
            "normalizedY": 0.9125625,
            "t": 1652540744656,
            "normalizedT": 63
        },
        {
            "x": 412,
            "y": 452.28125,
            "normalizedX": 0.824,
            "normalizedY": 0.9045625,
            "t": 1652540744664,
            "normalizedT": 71
        },
        {
            "x": 416,
            "y": 448.28125,
            "normalizedX": 0.832,
            "normalizedY": 0.8965625,
            "t": 1652540744672,
            "normalizedT": 79
        },
        {
            "x": 418,
            "y": 447.28125,
            "normalizedX": 0.836,
            "normalizedY": 0.8945625,
            "t": 1652540744680,
            "normalizedT": 87
        },
        {
            "x": 422,
            "y": 442.28125,
            "normalizedX": 0.844,
            "normalizedY": 0.8845625,
            "t": 1652540744688,
            "normalizedT": 95
        },
        {
            "x": 426,
            "y": 438.28125,
            "normalizedX": 0.852,
            "normalizedY": 0.8765625,
            "t": 1652540744696,
            "normalizedT": 103
        },
        {
            "x": 428,
            "y": 434.28125,
            "normalizedX": 0.856,
            "normalizedY": 0.8685625,
            "t": 1652540744704,
            "normalizedT": 111
        },
        {
            "x": 433,
            "y": 427.28125,
            "normalizedX": 0.866,
            "normalizedY": 0.8545625,
            "t": 1652540744712,
            "normalizedT": 119
        },
        {
            "x": 438,
            "y": 417.28125,
            "normalizedX": 0.876,
            "normalizedY": 0.8345625,
            "t": 1652540744720,
            "normalizedT": 127
        },
        {
            "x": 444,
            "y": 410.28125,
            "normalizedX": 0.888,
            "normalizedY": 0.8205625,
            "t": 1652540744728,
            "normalizedT": 135
        },
        {
            "x": 448,
            "y": 401.28125,
            "normalizedX": 0.896,
            "normalizedY": 0.8025625,
            "t": 1652540744736,
            "normalizedT": 143
        },
        {
            "x": 453,
            "y": 394.28125,
            "normalizedX": 0.906,
            "normalizedY": 0.7885625,
            "t": 1652540744744,
            "normalizedT": 151
        },
        {
            "x": 457,
            "y": 386.28125,
            "normalizedX": 0.914,
            "normalizedY": 0.7725625,
            "t": 1652540744753,
            "normalizedT": 160
        },
        {
            "x": 462,
            "y": 378.28125,
            "normalizedX": 0.924,
            "normalizedY": 0.7565625,
            "t": 1652540744760,
            "normalizedT": 167
        },
        {
            "x": 466,
            "y": 371.28125,
            "normalizedX": 0.932,
            "normalizedY": 0.7425625,
            "t": 1652540744768,
            "normalizedT": 175
        },
        {
            "x": 470,
            "y": 364.28125,
            "normalizedX": 0.94,
            "normalizedY": 0.7285625,
            "t": 1652540744776,
            "normalizedT": 183
        },
        {
            "x": 474,
            "y": 356.28125,
            "normalizedX": 0.948,
            "normalizedY": 0.7125625,
            "t": 1652540744784,
            "normalizedT": 191
        },
        {
            "x": 474,
            "y": 353.28125,
            "normalizedX": 0.948,
            "normalizedY": 0.7065625,
            "t": 1652540744792,
            "normalizedT": 199
        },
        {
            "x": 476,
            "y": 348.28125,
            "normalizedX": 0.952,
            "normalizedY": 0.6965625,
            "t": 1652540744800,
            "normalizedT": 207
        },
        {
            "x": 478,
            "y": 342.28125,
            "normalizedX": 0.956,
            "normalizedY": 0.6845625,
            "t": 1652540744808,
            "normalizedT": 215
        },
        {
            "x": 478,
            "y": 339.28125,
            "normalizedX": 0.956,
            "normalizedY": 0.6785625,
            "t": 1652540744816,
            "normalizedT": 223
        },
        {
            "x": 478,
            "y": 338.28125,
            "normalizedX": 0.956,
            "normalizedY": 0.6765625,
            "t": 1652540744824,
            "normalizedT": 231
        },
        {
            "x": 478,
            "y": 336.28125,
            "normalizedX": 0.956,
            "normalizedY": 0.6725625,
            "t": 1652540744832,
            "normalizedT": 239
        },
        {
            "x": 478,
            "y": 334.28125,
            "normalizedX": 0.956,
            "normalizedY": 0.6685625,
            "t": 1652540744840,
            "normalizedT": 247
        },
        {
            "x": 478,
            "y": 334.28125,
            "normalizedX": 0.956,
            "normalizedY": 0.6685625,
            "t": 1652540744848,
            "normalizedT": 255
        }
    ]
];
