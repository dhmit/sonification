import React from "react";
import STYLES from "./GesturesToSound.module.scss";
import {fetchPost} from "../../common";
import {InfoCard} from "../color/ColorExploratorium";
import Loading from "../global/Loading";
import MoveIcon from "../../images/MoveIcon.svg";
import GesturesToSound from "./GesturesToSound";

class GestureSonifier extends React.Component {
    constructor(props) {
        super(props);
        this.allMouseCoords = props.data;
        this.state = {};
        this.canvasRef = React.createRef();
    }

    drawLine = (coords) => {
        const canvas = this.canvasRef.current;
        const context = canvas.getContext("2d");
        if (context) {
            context.beginPath();
            context.lineWidth = 5;
            context.lineJoin = "round";
            context.lineCap = "round";
            context.globalCompositeOperation = "source-over";
            context.moveTo(coords[0].x, coords[0].y);
            for (let i = 0; i < coords.length - 1; i++) {
                const c = (coords[i].x + coords[i + 1].x) / 2;
                const d = (coords[i].y + coords[i + 1].y) / 2;
                context.quadraticCurveTo(coords[i].x, coords[i].y, c, d);
            }
            context.stroke();
        }
    };
    async componentDidMount() {
        for(const gesture of this.allMouseCoords) this.drawLine(gesture);

        console.log(this.allMouseCoords);
        const canvas = this.canvasRef.current;
        const canvasSettings = {
            width: canvas.width,
            height: canvas.height,
        };
        const requestBody = {
            gestures: this.allMouseCoords,
            canvas: canvasSettings,
        };
        await fetchPost('/api/gesture_to_audio/', requestBody, (response) => {
            this.setState({
                music: response.music,
            });
        });
    }

    render() {
        return (
            <div className="row mb-4 border p-2 py-4">
                <div className="col">
                    <canvas
                        className={STYLES.canvas}
                        ref={this.canvasRef}
                        width="500" height="500"
                    />
                </div>
                <div className="col">
                    {this.state.music
                        ? <audio controls controlsList="nodownload" src={`data:audio/wav;base64,${this.state.music}`} />
                        : <Loading />
                    }
                </div>
            </div>
        );
    }
}

const GesturesExploratorium = () => {
    return (<>
        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Student pull quote goes here.
        </ InfoCard>

        <GestureSonifier data={squiggle} />

        <InfoCard>
            <img
                className="mr-2"
                alt="Portrait of student"
                src={MoveIcon} width="100px" height="100%" />
            Could put more copy here about the sonification. How does it work?
        </InfoCard>
        <GestureSonifier data={otherDoodah} />
        <GestureSonifier data={squiggle} />

        <h3>Try it yourself!</h3>
        <GesturesToSound />
    </>);

};

