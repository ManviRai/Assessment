const express=require('express');
const router=express.Router();
const userController=require('../controllers/controller');
const dynamicController=require('../controllers/dynamicController')

router.post('/postUser',userController.postUser);
router.post('/postDynamicUser',userController.dynamicUser);

router.post('/GetUserStatusPWmethod',userController.GetUserStatusPWmethod);
router.get('/GetUserRole/:userId',userController.getUserRole);
router.get('/GetUserAccount/:userId',userController.getUserAccount);


router.get('/GetLogoImage/:userId', userController.getLogoImage);
router.get('/GetWelcomeImage/:userId', userController.getWelcomeImage);

router.get('/getAccStatus/:AccountName',userController.getAccStatus);
router.get('/getPermission/:userId',userController.GetPermission);

router.get('/getColumnValues/:columnNames',dynamicController.getTableValue);
router.get('/getRowValues/:rowNames',dynamicController.getRowValue);
router.get('/getValue/:rowNames/:columnnames',dynamicController.getValue);

module.exports={
    router
}