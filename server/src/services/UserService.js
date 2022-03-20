import BasicService from "./BasicService";
import db from "../db/models"

export class UserService extends BasicService {
    constructor() {
        super(db.User)
    }
    authenticate() {
        super.model.findOne()
    }

}