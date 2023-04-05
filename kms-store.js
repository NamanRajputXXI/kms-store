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
      img1: (img) => {
        var mImg = document.createElement("img");
        mImg.src = img;
        return mImg;
      },
      svg1: (svg) => {
        var mSvg = document.createElement("img");
        mSvg.src = svg;
        return mSvg;
      },
      a1: (link) => {
        var mLink = document.createElement("a");
        mLink.href = link;
        return mLink;
      },
    },
    l: [
      {
        0: "Images",
        key: "ImageId",
        col: (src, mE) => {
          mE.appendChild(mRndr["utils"]["img1"](src));
        },
      },
      {
        0: "Item Code",
        key: "ItemCode",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Item Name",
        key: "ItemName",
        col: (link, mE) => {
          mE.appendChild(mRndr["utils"]["a1"](link));
        },
      },
      {
        0: "Item Category",
        key: "ItemCategory",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Current Stock",
        key: "PriceUnit",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Item Price (Rs.)",
        key: "ItemPrice",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "Selling Price (Price/Unit)",
        key: "SellingPrice",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "MINIMUM STOCK",
        key: "MinimumStock",
        col: (data, mE) => {
          mE.appendChild(mRndr["utils"]["txt1"](data));
        },
      },
      {
        0: "EXPIRY",
        key: "Expiry",
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
      {
        0: "Menu",
        key: "Menu",
        col: (svg, mE) => {
          mE.appendChild(mRndr["utils"]["svg1"](svg));
        },
      },
    ],
  };

  //head..
  function mHead1(mE, mhead_ARR, w) {
    var mHead = document.createElement("div");
    mHead.style.backgroundColor = "rgba(0,32,96, 1)";
    mHead.style.width = "100%";
    mHead.style.height = "5.5vh";
    mHead.style.display = "flex";
    mHead.style.alignItems = "center";
    mHead.style.justifyContent = "center";
    mE.appendChild(mHead);

    //txt 1
    function mSet_txt1(mCurr_I1) {
      var mTxt = document.createElement("div");
      mTxt.style.fontSize = "1.3vh";
      mTxt.style.color = "rgba(255,255,255, 1)";
      mTxt.innerText = mCurr_I1["0"];
      mTxt.style.width = mCurr_I1["1"] != undefined ? mCurr_I1["1"] : w;
      mTxt.style.textAlign = "center";
      mHead.appendChild(mTxt);
    }

    //data..
    //gen..
    console.log(mhead_ARR);
    for (let i1 = 0; i1 < mhead_ARR.length; i1++) {
      const mCurr_I1 = mhead_ARR[i1];
      mSet_txt1(mCurr_I1);
    }
  }
  mHead1(mTbl_div, mRndr.l, "10vw");

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
    // mRow.id = core_1mn["mUniqueId"].mGenerate(11);
    mRow.style.display = "flex";
    mRow.style.alignItems = "center";
    mRow.style.margin = "0.5vh 0";
    mTbl_div.appendChild(mRow);
    mRow1(mRow, mCurr_I1);
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
