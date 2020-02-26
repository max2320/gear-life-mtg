import uuidv5 from 'uuid/v5';

const __WORKSPACE__ = uuidv5('gearlife.maxfs.com', uuidv5.DNS)
export default (salt)=>uuidv5(salt, __WORKSPACE__);
