import Link from "next/link";
import { Profile } from "types/profile";

const getNotificationsCount = async (): Promise<number> => {
    const res = await fetch('http://localhost:3000/notification?_start=0&_end=10');
    if (!res.ok) {
        console.log(res.ok);
        throw Error('Failed to fetch notifications');
    }
    return Number(res.headers.get('X-Total-Count'));
};

const getProfile = async (): Promise<Profile> => {
    const res = await fetch('http://localhost:3000/profile');
    if (!res.ok) {
        console.log(res.ok);
        throw Error('Failed to fetch profile');
    }
    return res.json();
};

export default async () => {
    const notificationCountPromise = getNotificationsCount();
    const profilePromise = getProfile();
    const [notificationCount, profile] = await Promise.all([notificationCountPromise, profilePromise]);
    return (
        <nav className="navbar bg-base-100">
            <div className="flex-1">
                <Link href="/" className="btn btn-ghost normal-case text-xl">DTF Clone</Link>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                            </svg>
                            <span className="badge badge-sm indicator-item">{notificationCount}</span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">8 Items</span>
                            <span className="text-info">Subtotal: $999</span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div tabIndex={0} className="dropdown dropdown-bottom dropdown-end btn btn-ghost flex gap-4">
                    <p>{profile.userName}</p>
                    <label className="avatar">
                        <div className="w-10 rounded-full">
                            <img src={profile.avatar} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/profile">Profile</Link></li>
                        <li><Link href="/settings">Settings</Link></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
