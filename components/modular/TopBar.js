import { Text } from "../styled/Text";
import { Bar, Profile, ProfilePicture, LogOutButton } from "../styled/bar";
import { FaSignOutAlt } from 'react-icons/fa'
import { useRouter } from "next/router";

export default function TopBar({ profile }) {

    const router = useRouter();

    return (
        <Bar>
            <Profile>
                <ProfilePicture src="/default_profile.png" />
                <Text>{profile?.name} </Text>
            </Profile>

            <LogOutButton>
                <Text onClick={() => { router.push('/api/auth/logout') }}> {"Logout"} </Text>
                <Text size={3} onClick={() => { router.push('/api/auth/logout') }}>  <FaSignOutAlt /> </Text>
            </LogOutButton>
        </Bar>
    )
}