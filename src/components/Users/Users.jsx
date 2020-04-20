import React from 'react';
import s from './Users.module.css';
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";


const Users = (props) => {

    let pageChange = Math.ceil(props.totalCount / props.pageCount);
    let pages = [];
    for (let i = 1; i <= pageChange; i++) { pages.push(i) }

    return (
        <div>
            <div className={s.pagination}>{pages.map(p => {
                    return <span className={props.activePage === p && s.paginationActiv} onClick={() => {props.onActivePage(p)}}>{p}</span> })
                }
            </div>
            {props.users.map(u => <div key={u.id}>
                    <div className={s.img}>
                        <NavLink to={'./profile/' + u.id}>
                            <img src={u.photoUrl != null ? u.photoUrl : userPhoto} alt=""/>
                        </NavLink>
                    </div>
                    <div> {u.folov ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.folov(u.id)}}>Folov</button>
                                   : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {props.unfolov(u.id)}}>Upfolov</button>}
                    </div>
                    <div>
                        {u.name}
                    </div>
                    <div>
                        {u.status}
                    </div>
                    <div>
                        {u.country}
                    </div>
                    <div>
                        {u.sity}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Users;