// TODO(ra): normalize these values into a 0-1 coordinate system
// probably over in the original GesturesToSound sonifier
const squiggle = [[
    {
        "x": 96.4912253931949,
        "y": 414.06797710217927,
        "t": 1651527616947
    },
    {
        "x": 95.43859381424753,
        "y": 415.1206086811266,
        "t": 1651527616969
    },
    {
        "x": 93.33333065635279,
        "y": 415.6469244706003,
        "t": 1651527616986
    },
    {
        "x": 91.22806749845806,
        "y": 415.6469244706003,
        "t": 1651527617003
    },
    {
        "x": 87.01754118266858,
        "y": 415.1206086811266,
        "t": 1651527617019
    },
    {
        "x": 82.8070148668791,
        "y": 413.54166131270557,
        "t": 1651527617036
    },
    {
        "x": 79.649120130037,
        "y": 409.8574507863898,
        "t": 1651527617053
    },
    {
        "x": 74.38596223530016,
        "y": 401.43639815481083,
        "t": 1651527617069
    },
    {
        "x": 70.17543591951069,
        "y": 390.91008236533713,
        "t": 1651527617086
    },
    {
        "x": 64.91227802477384,
        "y": 380.3837665758635,
        "t": 1651527617103
    },
    {
        "x": 60.701751708984375,
        "y": 371.43639815481083,
        "t": 1651527617119
    },
    {
        "x": 56.491225393194895,
        "y": 356.69955604954765,
        "t": 1651527617136
    },
    {
        "x": 55.96490960372122,
        "y": 342.48902973375823,
        "t": 1651527617153
    },
    {
        "x": 59.649120130037005,
        "y": 328.8048192074424,
        "t": 1651527617169
    },
    {
        "x": 66.4912253931949,
        "y": 315.1206086811266,
        "t": 1651527617186
    },
    {
        "x": 73.33333065635279,
        "y": 305.6469244706003,
        "t": 1651527617203
    },
    {
        "x": 89.649120130037,
        "y": 293.0153455232319,
        "t": 1651527617219
    },
    {
        "x": 101.22806749845806,
        "y": 288.8048192074424,
        "t": 1651527617236
    },
    {
        "x": 112.28069907740542,
        "y": 286.6995560495477,
        "t": 1651527617253
    },
    {
        "x": 121.75438328793173,
        "y": 286.6995560495477,
        "t": 1651527617269
    },
    {
        "x": 130.17543591951068,
        "y": 288.8048192074424,
        "t": 1651527617286
    },
    {
        "x": 135.43859381424753,
        "y": 290.3837665758635,
        "t": 1651527617303
    },
    {
        "x": 145.43859381424753,
        "y": 294.06797710217927,
        "t": 1651527617319
    },
    {
        "x": 152.28069907740542,
        "y": 297.22587183902135,
        "t": 1651527617336
    },
    {
        "x": 161.75438328793174,
        "y": 301.96271394428453,
        "t": 1651527617353
    },
    {
        "x": 167.54385697214227,
        "y": 306.173240260074,
        "t": 1651527617369
    },
    {
        "x": 171.22806749845805,
        "y": 310.3837665758635,
        "t": 1651527617386
    },
    {
        "x": 173.33333065635279,
        "y": 314.59429289165297,
        "t": 1651527617403
    },
    {
        "x": 174.38596223530016,
        "y": 318.8048192074424,
        "t": 1651527617419
    },
    {
        "x": 174.38596223530016,
        "y": 323.0153455232319,
        "t": 1651527617436
    },
    {
        "x": 172.80701486687911,
        "y": 326.69955604954765,
        "t": 1651527617453
    },
    {
        "x": 167.01754118266857,
        "y": 330.3837665758635,
        "t": 1651527617469
    },
    {
        "x": 161.22806749845805,
        "y": 332.48902973375823,
        "t": 1651527617486
    },
    {
        "x": 154.38596223530016,
        "y": 333.0153455232319,
        "t": 1651527617503
    },
    {
        "x": 145.9649096037212,
        "y": 333.0153455232319,
        "t": 1651527617519
    },
    {
        "x": 140.17543591951068,
        "y": 330.91008236533713,
        "t": 1651527617536
    },
    {
        "x": 132.28069907740542,
        "y": 326.69955604954765,
        "t": 1651527617552
    },
    {
        "x": 128.59648855108964,
        "y": 321.96271394428453,
        "t": 1651527617569
    },
    {
        "x": 125.96490960372121,
        "y": 314.06797710217927,
        "t": 1651527617586
    },
    {
        "x": 125.43859381424753,
        "y": 302.48902973375823,
        "t": 1651527617603
    },
    {
        "x": 125.96490960372121,
        "y": 294.59429289165297,
        "t": 1651527617619
    },
    {
        "x": 133.85964644582648,
        "y": 279.3311349969161,
        "t": 1651527617636
    },
    {
        "x": 138.59648855108964,
        "y": 269.3311349969161,
        "t": 1651527617653
    },
    {
        "x": 145.43859381424753,
        "y": 260.3837665758635,
        "t": 1651527617669
    },
    {
        "x": 152.28069907740542,
        "y": 251.96271394428453,
        "t": 1651527617686
    },
    {
        "x": 160.70175170898438,
        "y": 245.6469244706003,
        "t": 1651527617703
    },
    {
        "x": 180.70175170898438,
        "y": 237.22587183902138,
        "t": 1651527617719
    },
    {
        "x": 189.1228043405633,
        "y": 234.59429289165294,
        "t": 1651527617736
    },
    {
        "x": 197.54385697214227,
        "y": 233.54166131270557,
        "t": 1651527617753
    },
    {
        "x": 204.38596223530016,
        "y": 233.54166131270557,
        "t": 1651527617769
    },
    {
        "x": 211.75438328793174,
        "y": 233.54166131270557,
        "t": 1651527617786
    },
    {
        "x": 219.649120130037,
        "y": 235.12060868112664,
        "t": 1651527617803
    },
    {
        "x": 228.59648855108964,
        "y": 238.27850341796875,
        "t": 1651527617819
    },
    {
        "x": 235.43859381424753,
        "y": 241.43639815481083,
        "t": 1651527617836
    },
    {
        "x": 243.85964644582646,
        "y": 246.173240260074,
        "t": 1651527617853
    },
    {
        "x": 247.54385697214227,
        "y": 249.8574507863898,
        "t": 1651527617869
    },
    {
        "x": 252.28069907740542,
        "y": 255.6469244706003,
        "t": 1651527617886
    },
    {
        "x": 253.85964644582646,
        "y": 259.3311349969161,
        "t": 1651527617903
    },
    {
        "x": 255.43859381424753,
        "y": 262.48902973375823,
        "t": 1651527617919
    },
    {
        "x": 255.43859381424753,
        "y": 265.6469244706003,
        "t": 1651527617936
    },
    {
        "x": 255.43859381424753,
        "y": 270.3837665758635,
        "t": 1651527617953
    },
    {
        "x": 253.33333065635279,
        "y": 274.06797710217927,
        "t": 1651527617969
    },
    {
        "x": 249.649120130037,
        "y": 276.6995560495477,
        "t": 1651527617986
    },
    {
        "x": 244.38596223530016,
        "y": 278.27850341796875,
        "t": 1651527618003
    },
    {
        "x": 240.17543591951068,
        "y": 279.3311349969161,
        "t": 1651527618019
    },
    {
        "x": 235.43859381424753,
        "y": 279.3311349969161,
        "t": 1651527618036
    },
    {
        "x": 229.1228043405633,
        "y": 278.27850341796875,
        "t": 1651527618053
    },
    {
        "x": 223.33333065635279,
        "y": 276.173240260074,
        "t": 1651527618069
    },
    {
        "x": 214.91227802477383,
        "y": 272.48902973375823,
        "t": 1651527618086
    },
    {
        "x": 208.59648855108964,
        "y": 268.8048192074424,
        "t": 1651527618103
    },
    {
        "x": 203.33333065635279,
        "y": 263.0153455232319,
        "t": 1651527618119
    },
    {
        "x": 200.70175170898438,
        "y": 255.12060868112664,
        "t": 1651527618136
    },
    {
        "x": 199.649120130037,
        "y": 244.06797710217927,
        "t": 1651527618153
    },
    {
        "x": 199.649120130037,
        "y": 231.96271394428453,
        "t": 1651527618169
    },
    {
        "x": 202.28069907740542,
        "y": 224.06797710217927,
        "t": 1651527618186
    },
    {
        "x": 211.75438328793174,
        "y": 206.69955604954768,
        "t": 1651527618203
    },
    {
        "x": 230.17543591951068,
        "y": 185.6469244706003,
        "t": 1651527618219
    },
    {
        "x": 240.70175170898438,
        "y": 175.6469244706003,
        "t": 1651527618236
    },
    {
        "x": 253.85964644582646,
        "y": 165.6469244706003,
        "t": 1651527618253
    },
    {
        "x": 267.0175411826686,
        "y": 156.69955604954768,
        "t": 1651527618269
    },
    {
        "x": 281.7543832879317,
        "y": 148.80481920744242,
        "t": 1651527618286
    },
    {
        "x": 295.4385938142475,
        "y": 144.59429289165294,
        "t": 1651527618303
    },
    {
        "x": 308.07017276161594,
        "y": 141.96271394428453,
        "t": 1651527618319
    },
    {
        "x": 315.4385938142475,
        "y": 141.96271394428453,
        "t": 1651527618336
    },
    {
        "x": 320.1754359195107,
        "y": 143.0153455232319,
        "t": 1651527618353
    },
    {
        "x": 322.8070148668791,
        "y": 145.6469244706003,
        "t": 1651527618369
    },
    {
        "x": 328.07017276161594,
        "y": 150.3837665758635,
        "t": 1651527618386
    },
    {
        "x": 332.8070148668791,
        "y": 155.12060868112664,
        "t": 1651527618403
    },
    {
        "x": 337.0175411826686,
        "y": 160.91008236533716,
        "t": 1651527618419
    },
    {
        "x": 341.228067498458,
        "y": 168.80481920744242,
        "t": 1651527618436
    },
    {
        "x": 344.38596223530016,
        "y": 175.6469244706003,
        "t": 1651527618453
    },
    {
        "x": 345.9649096037212,
        "y": 184.59429289165294,
        "t": 1651527618469
    },
    {
        "x": 346.4912253931949,
        "y": 187.75218762849505,
        "t": 1651527618486
    },
    {
        "x": 346.4912253931949,
        "y": 190.3837665758635,
        "t": 1651527618503
    },
    {
        "x": 344.91227802477385,
        "y": 194.06797710217927,
        "t": 1651527618519
    },
    {
        "x": 342.8070148668791,
        "y": 195.12060868112664,
        "t": 1651527618536
    },
    {
        "x": 337.54385697214224,
        "y": 197.75218762849505,
        "t": 1651527618553
    },
    {
        "x": 331.228067498458,
        "y": 199.33113499691612,
        "t": 1651527618569
    },
    {
        "x": 325.9649096037212,
        "y": 199.8574507863898,
        "t": 1651527618586
    },
    {
        "x": 319.649120130037,
        "y": 200.3837665758635,
        "t": 1651527618603
    },
    {
        "x": 314.38596223530016,
        "y": 199.33113499691612,
        "t": 1651527618619
    },
    {
        "x": 308.07017276161594,
        "y": 197.22587183902138,
        "t": 1651527618636
    },
    {
        "x": 299.649120130037,
        "y": 191.96271394428453,
        "t": 1651527618653
    },
    {
        "x": 290.7017517089844,
        "y": 185.6469244706003,
        "t": 1651527618669
    },
    {
        "x": 283.33333065635276,
        "y": 177.22587183902138,
        "t": 1651527618686
    },
    {
        "x": 280.1754359195107,
        "y": 172.4890297337582,
        "t": 1651527618703
    },
    {
        "x": 273.85964644582646,
        "y": 159.8574507863898,
        "t": 1651527618719
    },
    {
        "x": 273.33333065635276,
        "y": 147.22587183902138,
        "t": 1651527618736
    },
    {
        "x": 275.9649096037212,
        "y": 136.69955604954768,
        "t": 1651527618753
    },
    {
        "x": 280.7017517089844,
        "y": 127.75218762849507,
        "t": 1651527618769
    },
    {
        "x": 287.0175411826686,
        "y": 119.85745078638979,
        "t": 1651527618786
    },
    {
        "x": 295.4385938142475,
        "y": 110.91008236533716,
        "t": 1651527618803
    },
    {
        "x": 307.0175411826686,
        "y": 103.54166131270559,
        "t": 1651527618819
    },
    {
        "x": 321.7543832879317,
        "y": 96.6995560495477,
        "t": 1651527618836
    },
    {
        "x": 332.8070148668791,
        "y": 93.0153455232319,
        "t": 1651527618853
    },
    {
        "x": 348.59648855108964,
        "y": 89.85745078638979,
        "t": 1651527618869
    },
    {
        "x": 357.54385697214224,
        "y": 89.85745078638979,
        "t": 1651527618886
    },
    {
        "x": 364.38596223530016,
        "y": 89.85745078638979,
        "t": 1651527618903
    },
    {
        "x": 376.4912253931949,
        "y": 91.43639815481085,
        "t": 1651527618919
    },
    {
        "x": 379.649120130037,
        "y": 93.54166131270559,
        "t": 1651527618936
    },
    {
        "x": 390.1754359195107,
        "y": 101.43639815481085,
        "t": 1651527618953
    },
    {
        "x": 395.9649096037212,
        "y": 108.27850341796875,
        "t": 1651527618969
    },
    {
        "x": 399.649120130037,
        "y": 114.06797710217927,
        "t": 1651527618986
    },
    {
        "x": 403.85964644582646,
        "y": 123.54166131270559,
        "t": 1651527619003
    },
    {
        "x": 407.01754118266854,
        "y": 129.8574507863898,
        "t": 1651527619019
    },
    {
        "x": 409.649120130037,
        "y": 134.06797710217927,
        "t": 1651527619036
    },
    {
        "x": 411.7543832879317,
        "y": 139.33113499691612,
        "t": 1651527619053
    },
    {
        "x": 412.2806990774054,
        "y": 140.91008236533716,
        "t": 1651527619069
    },
    {
        "x": 412.2806990774054,
        "y": 143.54166131270557,
        "t": 1651527619086
    },
    {
        "x": 410.7017517089844,
        "y": 145.6469244706003,
        "t": 1651527619103
    },
    {
        "x": 410.1754359195107,
        "y": 146.69955604954768,
        "t": 1651527619119
    },
    {
        "x": 407.54385697214224,
        "y": 147.75218762849505,
        "t": 1651527619136
    },
    {
        "x": 404.9122780247738,
        "y": 147.75218762849505,
        "t": 1651527619153
    },
    {
        "x": 399.649120130037,
        "y": 147.75218762849505,
        "t": 1651527619169
    },
    {
        "x": 394.38596223530016,
        "y": 146.69955604954768,
        "t": 1651527619186
    },
    {
        "x": 390.1754359195107,
        "y": 145.12060868112664,
        "t": 1651527619203
    },
    {
        "x": 383.33333065635276,
        "y": 140.91008236533716,
        "t": 1651527619219
    },
    {
        "x": 378.07017276161594,
        "y": 135.6469244706003,
        "t": 1651527619236
    },
    {
        "x": 373.33333065635276,
        "y": 128.80481920744242,
        "t": 1651527619253
    },
    {
        "x": 369.1228043405633,
        "y": 120.38376657586348,
        "t": 1651527619269
    },
    {
        "x": 368.59648855108964,
        "y": 110.38376657586348,
        "t": 1651527619286
    },
    {
        "x": 370.1754359195107,
        "y": 102.48902973375822,
        "t": 1651527619303
    },
    {
        "x": 376.4912253931949,
        "y": 88.80481920744243,
        "t": 1651527619319
    },
    {
        "x": 389.1228043405633,
        "y": 73.0153455232319,
        "t": 1651527619336
    },
    {
        "x": 402.8070148668791,
        "y": 58.27850341796875,
        "t": 1651527619353
    },
    {
        "x": 413.33333065635276,
        "y": 48.27850341796875,
        "t": 1651527619369
    },
    {
        "x": 425.4385938142475,
        "y": 38.804819207442435,
        "t": 1651527619386
    },
    {
        "x": 437.01754118266854,
        "y": 29.8574507863898,
        "t": 1651527619403
    },
    {
        "x": 448.07017276161594,
        "y": 21.962713944284538,
        "t": 1651527619419
    },
    {
        "x": 451.228067498458,
        "y": 18.80481920744243,
        "t": 1651527619436
    },
    {
        "x": 452.2806990774054,
        "y": 17.752187628495065,
        "t": 1651527619453
    },
    {
        "x": 452.2806990774054,
        "y": 17.22587183902138,
        "t": 1651527619507
    }
]];


