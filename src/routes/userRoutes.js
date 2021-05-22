const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/users", (req, res) => {
  userController.getAll(req, res);
});

router.get("/users/:id", (req, res) => {
  userController.getById(req, res);
});

router.post("/users", (req, res) => {
  userController.saveUser(req, res);
});

router.patch("/users/:id", (req, res) => {
  userController.patchUser(req, res);
});

router.delete("/users/:id", (req, res) => {
  userController.deleteUser(req, res);
});

module.exports = router;

//TODO swagger docs in separate file

/**
 * @swagger
 *  components:
 *    schemas:
 *      UserUpdate:
 *        type: array
 *        items:
 *          type: object
 *          properties:
 *            propName:
 *              type: string
 *              description: name of the property which I want to change
 *            value:
 *              type: string
 *              description: value of the property which I want to change
 *        example:
 *             - propName: name
 *               value: New Name
 *      User:
 *        type: object
 *        required:
 *          - name
 *          - email
 *          - id
 *        properties:
 *          id:
 *            type: string
 *            description: The auto-generated id of the user.
 *          name:
 *            type: string
 *            description: The name of the user.
 *          email:
 *            type: string
 *            description: The e-mail of the user.
 */

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API to manage users
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users from the database
 *     tags: [Users]
 *     responses:
 *       "200":
 *         description: The list of users.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       "404":
 *         description: No users in the database.
 */

/**
 *   @swagger
 *   /users/{id}:
 *     get:
 *       summary: Get a user by id
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       responses:
 *         "200":
 *           description: The user with the provided id.
 *         "404":
 *           description: User not found.
 */

/**
 *@swagger
 * /users:
 *    post:
 *     summary: Create a new user
 *     description: Creates a new user in the database
 *     tags: [Users]
 *     requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *            example:
 *              name: John Doe
 *              email: johnd@email.com
 *     responses:
 *       "200":
 *         description: The created user.
 */

/**
 *   @swagger
 *   /users/{id}:
 *     patch:
 *       summary: Update a user by id
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/UserUpdate'
 *       responses:
 *         "200":
 *           description: patch results
 *         "404":
 *           description: User not found.
 */

/**
 *   @swagger
 *   /users/{id}:
 *     delete:
 *       summary: Delete a user by id
 *       tags: [Users]
 *       parameters:
 *         - in: path
 *           name: id
 *           schema:
 *             type: string
 *           required: true
 *           description: The user id
 *       responses:
 *         "200":
 *           description: The results of the delete operation.
 *         "404":
 *           description: User not found.
 */
