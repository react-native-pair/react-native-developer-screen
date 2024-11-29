
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDeveloperScreenSpec.h"

@interface DeveloperScreen : NSObject <NativeDeveloperScreenSpec>
#else
#import <React/RCTBridgeModule.h>

@interface DeveloperScreen : NSObject <RCTBridgeModule>
#endif

@end
