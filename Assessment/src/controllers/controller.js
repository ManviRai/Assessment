
const userService=require('../service/service');

const postUser=async(req,res)=>{
   try{
    const userDetail=await userService.postUser(req.body);
    return res.status(200).send(userDetail);
   }
   catch(error){
    return res.status(500).send(error);
   }
}

const dynamicUser=async(req,res)=>{
    try{
        const userDetail=await userService.postDynamicUser(req.body);
        return res.status(200).send(userDetail);
       }
       catch(error){
        return res.status(500).send(error);
       }
    }

    const GetUserStatusPWmethod=async(req,res)=>{
        try{
            const Getuser=await userService.GetUserStatusPWmethod(req.body);
            return res.status(200).send(Getuser)
        }
        catch(error){
            return res.status(500).send(error);
           }
    }
    const getUserRole=async(req,res)=>{
        try{
            const userId=req.params.userId
            const GetuserRole=await userService.getUserRole(userId);
            return res.status(200).send(GetuserRole)
        }
        catch(error){
            return res.status(500).send(error);
           }
    }
    const getUserAccount=async(req,res)=>{
        try{
            const userId=req.params.userId
            const GetuserAcc=await userService.getUserAcount(userId);
            return res.status(200).send(GetuserAcc)
        }
        catch(error){
            return res.status(500).send(error);
           }
    }

 const getLogoImage = async (req, res) => {
        try {
          const userId = req.params.userId;
          const logoImage = await userService.getLogoImage(userId);
         return res.status(200).send(logoImage);
        } catch (error) {
         return res.status(404).send(error.message);
        }
      };
      
      const getWelcomeImage = async (req, res) => {
        try {
          const userId = req.params.userId;
          const welcomeImage = await userService.getWelcomeImage(userId);
          return res.status(200).send(welcomeImage);
        } catch (error) {
          return res.status(404).send( error.message );
        }
      };

      const postImage=async(req,res)=>{
        try{
            const imageDetail=await userService.postImage(req.body);
            return res.status(200).send(imageDetail);
           }
           catch(error){
            return res.status(500).send(error);
           }
        }


    const getAccStatus=async(req,res)=>{
        try{
            const AccountName=req.params.AccountName;
            const AccountStatus=await userService.getAccStatus(AccountName);
            return res.status(200).send(AccountStatus)
        }
        catch(error){
            return res.status(500).send(error)
        }
    }

    const GetPermission=async(req,res)=>{
        try{
            const userId=req.params.userId;
            const userPermission=await userService.GetPermission(userId);
            return res.status(200).send(userPermission)
        }
        catch(error){
            return res.status(500).send(error)
        }
    }
module.exports={
/**
 * @swagger
 * /postUser:
 *   post:
 *     summary: Save user details.
 *     description: Use this API to register new user.
 *     tags:
 *       - user registration
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: user Registaration
 *         description: The user must provide the required credentials.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: integer
 *               example: 2
 *             password:
 *               type: string
 *               example: "password"
 *             role:
 *               type: string
 *               example: "admin"
 *             logoImage:
 *               type: string
 *               example: "C:\\Users\\HP\\OneDrive\\Desktop\\Assessment\\logo.png"
 *             AccountName:
 *               type: string
 *               example: "Chandana"
 *             AccountType:
 *               type: string
 *               example: "Current"
 *             AccountStatus:
 *               type: string
 *               example: "Active"
 *     responses:
 *       200:
 *         description: Farmer registration successful.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */     
postUser,
/**
 * @swagger
 * /postDynamicUser:
 *   post:
 *     summary: Create a dynamic user.
 *     description: Use this API to create a new dynamic user.
 *     tags:
 *       - Dynamic User
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: dynamicUser 
 *         description: The dynamic user details.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: integer
 *               example: 2
 *             tableName:
 *               type: string
 *               example: "DynamicUser "
 *             rowNames:
 *               type: string
 *               example: "row2"
 *             columnNames:
 *               type: string
 *               example: "column1"
 *             values:
 *               type: string
 *               example: "4"
 *     responses:
 *       200:
 *         description: Dynamic user created successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */
        dynamicUser,
/**
 * @swagger
 * /GetUserStatusPWmethod:
 *   post:
 *     summary: Get user status using password method.
 *     description: Use this API to get the user status using password method.
 *     tags:
 *       - User Status
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: getUserStatusPW 
 *         description: The user credentials.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             userId:
 *               type: integer
 *               example: 1
 *             password:
 *               type: string
 *               example: "Manvi"
 *     responses:
 *       200:
 *         description: User status retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */
        GetUserStatusPWmethod,
  /**
 * @swagger
 * /GetUserRole/{userId}:
 *   get:
 *     summary: Get user role.
 *     description: Use this API to get the user role.
 *     tags:
 *       - User Role
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The user ID.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: User role retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */      
        getUserRole,
 /**
 * @swagger
 * /GetUserAccount/{userId}:
 *   get:
 *     summary: Get user account details.
 *     description: Use this API to get the details of a user account.
 *     tags:
 *       - User Account
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The user ID for which account details are requested.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: User account details retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */       
        getUserAccount,
 /**
 * @swagger
 * /GetLogoImage/{userId}:
 *   get:
 *     summary: Get logo image for a user.
 *     description: Use this API to retrieve the logo image associated with a user.
 *     tags:
 *       - User Logo
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The user ID for which the logo image is requested.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Logo image retrieved successfully.
 *       404:
 *         description: Not Found. Logo image not found for the user.
 *       500:
 *         description: Internal Server Error.
 */           
        getLogoImage,
/**
 * @swagger
 * /GetWelcomeImage/{userId}:
 *   get:
 *     summary: Get welcome image for a user.
 *     description: Use this API to retrieve the welcome image associated with a user.
 *     tags:
 *       - User Welcome
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The user ID for which the  image is requested.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: welcome image retrieved successfully.
 *       404:
 *         description: Not Found. welcome image not found for the user.
 *       500:
 *         description: Internal Server Error.
 */   
        getWelcomeImage,
 /**
 * @swagger
 * /getAccStatus/{AccountName}:
 *   get:
 *     summary: Get account status.
 *     description: Use this API to retrieve the status of a specific account.
 *     tags:
 *       - Account Status
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: AccountName
 *         description: The name of the account for which the status is requested.
 *         required: true
 *         schema:
 *           type: string
 *           example: "Chandana"
 *     responses:
 *       200:
 *         description: Account status retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */       
        getAccStatus,
 /**
 * @swagger
 * /getPermission/{userId}:
 *   get:
 *     summary: Get user permission.
 *     description: Use this API to retrieve the permission details for a specific user.
 *     tags:
 *       - User Permission
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
 *         description: The user ID for which permission details are requested.
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: User permission details retrieved successfully.
 *       400:
 *         description: Bad Request. Invalid input data.
 *       500:
 *         description: Internal Server Error.
 */       
        GetPermission
    }