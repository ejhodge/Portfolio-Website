import * as React from "react";
import "./MyTop.css"

let Jakey ="https://static.wikia.nocookie.net/youtube/images/e/ec/Jakey_Plant.jpg/revision/latest/scale-to-width-down/250?cb=20200922075252";
let Joji ="https://cdn.tuftsdaily.com/2020/10/JOJI_ALBUM_NECTAR_900x.jpg";
let MacMiller ="https://i.scdn.co/image/ab6761610000e5ebed3b89aa602145fde71a163a";
let Nirvana ="https://i.cbc.ca/1.4908329.1542343703!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/kurt-cobain.jpg";
let Halo ="https://upload.wikimedia.org/wikipedia/en/9/92/Halo2-cover.png";
let MonsterHunter ="http://www.monsterhunterworld.com/sp/images/top/bg_mv.jpg";
let MetalGearSolid ="https://s.yimg.com/ny/api/res/1.2/QgavoCOKTnKksoKKwQj_7w--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD03NTA-/https://s.yimg.com/os/creatr-uploaded-images/2022-11/6ba5ffd0-5ec6-11ed-bbd7-f579c2918ed9";
let Zelda ="https://assets1.ignimgs.com/2019/06/04/legend-of-zelda-majoras-mask---button-1559683061466.jpg";

export default class MyTop extends React.Component <{}> {
    render() {
      return (
        <div>
          <h2 className="topTitle">My Top 8 Artists/Game Series</h2>
          <div className="myTop">
            <div className="row">
              <img className="img" src={Jakey} /> 
              <img className="img" src={Joji} /> 
              <img className="img" src={MacMiller} /> 
              <img className="img" src={Nirvana} /> 
            </div>
            <div className="rowTwo">
              <img className="img" src={Halo} /> 
              <img className="img" src={MonsterHunter} /> 
              <img className="img" src={MetalGearSolid} /> 
              <img className="img" src={Zelda} /> 
            </div>
          </div>
        </div>
      );
    }
  }