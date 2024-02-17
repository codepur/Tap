import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Flex,
} from "@chakra-ui/react";
import PasswordSettings from "./ProfileTabs/PasswordSettings";
import ProfileSettings from "./ProfileTabs/ProfileSettings";

const ProfileComponent = ({ user }: any) => {
    return (
        <Flex w={"100%"}>
            <Tabs w={"100%"}>
                <TabList>
                    <Tab _selected={{ color: "#2c8526", fontWeight: 700 }}>
                        Profile Settings
                    </Tab>
                    <Tab _selected={{ color: "#2c8526", fontWeight: 700 }}>
                        Password Settings
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        <ProfileSettings user={user} />
                    </TabPanel>
                    <TabPanel>
                        <PasswordSettings user={user} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    );
};

export default ProfileComponent;
