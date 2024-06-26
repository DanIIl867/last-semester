import CatItem from '../Components/CatItem';

const CatsPage = () => {
    return (
        <>
            <h2>Cats</h2>
            <ul>
                {['cat-1', 'cat-2', 'cat-3', 'cat-4'].map(cat => {
                    return (
                        <CatItem cat={cat}/>
                    )
                })}
            </ul>


        </>

    )
}

export default CatsPage;