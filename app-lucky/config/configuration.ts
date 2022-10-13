export default () => ({
    port: parseInt(process.env.PORT),
    host: process.env.DATABASE_HOST,
    userDb: process.env.USER_DB,
    passwordDb: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    jwt_secret: process.env.JWT_SECRET,
    jwt_exp_h: process.env.JWT_EXP_H,
});