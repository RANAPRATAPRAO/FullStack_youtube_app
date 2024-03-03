import multer from   "multer";
// here we are using diskStorage not memoryStorage;
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./public/temp")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
export const upload=multer({
    storage,

})