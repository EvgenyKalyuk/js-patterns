type InstanceType = {
    publicMethod: () => string;
    publicProperty: string;
}

export default (() => {
    let instance: InstanceType;

    function init(): InstanceType {
        const privateVar = 'this is private var';

        function privateMethod(): string {
            return 'this is private method';
        }

        return {
            publicMethod(): string {
                return 'this is public method'
            },
            publicProperty: 'this is public property'
        }
    }

    return {
        getInstance() {
            if (!instance) {
                instance = init();
            }

            return instance;
        }
    }
})();


