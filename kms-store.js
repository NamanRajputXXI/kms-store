//table..
function mSet_table1(mE) {
  var mTbl_div = document.createElement("div");
  mTbl_div.style.width = "100%";
  mTbl_div.style.height = "100%";
  //mTbl_div.style.backgroundColor = "red";
  mE.appendChild(mTbl_div);

  //rndr..
  var mRndr = {
    utils: {
      txt1: (txt) => {
        var mTxt = document.createElement("div");
        mTxt.style.fontSize = "1.5vh";
        mTxt.style.width = "8vw";
        mTxt.style.color = "rgba(34,34,34, 1)";
        mTxt.innerHTML = txt;
        return mTxt;
      },
    },
    l: [
      {
        0: "Recipe ID",
        key: "RecipeID",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Recipe Name",
        key: "RecipeName",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Recipe Type",
        key: "RecipeType",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Min Yield",
        key: "MinYield",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Max Yield",
        key: "MaxYield",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Price/Unit",
        key: "PriceUnit",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Serving",
        key: "Serving",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Created By",
        key: "CreatedBy",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Created On",
        key: "CreatedOn",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Status",
        key: "Status",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
    ],
  };

  //head..
  function mHead1(mE, mhead_ARR = [], w) {
    var mHead = document.createElement("div");
    mHead.style.backgroundColor = "rgba(0,32,96, 1)";
    mHead.style.width = "100%";
    mHead.style.height = "3.5vh";
    mHead.style.display = "flex";
    mHead.style.alignItems = "center";
    mE.appendChild(mHead);

    //Space.....
    core_1mn["space"].set({
      w: "0.5vw",
      e1: mHead,
    });

    //txt 1
    function mSet_txt1(mCurr_I1) {
      var mTxt = document.createElement("div");
      mTxt.style.fontSize = "1.3vh";
      mTxt.style.color = "rgba(255,255,255, 1)";
      mTxt.innerHTML = mCurr_I1["0"];
      mTxt.style.width = mCurr_I1["1"] != undefined ? mCurr_I1["1"] : w;
      mHead.appendChild(mTxt);
    }

    //data..
    //gen..
    for (let i1 = 0; i1 < mhead_ARR.length; i1++) {
      const mCurr_I1 = mhead_ARR[i1];
      mSet_txt1(mCurr_I1);
    }
  }
  mHead1(mTbl_div, mRndr["l"], "8vw");

  //Space.....
  core_1mn["space"].set({
    h: "1vh",
    e1: mTbl_div,
  });

  //btns..
  function mSet_btns_1(mE) {
    var mBtnList = document.createElement("div");
    mBtnList.style.display = "flex";
    mBtnList.style.alignItems = "center";
    mE.appendChild(mBtnList);

    /*function mSet_btn1() {
            //Btn.....  
            var mBtnHolder = document.createElement("div"); 
            mBtnList.appendChild(mBtnHolder);
            var mBtn = core_1mn['btn']['1'].set({ 
                     "e1": mBtnHolder,
                     "w": "3vw",
                     "posH": 1,
                     "h": "3.2vh",
                     "txt": {
                       "0": "",
                       "1": "1.5vh"
                      },
                      "ico": {"0": "three_dots_0.svg", "1": "2.1vh", "2": "2.1vh", 
                      //"3": "rgba(255,255,255, 1.0)"
                      },
                     "cb": {
                         "onClick": function(data){
                            
                      },
                     },
                     "typ": 1,
                     "vari": 2
            });

        }
        mSet_btn1();*/
  }

  //row..
  function mRow1(mRow, mData) {
    for (let i1 = 0; i1 < mRndr["l"].length; i1++) {
      const mCurr_I1 = mRndr["l"][i1];
      //find and set..
      if (mData.hasOwnProperty(mCurr_I1["key"]) == true) {
        mCurr_I1.col(mData[mCurr_I1["key"]], mRow);
      }
    }
  }
  function mAddRow1(mCurr_I1) {
    var mRow = document.createElement("div");
    mRow.id = core_1mn["mUniqueId"].mGenerate(11);
    mRow.style.display = "flex";
    mRow.style.alignItems = "center";
    mRow.style.margin = "0.5vh 0";
    mTbl_div.appendChild(mRow);
    //Space.....
    core_1mn["space"].set({
      w: "0.5vw",
      e1: mRow,
    });
    //add row..
    mRow1(mRow, mCurr_I1);
    //Space.....
    core_1mn["space"].set({
      w: "1vw",
      e1: mRow,
    });
    //add btns..
    mSet_btns_1(mRow);
  }

  //get row data and set..
  function mGetRowDataAndSet() {
    const data = [
      {
        RecipeID: "00001",
        RecipeName: "Dosa",
        RecipeType: "General",
        MinYield: "100 Pcs",
        MaxYield: "500 Pcs",
        PriceUnit: "7/Pc",
        Serving: "1 Pc",
        CreatedBy: "Admin",
        CreatedOn: "23/02/2023",
        Status: "Active",
        tag1: "my_tag_1",
      },
    ];

    //console.log(data);
    //gen..
    for (let i1 = 0; i1 < data.length; i1++) {
      const mCurr_I1 = data[i1];
      mAddRow1(mCurr_I1);
    }
  }
  mGetRowDataAndSet();
}
mSet_table1(add_any_element_for_append);
