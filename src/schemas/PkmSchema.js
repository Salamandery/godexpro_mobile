const PkmSchema = {
    name: 'Pkm',
    primaryKey: _id,
    properties: {
        _id: { type: 'int', indexed: true },
        name: { type: 'string' },
        description_dex: { type: 'string' },
        types: { type: 'string' },
        weaknesses: { type: 'string' },
        atk: { type: 'int' },
        def: { type: 'int' },
        stm: { type: 'int' },
        cp: { type: 'cp' },
        genders: { type: 'string' },
    }
}

export default PkmSchema;