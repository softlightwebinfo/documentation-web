import {AppBarComponent, ButtonComponent, ButtonIconComponent, IconComponent, ToolbarComponent, TypographyComponent} from "@codeunic/library-ui/build";
import * as React from "react";

export const Header = () => (
    <AppBarComponent position={"static"}>
        <ToolbarComponent regular={true} gutters={true}>
            <ButtonIconComponent
                style={{
                    marginRight: 16
                }}
            >
                <IconComponent icon="menu"/>
            </ButtonIconComponent>
            <TypographyComponent
                style={{
                    flexGrow: 1
                }}
                variant="h6"
            >
                News
            </TypographyComponent>
            <ButtonComponent onClick={() => console.log()} theme="inherit">
                Crear Pagina
            </ButtonComponent>
            <ButtonComponent onClick={() => console.log()} theme="inherit">
                Login
            </ButtonComponent>
        </ToolbarComponent>
    </AppBarComponent>
);
