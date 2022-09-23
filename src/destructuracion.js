const user1 = {
    name:'abc',
    username: 'vvv',
    social:{
        twitter:'wax',
        face: 'idk'
    }
}

const saluda = (user) => {
    const { name, social: { twitter: tw, face} } = user
    //const { twitter, face } = social
    const orden = ['pizza', 'coca']
    const [comida, debida] = orden
    // console.log(`Hey ${name}. Social: ${tw}, ${face}`);
    // console.log(`Hey ${comida}`);
}

saluda(user1)