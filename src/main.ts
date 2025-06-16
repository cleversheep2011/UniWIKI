import {router} from "./Backend";

router.listen(80, "localhost", (err) => {
    if (err) {
        console.error(err);
    }
})