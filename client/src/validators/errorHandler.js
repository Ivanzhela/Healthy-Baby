export const errorHandler = (submitValues) => {
    const errors = {};

    if (!submitValues) {
        return;
    }

    if (submitValues.username?.length < 2 || submitValues.username?.length > 10) {
        errors.username = 'Username must be between 2-10 characters long!'
    };
    if (submitValues.email?.length < 8 || submitValues.email?.match(/.+@.+\..+/, 'i') === null) {
        errors.email = 'Email must be at least 8 characters long in a valid format!'
    };
    if (submitValues.password?.length < 4) {
        errors.password = 'Password must be at least 4 characters long!'
    };
    if (submitValues?.rePass) {
        if (submitValues?.rePass !== submitValues?.password) {
            errors.rePass = 'Passwords don`t match'
        };
    };
    if (submitValues.name?.length < 2) {
        errors.name = 'Name must be at least 2 characters long!'
    };
    if (submitValues?.prepTime < 1) {
        errors.prepTime = 'Preparation time should be a positive number!'
    };
    if (submitValues?.cookTime < 1) {
        errors.cookTime = 'Cook time should be a positive number!'
    };
    if (submitValues?.servings < 1) {
        errors.servings = 'Servings should be a positive number!'
    };
    if (submitValues.ingredients?.length < 1) {
        errors.ingredients = 'Ingredients is required!'
    };
    if (submitValues.preparation?.length < 1) {
        errors.preparation = 'Preparation is required!'
    };
    if (submitValues.image?.length < 1 && (!submitValues.image?.startsWith('https://') || !submitValues.image?.startsWith('http://'))) {
        errors.image = 'Image should starts with http:// or https:// !'
    };
    if (submitValues.video?.length > 0 && !submitValues.video?.startsWith('https://www.youtube.com/')) {
        errors.video = 'Video should starts with https://www.youtube.com/ !'
    };

    return errors;
};