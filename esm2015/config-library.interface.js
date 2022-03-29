import { InjectionToken } from '@angular/core';
export class IConfigLibrary {
}
export class IWhiteList {
}
export const defaultConfigLibrary = {
    whiteList: [
        {
            word: 'oauth/token',
        }
    ],
    encryptPhrase: 'dAN0n3IR0nM4n4p1',
    apiURL: 'http://localhost:8082/',
    refreshTokenURL: 'oauth/refreshToken',
    accessTokenURL: 'oauth/token',
    accessTokenADURL: 'oauth/tokenAd',
    resetPasswordURL: 'oauth/resetPassword',
    loginType: 'both',
    clientId: '',
    authority: '',
    redirectUri: '',
};
export const CONFIGLIBRARY = new InjectionToken('defaultConfigLibrary');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLWxpYnJhcnkuaW50ZXJmYWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvc2VjdXJpdHktbGlicmFyeS9zcmMvY29uZmlnLWxpYnJhcnkuaW50ZXJmYWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0MsTUFBTSxPQUFPLGNBQWM7Q0FZMUI7QUFFRCxNQUFNLE9BQU8sVUFBVTtDQUV0QjtBQUdELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFtQjtJQUNoRCxTQUFTLEVBQUU7UUFDUDtZQUNJLElBQUksRUFBRSxhQUFhO1NBQ3RCO0tBQ0o7SUFDRCxhQUFhLEVBQUUsa0JBQWtCO0lBQ2pDLE1BQU0sRUFBRSx3QkFBd0I7SUFDaEMsZUFBZSxFQUFFLG9CQUFvQjtJQUNyQyxjQUFjLEVBQUUsYUFBYTtJQUM3QixnQkFBZ0IsRUFBRSxlQUFlO0lBQ2pDLGdCQUFnQixFQUFFLHFCQUFxQjtJQUN2QyxTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsRUFBRTtJQUNaLFNBQVMsRUFBRSxFQUFFO0lBQ2IsV0FBVyxFQUFFLEVBQUU7Q0FDbEIsQ0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxJQUFJLGNBQWMsQ0FBaUIsc0JBQXNCLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGlvblRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSUNvbmZpZ0xpYnJhcnl7XHJcbiAgICB3aGl0ZUxpc3QhOiBJV2hpdGVMaXN0W107XHJcbiAgICBlbmNyeXB0UGhyYXNlITpzdHJpbmc7XHJcbiAgICBhcGlVUkwhOnN0cmluZztcclxuICAgIHJlZnJlc2hUb2tlblVSTCE6c3RyaW5nO1xyXG4gICAgYWNjZXNzVG9rZW5VUkwhOnN0cmluZztcclxuICAgIGFjY2Vzc1Rva2VuQURVUkwhOnN0cmluZztcclxuICAgIHJlc2V0UGFzc3dvcmRVUkwhOnN0cmluZztcclxuICAgIGxvZ2luVHlwZSE6c3RyaW5nO1xyXG4gICAgY2xpZW50SWQhOnN0cmluZztcclxuICAgIGF1dGhvcml0eSE6c3RyaW5nO1xyXG4gICAgcmVkaXJlY3RVcmkhOnN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElXaGl0ZUxpc3R7XHJcbiAgICB3b3JkITogc3RyaW5nXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZ0xpYnJhcnk6IElDb25maWdMaWJyYXJ5ID0ge1xyXG4gICAgd2hpdGVMaXN0OiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB3b3JkOiAnb2F1dGgvdG9rZW4nLFxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICBlbmNyeXB0UGhyYXNlOiAnZEFOMG4zSVIwbk00bjRwMScsXHJcbiAgICBhcGlVUkw6ICdodHRwOi8vbG9jYWxob3N0OjgwODIvJyxcclxuICAgIHJlZnJlc2hUb2tlblVSTDogJ29hdXRoL3JlZnJlc2hUb2tlbicsXHJcbiAgICBhY2Nlc3NUb2tlblVSTDogJ29hdXRoL3Rva2VuJyxcclxuICAgIGFjY2Vzc1Rva2VuQURVUkw6ICdvYXV0aC90b2tlbkFkJyxcclxuICAgIHJlc2V0UGFzc3dvcmRVUkw6ICdvYXV0aC9yZXNldFBhc3N3b3JkJyxcclxuICAgIGxvZ2luVHlwZTogJ2JvdGgnLFxyXG4gICAgY2xpZW50SWQ6ICcnLFxyXG4gICAgYXV0aG9yaXR5OiAnJyxcclxuICAgIHJlZGlyZWN0VXJpOiAnJyxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENPTkZJR0xJQlJBUlkgPSBuZXcgSW5qZWN0aW9uVG9rZW48SUNvbmZpZ0xpYnJhcnk+KCdkZWZhdWx0Q29uZmlnTGlicmFyeScpO1xyXG4iXX0=