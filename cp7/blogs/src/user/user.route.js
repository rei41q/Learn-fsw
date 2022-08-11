const express = require("express");
const { checkSchema } = require("express-validator");
const tokenVerification = require("../middleware/token.verification");
const {
  registrationValidationObject,
} = require("../middleware/user.validation");
const { validate } = require("../middleware/validation");
const userRouter = express.Router();

const userController = require("./user.controller");

/**
 * @swagger
 * /user/registration:
 *  post:
 *    tags:
 *      - user
 *    summary: API untuk registrasi user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Nama lengkap
 *              email:
 *                type: string
 *                example: contoh@gmail.com
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                id:
 *                  type: string
 *                fullname:
 *                  type: string
 *                email:
 *                  type: string
 *                password:
 *                  type: string
 *                updatedAt:
 *                  type: string
 *                createdAt:
 *                  type: string
 */
userRouter.post(
  "/user/registration",
  checkSchema(registrationValidationObject),
  validate,
  userController.createUser
);

/**
 * @swagger
 * /user/{userId}:
 *  put:
 *    security:
 *      - bearerAuth : []
 *    tags:
 *      - user
 *    summary: API untuk edit user
 *    parameters:
 *      - in: path
 *        name: userId
 *        required: true
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              fullname:
 *                type: string
 *                example: Nama lengkap
 *              email:
 *                type: string
 *                example: contoh@gmail.com
 *              password:
 *                type: string
 *                example: Password@123!
 *    responses:
 *      '200':
 *        description: Edit data sukses
 */
userRouter.put("/user/:userId", tokenVerification, (req, res) => {
  res.send("Edit data sukses");
});

module.exports = userRouter;
