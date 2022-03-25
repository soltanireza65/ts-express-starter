import { prop, getModelForClass, modelOptions, post, pre, ReturnModelType, DocumentType, index, types, queryMethod } from '@typegoose/typegoose';

interface QueryHelpers {
  findByName: types.AsQueryMethod<typeof findByName>;
}
function findByName(this: types.QueryHelperThis<typeof User, QueryHelpers>, name: string) {
  return this.find({ name }); // it is important to not do a "await" and ".exec"
}

@pre<User>('save', function () {
  console.log('preSave');
})
@modelOptions({ schemaOptions: { collection: 'users', timestamps: true } })
@queryMethod(findByName)
class User {
  @prop({ required: true })
  public name: string;

  @prop({ type: String, required: true, unique: true })
  public email: string;

  @prop({ type: String, required: true })
  @prop({ select: false })
  public password: string;

  public createdAt?: Date;

  public updatedAt?: Date;

  // the "this" definition is required to have the correct types
  // public static async findBySpecies(this: ReturnModelType<typeof User>, species: string) {
  //   return this.find({ species }).exec();
  // }

  // the "this" definition is required to have the correct types
  // public async setSpeciesAndSave(this: DocumentType<User>, species: string) {
  //   // this.species = species;
  //   await this.save();
  // }
}

const UserModel = getModelForClass<typeof User, QueryHelpers>(User);

export default UserModel;
