

export const BasicTypes = () => {

    const name:string = 'Neftali'
    const age: number = 24;
    const isActive: boolean = true;
    const powers: string[]= ['React','REactNative','Angular','Vue','Quick'];

    powers.push('siuu')
    
    return (
        <>


        <h3>Tipos básicos</h3>

        {name} {age} {isActive ? 'true':'false'}
        <br />
        {powers.join(', ')}


        </>
    )
}
