import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {SearchArea, PageArea} from './styled'
import useApi from '../../helpers/OlxAPI'


import {PageContaniner} from '../../components/MainComponents'
import AdItem from '../../components/partials/AdItem'

const Page = () =>{
    const api = useApi()
    const [stateList, setStateList] = useState([])
    const [categories, setCategories] = useState([])
    const [adList, setAdList] = useState([])

    useEffect(()=>{
        const getStates = async () =>{
            const slist = await api.getStates()
            setStateList(slist)
        }
        getStates();
    }, []);

    useEffect(()=>{
        const getCategories = async () =>{
            const cats = await api.getCategories()
            setCategories(cats)
        }
        getCategories();
    }, []);

    useEffect(()=>{
        const getRecentAds = async () =>{
            const json = await api.getAds({
                sort: 'desc',
                limit:8
            })
            setAdList(json.ads)
        }
        getRecentAds();
    }, []);

    return(
        <>
            <SearchArea>
                <PageContaniner>
                    <div className="searchBox">
                        <form method="GET" action="/ads">
                            <input type="text" name="q" placeholder="O que você procura?" />
                            <select name="state">
                                {stateList.map((i, k)=>
                                    <option key={k} value={i.name}>{i.name}</option>

                                )}
                            </select>
                            <button>Pesquisar</button>
                        </form>
                    </div>
                    <div className="categoryList">
                        {categories.map((i,k)=>
                            <Link key={k} to={`/ads?cat=${i.slug}`} className="categoryItem" >
                                <img src={i.img} alt="" />
                                <spam>{i.name}</spam>
                            </Link>
                        )}
                    </div>
                </PageContaniner>
            </SearchArea>
            <PageContaniner>           
                <PageArea >
                    <h2>Anúncios Recentes</h2>
                    <div className="list">
                        {adList.map((i,k)=>
                            <AdItem key={k} data={i} />
                        )}
                    </div>
                    <Link to="/ads" className="seeAllLink">Ver todos</Link>
                
                    <hr/>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </PageArea>
            </PageContaniner>
        </>
    )
}

export default Page