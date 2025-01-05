const {HandleSum}=require('./HandleSum');
const {Handle404} =require('./Handle404'); 
const {HomeHandler}=require('./HomeHandler');
const {CalculaterForm}=require('./CalculaterForm');

const inputHandler = (req, res) => {
  if (req.url == "/") {
    HomeHandler(req,res);
  } 
  else if(req.url=="/Calculater"){
   CalculaterForm(req,res);

  }
  else if(req.url=="/handleSum"){
      HandleSum(req,res);
  }

  else {
    Handle404(req,res);
  }
};

exports.inputHandler = inputHandler;