const otherDoodah =
[
    [
        {
            "x": 32.083332538604736,
            "y": 25.45572280883789,
            "t": 1651528895404
        },
        {
            "x": 32.083332538604736,
            "y": 26.08072280883789,
            "t": 1651528895443
        },
        {
            "x": 32.083332538604736,
            "y": 26.70572280883789,
            "t": 1651528895451
        },
        {
            "x": 32.083332538604736,
            "y": 28.58072280883789,
            "t": 1651528895466
        },
        {
            "x": 32.083332538604736,
            "y": 39.20572280883789,
            "t": 1651528895482
        },
        {
            "x": 32.083332538604736,
            "y": 57.33072280883789,
            "t": 1651528895499
        },
        {
            "x": 29.583332538604736,
            "y": 86.70572280883789,
            "t": 1651528895516
        },
        {
            "x": 28.958332538604736,
            "y": 108.58072280883789,
            "t": 1651528895532
        },
        {
            "x": 28.958332538604736,
            "y": 129.2057228088379,
            "t": 1651528895549
        },
        {
            "x": 28.958332538604736,
            "y": 152.9557228088379,
            "t": 1651528895566
        },
        {
            "x": 28.958332538604736,
            "y": 166.0807228088379,
            "t": 1651528895582
        },
        {
            "x": 28.958332538604736,
            "y": 177.9557228088379,
            "t": 1651528895599
        },
        {
            "x": 29.583332538604736,
            "y": 185.4557228088379,
            "t": 1651528895616
        },
        {
            "x": 30.833332538604736,
            "y": 191.0807228088379,
            "t": 1651528895632
        },
        {
            "x": 31.458332538604736,
            "y": 194.2057228088379,
            "t": 1651528895649
        },
        {
            "x": 32.083332538604736,
            "y": 195.4557228088379,
            "t": 1651528895666
        },
        {
            "x": 32.083332538604736,
            "y": 196.0807228088379,
            "t": 1651528895683
        },
        {
            "x": 32.708332538604736,
            "y": 196.0807228088379,
            "t": 1651528895699
        },
        {
            "x": 37.708332538604736,
            "y": 195.4557228088379,
            "t": 1651528895716
        },
        {
            "x": 48.958332538604736,
            "y": 192.9557228088379,
            "t": 1651528895732
        },
        {
            "x": 64.58333253860474,
            "y": 190.4557228088379,
            "t": 1651528895749
        },
        {
            "x": 97.08333253860474,
            "y": 187.9557228088379,
            "t": 1651528895766
        },
        {
            "x": 110.83333253860474,
            "y": 187.9557228088379,
            "t": 1651528895782
        },
        {
            "x": 120.20833253860474,
            "y": 187.9557228088379,
            "t": 1651528895799
        },
        {
            "x": 123.33333253860474,
            "y": 187.9557228088379,
            "t": 1651528895816
        },
        {
            "x": 123.33333253860474,
            "y": 187.9557228088379,
            "t": 1651528895832
        },
        {
            "x": 123.95833253860474,
            "y": 187.9557228088379,
            "t": 1651528895861
        },
        {
            "x": 124.58333253860474,
            "y": 187.9557228088379,
            "t": 1651528895899
        },
        {
            "x": 124.58333253860474,
            "y": 187.9557228088379,
            "t": 1651528895916
        },
        {
            "x": 124.58333253860474,
            "y": 187.3307228088379,
            "t": 1651528895935
        }
    ],
    [
        {
            "x": 342.70833253860474,
            "y": 35.45572280883789,
            "t": 1651528896624
        },
        {
            "x": 344.58333253860474,
            "y": 35.45572280883789,
            "t": 1651528896647
        },
        {
            "x": 347.70833253860474,
            "y": 35.45572280883789,
            "t": 1651528896655
        },
        {
            "x": 353.33333253860474,
            "y": 35.45572280883789,
            "t": 1651528896666
        },
        {
            "x": 367.08333253860474,
            "y": 35.45572280883789,
            "t": 1651528896682
        },
        {
            "x": 383.95833253860474,
            "y": 36.08072280883789,
            "t": 1651528896699
        },
        {
            "x": 402.08333253860474,
            "y": 36.70572280883789,
            "t": 1651528896716
        },
        {
            "x": 416.45833253860474,
            "y": 37.95572280883789,
            "t": 1651528896732
        },
        {
            "x": 425.20833253860474,
            "y": 39.20572280883789,
            "t": 1651528896749
        },
        {
            "x": 428.33333253860474,
            "y": 39.83072280883789,
            "t": 1651528896766
        },
        {
            "x": 428.33333253860474,
            "y": 40.45572280883789,
            "t": 1651528896785
        },
        {
            "x": 428.95833253860474,
            "y": 40.45572280883789,
            "t": 1651528896799
        },
        {
            "x": 429.58333253860474,
            "y": 42.33072280883789,
            "t": 1651528896816
        },
        {
            "x": 432.08333253860474,
            "y": 47.95572280883789,
            "t": 1651528896832
        },
        {
            "x": 437.08333253860474,
            "y": 56.70572280883789,
            "t": 1651528896849
        },
        {
            "x": 443.95833253860474,
            "y": 77.33072280883789,
            "t": 1651528896866
        },
        {
            "x": 448.33333253860474,
            "y": 97.33072280883789,
            "t": 1651528896882
        },
        {
            "x": 450.20833253860474,
            "y": 114.20572280883789,
            "t": 1651528896899
        },
        {
            "x": 450.83333253860474,
            "y": 129.2057228088379,
            "t": 1651528896916
        },
        {
            "x": 450.83333253860474,
            "y": 142.9557228088379,
            "t": 1651528896932
        },
        {
            "x": 449.58333253860474,
            "y": 151.7057228088379,
            "t": 1651528896949
        },
        {
            "x": 447.08333253860474,
            "y": 163.5807228088379,
            "t": 1651528896966
        },
        {
            "x": 444.58333253860474,
            "y": 171.7057228088379,
            "t": 1651528896982
        },
        {
            "x": 443.33333253860474,
            "y": 181.0807228088379,
            "t": 1651528896999
        },
        {
            "x": 443.33333253860474,
            "y": 186.7057228088379,
            "t": 1651528897016
        },
        {
            "x": 442.70833253860474,
            "y": 190.4557228088379,
            "t": 1651528897032
        },
        {
            "x": 443.33333253860474,
            "y": 193.5807228088379,
            "t": 1651528897049
        },
        {
            "x": 443.33333253860474,
            "y": 194.2057228088379,
            "t": 1651528897066
        },
        {
            "x": 443.33333253860474,
            "y": 194.8307228088379,
            "t": 1651528897082
        }
    ],
    [
        {
            "x": 101.45833253860474,
            "y": 315.4557228088379,
            "t": 1651528898390
        },
        {
            "x": 102.08333253860474,
            "y": 316.7057228088379,
            "t": 1651528898435
        },
        {
            "x": 102.08333253860474,
            "y": 319.2057228088379,
            "t": 1651528898449
        },
        {
            "x": 102.70833253860474,
            "y": 322.3307228088379,
            "t": 1651528898466
        },
        {
            "x": 104.58333253860474,
            "y": 329.2057228088379,
            "t": 1651528898483
        },
        {
            "x": 106.45833253860474,
            "y": 337.9557228088379,
            "t": 1651528898499
        },
        {
            "x": 108.95833253860474,
            "y": 347.9557228088379,
            "t": 1651528898516
        },
        {
            "x": 112.70833253860474,
            "y": 356.7057228088379,
            "t": 1651528898533
        },
        {
            "x": 118.33333253860474,
            "y": 367.9557228088379,
            "t": 1651528898549
        },
        {
            "x": 127.08333253860474,
            "y": 380.4557228088379,
            "t": 1651528898566
        },
        {
            "x": 133.33333253860474,
            "y": 386.7057228088379,
            "t": 1651528898582
        },
        {
            "x": 139.58333253860474,
            "y": 391.0807228088379,
            "t": 1651528898599
        },
        {
            "x": 148.95833253860474,
            "y": 396.7057228088379,
            "t": 1651528898616
        },
        {
            "x": 159.58333253860474,
            "y": 402.9557228088379,
            "t": 1651528898632
        },
        {
            "x": 167.70833253860474,
            "y": 406.7057228088379,
            "t": 1651528898649
        },
        {
            "x": 175.83333253860474,
            "y": 411.0807228088379,
            "t": 1651528898666
        },
        {
            "x": 190.20833253860474,
            "y": 416.7057228088379,
            "t": 1651528898683
        },
        {
            "x": 202.08333253860474,
            "y": 419.8307228088379,
            "t": 1651528898699
        },
        {
            "x": 215.83333253860474,
            "y": 422.9557228088379,
            "t": 1651528898716
        },
        {
            "x": 230.83333253860474,
            "y": 425.4557228088379,
            "t": 1651528898733
        },
        {
            "x": 243.95833253860474,
            "y": 426.7057228088379,
            "t": 1651528898749
        },
        {
            "x": 258.33333253860474,
            "y": 427.3307228088379,
            "t": 1651528898766
        },
        {
            "x": 272.08333253860474,
            "y": 427.3307228088379,
            "t": 1651528898783
        },
        {
            "x": 288.95833253860474,
            "y": 426.0807228088379,
            "t": 1651528898799
        },
        {
            "x": 295.83333253860474,
            "y": 423.5807228088379,
            "t": 1651528898816
        },
        {
            "x": 306.45833253860474,
            "y": 419.2057228088379,
            "t": 1651528898832
        },
        {
            "x": 315.83333253860474,
            "y": 413.5807228088379,
            "t": 1651528898849
        },
        {
            "x": 322.08333253860474,
            "y": 409.2057228088379,
            "t": 1651528898866
        },
        {
            "x": 332.08333253860474,
            "y": 401.7057228088379,
            "t": 1651528898882
        },
        {
            "x": 338.33333253860474,
            "y": 396.0807228088379,
            "t": 1651528898899
        },
        {
            "x": 348.33333253860474,
            "y": 386.7057228088379,
            "t": 1651528898916
        },
        {
            "x": 353.95833253860474,
            "y": 380.4557228088379,
            "t": 1651528898933
        },
        {
            "x": 364.58333253860474,
            "y": 366.7057228088379,
            "t": 1651528898949
        },
        {
            "x": 370.20833253860474,
            "y": 360.4557228088379,
            "t": 1651528898966
        },
        {
            "x": 374.58333253860474,
            "y": 354.2057228088379,
            "t": 1651528898983
        },
        {
            "x": 380.83333253860474,
            "y": 346.7057228088379,
            "t": 1651528898999
        },
        {
            "x": 388.33333253860474,
            "y": 337.3307228088379,
            "t": 1651528899016
        },
        {
            "x": 390.20833253860474,
            "y": 335.4557228088379,
            "t": 1651528899032
        },
        {
            "x": 395.20833253860474,
            "y": 326.0807228088379,
            "t": 1651528899049
        },
        {
            "x": 400.83333253860474,
            "y": 316.0807228088379,
            "t": 1651528899066
        },
        {
            "x": 402.08333253860474,
            "y": 312.3307228088379,
            "t": 1651528899082
        },
        {
            "x": 405.20833253860474,
            "y": 304.2057228088379,
            "t": 1651528899099
        },
        {
            "x": 407.08333253860474,
            "y": 300.4557228088379,
            "t": 1651528899116
        },
        {
            "x": 407.08333253860474,
            "y": 296.7057228088379,
            "t": 1651528899133
        },
        {
            "x": 408.33333253860474,
            "y": 291.7057228088379,
            "t": 1651528899149
        },
        {
            "x": 408.33333253860474,
            "y": 288.5807228088379,
            "t": 1651528899166
        },
        {
            "x": 408.33333253860474,
            "y": 286.0807228088379,
            "t": 1651528899183
        },
        {
            "x": 408.33333253860474,
            "y": 281.7057228088379,
            "t": 1651528899199
        },
        {
            "x": 408.33333253860474,
            "y": 279.2057228088379,
            "t": 1651528899216
        },
        {
            "x": 407.70833253860474,
            "y": 277.9557228088379,
            "t": 1651528899233
        },
        {
            "x": 407.08333253860474,
            "y": 276.7057228088379,
            "t": 1651528899249
        },
        {
            "x": 407.08333253860474,
            "y": 275.4557228088379,
            "t": 1651528899266
        },
        {
            "x": 406.45833253860474,
            "y": 274.8307228088379,
            "t": 1651528899282
        },
        {
            "x": 406.45833253860474,
            "y": 274.2057228088379,
            "t": 1651528899299
        },
        {
            "x": 406.45833253860474,
            "y": 274.2057228088379,
            "t": 1651528899316
        },
        {
            "x": 405.83333253860474,
            "y": 273.5807228088379,
            "t": 1651528899333
        }
    ]
];

export default GesturesExploratorium;
