import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from "react";

export default function ProtectedRoute({ errorPage, targetPage }) {
    var [page, setPage] = useState(<></>);
    function renderPage() {
        const token = sessionStorage.getItem('token');
        if (!token) {
            setPage(errorPage)
            return
        }
        const decodeToken = jwtDecode(token)
        const { exp } = decodeToken;
        if (exp + '000' - Date.now() < 0) {
            setPage(errorPage)
            return
        }
        setPage(targetPage)
    }
    useEffect(() => {
        renderPage()
    }, [])
    return page;
}